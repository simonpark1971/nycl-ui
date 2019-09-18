import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/ViewClubs',
            component: () => import('./views/ViewClubs.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/registerClub',
            component: () => import('./views/RegisterClub.vue') },

        {
            path: '/AppForm',
            component: () => import('./views/ApplicationForm.vue'),
            meta: {requiresLogin: true}
        },

        {
            path: '/AddTeam',
            component: () => import('./views/AddTeamForm.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/TeamList',
            component: () => import('./views/TeamList.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/CupEntries',
            component: () => import('./views/CupEntries.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/CompleteApplication',
            component: () => import('./views/CompleteApplication.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/LeagueList',
            component: () => import('./views/LeagueList.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/Cups',
            name: 'cups',
            component: () => import('./views/Cups.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/Fixtures',
            name: 'fixtures',
            component: () => import('./views/Fixtures.vue'),
            meta: {requiresLogin: true}
            },

        {
            path: '/Configuration',
            name: 'config',
            component: () => import('./views/SeasonConfiguration.vue'),
            meta: {requiresLogin: true} },

        {
            path: '/LoginForm',
            component: () => import('./views/Login.vue'),
            name: 'login'
        }
    ]
})

