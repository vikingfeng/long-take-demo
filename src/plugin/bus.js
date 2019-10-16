export default {
  install: function install (Vue) {
    // Event-bus 相当于简单的store
    const bus = new Vue()

    /* eslint no-param-reassign: ["error", { "props": false }] */
    Vue.prototype.$bus = bus
  }
}
