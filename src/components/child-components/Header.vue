<template>
  <div id='header'>
    <v-topbar></v-topbar>
    <header id="masthead" class="site-header header-v1" style="background-image: none; ">
      <div class="col-full desktop-only">
          <v-sticky-wrapper-desktop></v-sticky-wrapper-desktop>
          <v-navigator-desktop></v-navigator-desktop>
      </div> <!-- col-full desktop-only -->

      <div class="col-full handheld-only">
          <v-navigator-mobile></v-navigator-mobile>
          <v-sticky-wrapper-mobile></v-sticky-wrapper-mobile>            
      </div>
    </header>  
  </div>
  
</template>

<script>
import TopBar from '@/components/child-components/TopBar'
import StickyWrapperDesktop from '@/components/child-components/StickyWrapperDesktop'
import NavigatorDesktop from '@/components/child-components/NavigatorDesktop'
import NavigatorMobile from '@/components/child-components/NavigatorMobile'
import StickWrapperMobile from '@/components/child-components/StickyWrapperMobile'

export default {
  name: 'Header',
  
  components: {
    'v-topbar': TopBar,
    'v-sticky-wrapper-desktop': StickyWrapperDesktop,
    'v-navigator-desktop': NavigatorDesktop,
    'v-navigator-mobile': NavigatorMobile,
    'v-sticky-mobile': StickWrapperMobile
  }
}
</script>