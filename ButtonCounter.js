export default {
    emits:['increment'],
    template: '<v-btn @click="increment">You clicked me {{ count }} times.</v-btn><slot></slot>',
    data() { return { count:0 };},
    watch:{
      count:{
          handler: (newV,oldV) => {
              alert('按钮计数器值的变化 :' + oldV + ' 变为 ' + newV + '!');
          },
          flush: 'pre',
      }
    },
    methods: {
      increment() {this.count++;this.$emit('increment');}
    },
    expose() { return { increment };},
};