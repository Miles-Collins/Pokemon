<template>
  <div class="row">
    <div v-for="a in artPieces" class="col-3 m-3">
      <ArtCard :artPiece="a" />
    </div>
  </div>

</template>

<script>
import { onMounted } from "vue"
import Pop from "../utils/Pop"
import { artService } from "../services/ArtService"
import ArtCard from "../components/HomePage/ArtCard.vue"
import { AppState } from "../AppState"
import { computed } from "@vue/reactivity"


export default {
  setup() {
    onMounted(() => {
      getArt();
    });
    async function getArt() {
      try {
        const art = await artService.getArt();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      artPieces: computed(() => AppState.artPieces)
    };
  },
  components: { ArtCard }
}
</script>

<style>

</style>