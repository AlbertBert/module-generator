import test from './component/test.vue';

function install() {
  if(install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('my-test', test);
}

const VueTest = {
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTest);
}

export default VueTest;