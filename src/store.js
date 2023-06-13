// store.js
import { reactive } from 'vue'
import axios from 'axios'


export const store = reactive({
    urlProjectsApi: 'http://127.0.0.1:8000/api/projects',
    projects: [],

    /**
     * 
     * @param {string} url 
     */
    fetchProjects(url) {
        axios
            .get(url)
            .then(response => {
                //console.log(response.data);
                console.log(response.data.projects);
                this.projects = response.data.projects;
            }).catch(error => {
                console.error(error.message);
            })
    },
})