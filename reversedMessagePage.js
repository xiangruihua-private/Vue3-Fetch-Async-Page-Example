const i18n = {
    en_US: {
        hello: 'hello world!!{name}'
    },
    zh_CN: {
        hello: '你好世界!!{name}'
    }
};
export default {
    template:
        `
        
        <v-data-table :items="items"></v-data-table>
        `,
    setup() {
        const { t: mt } = VueI18n.useI18n({ messages: i18n, });

        const items = [
            {
                name: 'African Elephant',
                species: 'Loxodonta africana',
                diet: 'Herbivore',
                habitat: 'Savanna, Forests',
            },
        ];
        return { items, mt };
    }
};