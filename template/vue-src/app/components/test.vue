<template>
  <p>{{greeting}} World!</p>
</template>
<script>
  export default {
    name: 'test',

    data() {
      return {
       greeting: 'Hello'
      }
    }
  }
</script>
<style>
p {
  color: red;
}
</style>

