import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage";


const router = new VueRouter({
    routes: [
        { path:'/', name:"splash",component: SplashPage },
        { path: '/app', name:"app", component:AppPage },
        { path: "*", name: "error", component:ErrorPage }
    ]
})


const vm = new VTTCue({
    data: {
       
    },

    create: function() {
        console.log('app is up an running');
    },

    methods: {
        
    },

    router// shorthead for router
}).$mount("#app");