const { createApp, ref, reactive, computed, watch, watchEffect, h } = Vue;
const { createVuetify } = Vuetify

const CTranslateMenu = {
  template:
    `
    <v-menu
      v-model="menu"
      location="bottom end"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-translate" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="item.value"
          color="primary"
          :active="locale === item.value"
          @click="onToggleLocale(item.value)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  `,
  setup() {
    const menu = ref(false);
    const i18n = VueI18n.useI18n();
    const locale = ref(i18n.locale.value);
    const onToggleLocale = (value) => {
      i18n.locale.value = value;
      locale.value = value;
    }
    const items = [
      { title: 'English', value: 'en_US' },
      { title: '简体中文', value: 'zh_CN' },
    ]
    return { items, menu, locale, onToggleLocale };
  },
};
const CAvatarMenu = {
  template:
    `
    <v-menu
        v-model="menu"
        open-on-hover
        :close-on-content-click="false"
        location="bottom end"
      >
        <template v-slot:activator="{ props }">
          <v-avatar
            image="./assets/png/xiang-smile.png"
            class="mx-4"
            size="x-small"
            v-bind="props"
          ></v-avatar>
        </template>

        <v-card min-width="300">
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              subtitle="Founder of Vuetify"
              title="John Leider"
            >
              <template v-slot:append>
                <v-btn
                  :class="fav ? 'text-red' : ''"
                  icon="mdi-heart"
                  variant="text"
                  @click="fav = !fav"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-switch
                v-model="message"
                color="purple"
                label="Enable messages"
                hide-details
              ></v-switch>
            </v-list-item>

            <v-list-item>
              <v-switch
                v-model="hints"
                color="purple"
                label="Enable hints"
                hide-details
              ></v-switch>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              variant="text"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              variant="text"
              @click="menu = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
  `,
  setup() {
    const fav = ref(true);
    const menu = ref(false);
    const message = ref(false);
    const hints = ref(true);
    return { fav, message, hints, menu };
  },
};
const initApp = (MenuRoutes, i18nMessages) => {
  const AppConfig = {
    name: 'App',
    components: {
      'c-translate-menu': CTranslateMenu,
      'c-avatar-menu': CAvatarMenu,
    },
    template:
      `<v-locale-provider :locale="locale">
        <v-app :theme="theme">
          <v-app-bar color="teal-darken-4" image="./assets/jpg/1080.jpg">
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <template v-slot:prepend>
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>WEB实验室</v-app-bar-title>
            <v-breadcrumbs :items="breadcrumbsItems">
              <template v-slot:prepend>
                <v-btn icon="mdi-arrow-left" @click="back"></v-btn>
              </template>
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
              <template v-slot:title="{ item }">
                {{ String(item.title).toUpperCase() }}
              </template>
            </v-breadcrumbs>

            <v-spacer></v-spacer>

            <v-btn icon="mdi-magnify"></v-btn>
            <v-btn icon="mdi-heart"></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
            <v-btn
              :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
              @click="onToggleTheme"
            ></v-btn>
            <c-translate-menu></c-translate-menu>
            <c-avatar-menu></c-avatar-menu>
          </v-app-bar>

          <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
              <v-list-item v-for="item of MenuRoutes" :key="item.meta.menu" @click="goto(item)">{{item.meta.menu}}</v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main class="position-relative">
            <router-view></router-view>
          </v-main>
        </v-app>
      </v-locale-provider>`,
    setup() {
      const drawer = ref(false);
      const router = VueRouter.useRouter();
      const MenuRoutes = router.options.routes;
      const breadcrumbsItems = computed(() => [
        {
          title: 'Home',
          disabled: false,
          href: '/#/',
        },
        {
          title: router.currentRoute.value.meta.menu,
          disabled: true,
          href: '/#' + router.currentRoute.value.path,
        },
      ]);
      const back = () => {
        router.back();
      }
      const goto = (route) => {
        router.push({ name: route.name, params: route.params, query: route.query });
      }

      const theme = ref('light');
      function onToggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      }
      const locale = computed(() => VueI18n.useI18n().locale.value);
      return { drawer, router, goto, back, MenuRoutes, breadcrumbsItems, theme, onToggleTheme, locale };
    }
  };
  const app = createApp(AppConfig);

  const fetchAsyncComponent = async (path) => {
    let res = await import(path);
    return res.default;
  }
  const routes = [
    ...MenuRoutes.map(d => ({ ...d, meta: { menu: d.menu }, component: async () => fetchAsyncComponent(d.fetchPath) }))
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  });
  app.use(router);

  const vuetify = createVuetify({
    blueprints: Vuetify.blueprints.md2,
    locale: {
      locale: 'zh_CN',
      fallback: 'en_US',
      messages: i18nMessages,
    },
  });
  app.use(vuetify);

  const i18n = VueI18n.createI18n({
    legacy: false,
    locale: 'zh_CN',
    fallbackLocale: 'en_US',
    messages: {
      en_US: {
        hello: 'hello world'
      },
      zh_CN: {
        hello: '你好世界'
      }
    }
  });
  app.use(i18n);

  const vm = app.mount('#app');
}
const loadMenuRoutes = async () => {
  let res = await axios.get('/MenuRoutes.json');
  return res.data;
}
const fetchLocale = async (locale) => await import(`./locale/${locale}.js`);
Promise.all([ loadMenuRoutes(), fetchLocale('zh_CN'), fetchLocale('en_US') ])
  .then(([ MenuRoutes, zhMsg, enMsg ]) => {
    initApp(MenuRoutes, { zh_CN: zhMsg.default, en_US: enMsg.default });
  }).catch(err => {
    console.log('err: ', err);
  });