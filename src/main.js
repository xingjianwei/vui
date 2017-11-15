import Vue from 'vue'
import App from './App'
import { Msg, Modal } from 'components/dialog'
// import Modal from 'components/modal';

// Vue.prototype.$message = Message
// or register global message component
/*
 * import MessageComponent from 'components/message/message';
 * Vue.component(MessageComponent.name, MessageComponent)
 */

// Vue.prototype.$modal = Modal
// or register global modal component
/*
 * import ModalComponent from 'components/modal/modal';
 * Vue.component(ModalComponent.name, ModalComponent)
 *
 */

Vue.prototype.$dialog = {
  msg: Msg,
  modal: Modal
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
