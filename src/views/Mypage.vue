<template>
  <div>
    <h1>
      {{userInfo.name}}환영합니다.
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Mypage",
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped>

</style>