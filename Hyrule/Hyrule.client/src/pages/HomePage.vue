<template>

  <div class="row justify-content-around">
    <button @click="getCategory('creatures')" class="btn btn-outline col-2">Creatures</button>
    <button @click="getCategory('equipment')" class="btn btn-outline col-2">Equipment</button>
    <button @click="getCategory('materials')" class="btn btn-outline col-2">Materials</button>
    <button @click="getCategory('monsters')" class="btn btn-outline col-2">Monsters</button>
    <button @click="getCategory('treasure')" class="btn btn-outline col-2">Treasure</button>
  </div>

  <div class="row justify-content-evenly">
    <div v-for="c, index in creatures.data?.non_food" :key="c.id" class="card col-2 m-2">
      <h6 class="m-1 text-center">{{ creatures.data.non_food[index].name }}</h6>
      <img class="img-fluid" :src="creatures.data.non_food[index].image" alt="">
      <p>{{ creatures.data.non_food[index].description }}</p>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { AppState } from "../AppState"
import { hyruleService } from "../services/HyruleService"
import Pop from "../utils/Pop"

export default {
  setup() {
    onMounted(() => {
      getHyrule()
    })

    async function getHyrule() {
      try {
        return await hyruleService.getHyrule()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    return {
      creatures: computed(() => AppState.creatures),
      equipment: computed(() => AppState.equipment),
      materials: computed(() => AppState.materials),
      monsters: computed(() => AppState.monsters),
      treasure: computed(() => AppState.treasure),

      async getCategory(category) {
        try {
          return await hyruleService.getCategory(category)
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: smaller;
  margin: 0;
}
</style>
