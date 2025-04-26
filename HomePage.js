export default {
    name: 'HomePage',
    template: `
    <v-list>
        <v-list-item v-for="item of MenuRoutes" :key="item.meta.menu" @click="goto(item)">{{item.meta.menu}}</v-list-item>
    </v-list>`,
    setup(props, { attrs, slots, emit, expose }) {
        const router = VueRouter.useRouter();
        const MenuRoutes = router.options.routes;
        const goto = (route) => {
            router.push({...route});
        }
        return {
            MenuRoutes,goto
        }
    }
};