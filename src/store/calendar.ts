import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { CalendarView } from '@enums/enum';

import { RootState } from '@state/rootState';
import { CalendarState } from '@state/state';
import { ICalendar } from '@models/types';

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
    changeCalendarView: (state, newCalendar: CalendarView) => {
        state.calendarView = newCalendar;
    },

};

// actions
const actions: ActionTree<CalendarState, RootState> = {
    setCurrentCalendar({ commit }, newCalendar: CalendarView) {
        commit('changeCalendarView', newCalendar);
    },

};

// export module
export const calendar: Module<CalendarState, any> = {
    state,
    getters,
    mutations,
    actions,
};
