<template>

  <div class="row">
    <div class="col-3" v-for="h in heroes" :key="h.id">
      <HeroCard :hero="h" />
    </div>
  </div>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <Modal id="exampleModal">
      <form action="">
        <input type="text">
      </form>
    </Modal>
  </button>

</template>

<script>
import Pop from "../utils/Pop"
import { heroesService } from "../services/HeroesService"
import { onMounted } from "vue"
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"

export default {
  setup() {
    onMounted(() => {
      getHeroes()
    })

    async function getHeroes() {
      try {
        await heroesService.getHeroes()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    return {
      heroes: computed(() => AppState.heroes)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
