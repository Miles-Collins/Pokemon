<template>

  <div class="row">
    <div class="col-12">
      <img class="img-fluid" :src="artPiece.picture" alt="">
    </div>
    <div class="col-12">
      <h2>{{ artPiece.name }}</h2>
    </div>
    <div class="col-12">
      <p>{{ artPiece.price }}</p>
    </div>
  </div>

</template>

<script>

export default {
  props: { artPiece: { type: Object, required: true } },


  setup() {



    return {

    }
  }
}
</script>

<style>

</style>