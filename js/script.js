const { createApp } = Vue

createApp({
    data() {
        return {
            myObj: {
                text: '',
                done: false
            }
        }
    }
}).mount('#app')