import Vue from 'vue';

import moment from 'moment';

// formatDate
export function formatDate(input: number, format: string) {
    return moment(input).format(format);
}

// vue filter
Vue.filter('date', (input: number, format: string) => formatDate(input, format));
