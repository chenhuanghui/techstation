<template>
  <div id="page" class="hfeed site">
    <v-header></v-header>
  </div>
</template>

<script>

import Header from '@/components/child-components/Header'

export default {
  name: 'HomeStation',
  data () {
    return {
      msg: 'Welcome to HomeStation'
    }
  },
  components: {
    'v-header': Header
  }
}
</script>