import ButtonCounter from './ButtonCounter.js';
export default {
    template: `<button-counter ref='btnRef' @increment="incrementTotal"><p>Total clicks: {{ total }}</p></button-counter>`,
    components: {'button-counter': ButtonCounter},
    data() { return { total:0 };},
    mounted(){ this.$refs.btnRef.increment();},
    methods: {
         incrementTotal(){ this.total++; },
    },
};