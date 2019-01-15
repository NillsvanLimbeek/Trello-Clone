/* tslint:disable */
import Vue from 'vue';
import { DirectiveOptions } from 'vue';

const focus: DirectiveOptions = {
    inserted(el: any, binding) {
        // Vue.nextTick(() => {
        //     el.focus();
        // });
        el.focus();
    },
};

Vue.directive('focus', focus);
