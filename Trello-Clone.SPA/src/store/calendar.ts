import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { CalendarView } from '@enums/index';

import { RootState } from '@state/rootState';
import { CalendarState } from '@state/state';
import { ICalendar } from '@models/index';

// state
const state: CalendarState = {
    calendarDays: {
        daysInMonth: [],
        daysInWeek: [],
    },

    calendarView: CalendarView.Month,
};

// getters
const getters: GetterTree<CalendarState, any> = {
    getCalendarView: (state) => {
        return state.calendarView;
    },

};

// mutations
const mutations: MutationTree<CalendarState> = {
    changeCalendarView: (state, newCalendarView: CalendarView) => {
        state.calendarView = newCalendarView;
    },

};

// actions
const actions: ActionTree<CalendarState, RootState> = {
    setCurrentCalendar({ commit }, newCalendarView: CalendarView) {
        commit('changeCalendarView', newCalendarView);
    },

};

// export module
export const calendar: Module<CalendarState, any> = {
    state,
    getters,
    mutations,
    actions,
};
