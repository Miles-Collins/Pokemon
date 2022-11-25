<template>

  <form @submit.prevent="handleSubmit()" class="form-control">
    <div class="col-10 offset-1 form-floating my-2 d-flex align-items-center">
      <input v-model="editable.name" type="text" name="name" id="name" class="form-control">
      <label for="name" class="form-label m-0">Name:</label>
    </div>
    <div class="col-10 offset-1 form-floating my-2 d-flex align-items-center">
      <input v-model="editable.image" type="text" name="image" id="image" class="form-control">
      <label for="image" class="form-label m-0">Image:</label>
    </div>
    <div class="col-10 offset-1 form-floating my-2 d-flex align-items-center">
      <input v-model="editable.village" type="text" name="village" id="village" class="form-control">
      <label for="village" class="form-label m-0">Village:</label>
    </div>
    <div class="col-10 offset-1 form-floating my-2 d-flex align-items-center">
      <textarea v-model="editable.bio" rows="3" name="bio" id="bio" class="form-control"></textarea>
      <label for="bio" class="form-label m-0">Bio:</label>
    </div>
    <div class="form-check">
      <input v-model="editable.isKage" class="form-check-input" type="checkbox" value="" id="isKage">
      <label class="form-check-label" for="isKage">
        Default checkbox
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="" checked>
      <label class="form-check-label" for="">
        Checked checkbox
      </label>
    </div>
    <button class="btn btn-outline" type="submit">
      Yo!, Submit here
    </button>
  </form>

</template>

<script>
import { onMounted, ref } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  props: { hero: { type: Object, required: true } },


  setup(props) {
    onMounted(() => {
      logger.log(props.hero)
    })
    const editable = ref({})

    return {
      editable,
      async handleSubmit() {
        try {
          logger.log("Editing Hero", editable.value)
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

<style>

</style>