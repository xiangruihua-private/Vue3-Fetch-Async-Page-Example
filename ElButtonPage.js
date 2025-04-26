const i18n = {
    en_US: {
        hello: 'hello world!!{name}'
    },
    zh_CN: {
        hello: '你好世界!!{name}'
    }
};
export default {
    template: `

        <v-text-field
          v-model="name"
          :rules="rules"
          hide-details="auto"
          label="Input Name"
        ></v-text-field>
        <v-btn class="text-subtitle-1" @click="showAlert">{{ mt('hello',{ name }) }}</v-btn>
        <v-alert
          v-model="alert"
          close-label="Close Alert"
          title="Just Alert"
          border="start"
          variant="tonal"
          color="success"
          closable
          width="600"
          height="80"
          class="position-absolute top-0 right-0 bottom-0 left-0 ma-auto"
        >
            {{ mt('hello',{ name }) }}
        </v-alert>
`,
    name: 'VBtnPage',
    setup() {
        const { t: mt } = VueI18n.useI18n({ messages: i18n, });
        const name = Vue.ref('');
        const rules = [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ]
        const alert = Vue.ref(false);
        const showAlert = () => {
            alert.value = true;
        };
        return { mt, name, rules, alert, showAlert };
    },
};
