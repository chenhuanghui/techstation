import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/font-techmarket.css'
import './assets/css/slick.css'
import './assets/css/techmarket-font-awesome.css'
import './assets/css/slick-style.css'
import './assets/css/animate.min.css'
import './assets/css/colors/blue.css'

// import Tether from 'tether'
// import Bootstrap from './assets/js/bootstrap.min.js'
import BootstrapVue from 'bootstrap-vue';
import JqMigrate from './assets/js/jquery-migrate.min'
import HideMaxListItem from './assets/js/hidemaxlistitem.min'
import JqUI from './assets/js/jquery-ui.min'
import JqEasing from './assets/js/jquery.easing.min'
import ScroolUp from './assets/js/scrollup.min'
import JqWaypoint from './assets/js/jquery.waypoints.min'
import WaypointSticky from './assets/js/waypoints-sticky.min'
import Pace from './assets/js/pace.min'
import Slick from './assets/js/slick.min'
import Scripts from './assets/js/scripts'

export default {
  install (Vue) {
    // Vue.use(Tether)
    Vue.use(BootstrapVue)
  }
}