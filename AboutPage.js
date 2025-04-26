export default {
    name: 'AboutPage',
    template: `
        <v-container>
          <v-card>
            <v-card-title>关于我们</v-card-title>
            <v-card-text>
              这是一个使用CDN引入Vue3 + Vuetify + Vue Router的示例
              <v-btn to="/" color="secondary" class="mt-4">返回首页</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
    `,
};