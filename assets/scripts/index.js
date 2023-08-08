let { createApp } = Vue;
createApp({
    data() {
        return {
            datapp: [],
            itemsPerPage: 10,
            currentPage: 1,
            searchInput: '',
            temporada1: [],
            temporada2: [],
            temporada3: [],
            temporada4: [],
            archivo: [],
            checks: []
        }
    },
    created() {
        this.datapp = info.chapters
        console.log(this.datapp)
    },
    methods: {
    },
    computed: {
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.checks.slice(startIndex, endIndex);
        },
        filtroChecks() {
            this.checks = this.datapp.filter(episodio =>
                episodio.name.toLowerCase().includes(this.searchInput.toLowerCase()) &&
                (this.temporada1.length === 0 || this.temporada1.includes(episodio.season)) &&
                (this.temporada2.length === 0 || this.temporada2.includes(episodio.season)) &&
                (this.temporada3.length === 0 || this.temporada3.includes(episodio.season)) &&
                (this.temporada4.length === 0 || this.temporada4.includes(episodio.season)) &&
                (this.archivo.length === 0 || this.archivo.includes(episodio.archivo))
            );
        },
    }
}).mount("#app")