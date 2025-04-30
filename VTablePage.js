export default {
    template:
        `
        <v-data-table :items="items"></v-data-table>
        `,
    setup() {
        const items = [
            {
                name: 'African Elephant',
                species: 'Loxodonta africana',
                diet: 'Herbivore',
                habitat: 'Savanna, Forests',
            },
        ];
        return { items };
    }
};