<template>

</template>

<script>
import { onMounted } from "vue"
import { hyruleService } from "../services/HyruleService"

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

    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
