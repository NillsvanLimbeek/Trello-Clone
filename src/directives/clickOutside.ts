import Vue from 'vue';
import { DirectiveOptions, VNodeDirective } from 'vue';

const clickOutside: DirectiveOptions = {
    bind(el, binding, vnode) {

    },
};

Vue.directive('click-outside', clickOutside);
