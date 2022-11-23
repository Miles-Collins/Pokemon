<template>

  <div class="row">
    <div class="col-11 text-center">
      <h5 class="m-0 p-0">{{ hero.name }}</h5>
    </div>
    <div class="col-1 p-0">
      <button class="btn p-0 m-0 mdi mdi-note">
        <Modal id="exampleModal" class="">
          <EditForm />
        </Modal>
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <img class="img-fluid" :src="hero.image">
    </div>
    <div class="col-12 justify-content-center d-flex">
      <p>{{ hero.bio }}</p>
    </div>
  </div>

</template>

<script>

export default {
  props: { hero: { type: Object, required: true } },


  setup() {

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

<style>

</style>