const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: ''
        }
    },
    watch: {
        counter() {
            that = this;
            if (this.counter == 37) {
                this.message = "Not there yet";
            } else if (this.counter > 37){
                this.message = "Too much!";
                setTimeout(() => {
                    this.counter = 0;
                    this.message = '';
                }, 5000);
            }
        }
    },
    methods: {
        addNumber(value) {
            this.counter = this.counter + value;
        }
    }
});
app.mount('#assignment');