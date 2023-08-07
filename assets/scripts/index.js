let { createApp } = Vue;
createApp({
    data() {
        return {
            chapters: [...data]
        }
    },
    created() {
        console.log(this.chapters)
    },
    methods: {

    },
    computed: {

    }
}).mount("#app")