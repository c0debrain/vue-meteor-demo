import Vue from 'vue'

import NotFound from './ui/NotFound.vue'
import Home from './ui/Home.vue'
import Notes from './ui/Notes.vue'
import GoogleMap from './ui/GoogleMap.vue'
import About from './ui/About.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/notes', name: 'notes', component: Notes, meta: { showCart: true } },
  { path: '/map', name: 'map', component: GoogleMap },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'not-found', component: NotFound },
]
