<template>

  {{ single.name }}

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from '../AppState.js';
import { onMounted } from "vue";
import { pokeDexService } from "../services/PokedexService";
import Pop from "../utils/Pop";


export default {



  setup() {
    onMounted(() => {
      getPokemon();
    })

    async function getPokemon() {
      try {
        await pokeDexService.getPokemon()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    return {
      single: computed(() => AppState.singlePokemon)



    };

  }
}
</script>

<style>

</style>