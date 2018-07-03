// 插件开发的时候 这个是入口文件

import test from './components/test.vue';

function install(Vue) {
  if (install.installed) {
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


