<template>

  <div class="row">
    <div class="col-12 text-center">
      <span class="m-0 p-0 ">{{ hero.name }}</span>

      <button @click.prevent.default() type="button" class="btn p-0 m-0 mdi mdi-note" data-bs-toggle="modal"
        :data-bs-target="'#hero' + hero.id">
        <Modal :id="'hero' + hero.id" class="">
          <EditForm :hero="hero" />
        </Modal>
      </button>

    </div>
  </div>
  <div class="row">
    <div class="col-12 text-center">
      <img class="imageHeight" :src="hero.image">
    </div>
    <div class="col-12 justify-content-center d-flex newHeight">
      <p class="ellipsis">{{ hero.bio }}</p>
    </div>
  </div>

</template>

<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger";


export default {
  props: { hero: { type: Object, required: true } },


  setup(props) {
    onMounted(() => {
      logger.log("[PROP NAME]", props.hero.name)
    })

    return {
      async edit() {
        try {

        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }
    };

  }
}
</script>

<style scoped lang="scss">
.imageHeight {
  height: 50VH;
  width: auto;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.newHeight {
  height: 10vh;
}
</style>