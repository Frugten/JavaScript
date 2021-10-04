Vue.createApp({
    data() {
        return {
           words: [],
            word: null,
            counter: 0,
        }
    },
    methods: {

        show(word) {
            this.words = []
            this.words.push(word)
            this.words.push(word.toUpperCase())
            this.words.push(word.toLowerCase())
        },


    }
}).mount("#app")