let { createApp } = Vue;
createApp({
    data() {
        return {
            datapp: info.chapters
        }
    },
    created() {
        console.log(this.datapp)
    },
    methods: {

    },
    computed: {

    }
}).mount("#app")