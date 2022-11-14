import { reactive } from "vue";
export const store = reactive({
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    key: "3741027abeb1eb84221d5dad2eb42849",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
    loading: false,
    listFilm: [],
    listSeries: [],
    inputKey: ""

})