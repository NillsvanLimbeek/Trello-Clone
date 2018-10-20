/* tslint:disable */
import Vue from 'vue';
import { DirectiveOptions } from 'vue';

const clickOutside: DirectiveOptions = {
    bind(el: HTMLElement, binding: object) {
        el.__ClickOutsideHandler__ = (event: any) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };

        document.body.addEventListener('click', el.__ClickOutsideHandler__);
    },

    undbind(el: HTMLElement) {
        document.body.removeEventListener('click', el.__ClickOutideHandler__);
    },
};

Vue.directive('click-outside', clickOutside);
