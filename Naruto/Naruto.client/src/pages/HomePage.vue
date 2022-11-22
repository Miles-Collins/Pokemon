<template>

</template>

<script>
import Pop from "../utils/Pop"
import { heroesService } from "../services/HeroesService"
import { onMounted } from "vue"

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

    return {}
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
