import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', name: 'home', component: AppHome },
    { path: '/contacts', name: 'contacts', component: AppContact },
    { path: '/:slug', name: 'single-project', component: SingleProject },
    /* 404 zone */
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

// 5. Export router.
export { router }