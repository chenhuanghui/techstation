<template>
  <div id="page" class="hfeed site">
    <v-header></v-header>
  </div>
</template>


<script>
import TopBar from '@/components/child-components/TopBar'
import StickyWrapperDesktop from '@/components/child-components/StickyWrapperDesktop'
import NavigatorDesktop from '@/components/child-components/NavigatorDesktop'
import NavigatorMobile from '@/components/child-components/NavigatorMobile'
import StickWrapperMobile from '@/components/child-components/StickyWrapperMobile'

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