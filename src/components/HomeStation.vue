<template>
  <div id="page" class="hfeed site">
    <v-topbar></v-topbar>
    <!-- .top-bar-v1 -->
    
    <header id="masthead" class="site-header header-v1" style="background-image: none; ">
      <div class="col-full desktop-only">
         <v-sticky-wrapper-desktop></v-sticky-wrapper-desktop>
         <v-navigator-desktop></v-navigator-desktop>
      </div> <!-- col-full desktop-only -->
    </header>  
  </div>
</template>


<script>
import TopBar from '@/components/child-components/TopBar'
import StickyWrapperDesktop from '@/components/child-components/StickyWrapperDesktop'
import NavigatorDesktop from '@/components/child-components/NavigatorDesktop'

export default {
  name: 'HomeStation',
  data () {
    return {
      msg: 'Welcome to HomeStation'
    }
  },
  components: {
    'v-topbar': TopBar,
    'v-sticky-wrapper-desktop': StickyWrapperDesktop,
    'v-navigator-desktop': NavigatorDesktop
  }
}
</script>