const { createApp } = Vue

createApp({
    data() {
        return {

            arrTodo: [
                {
                    text: 'Pane',
                    done: false
                },
                {
                    text: 'Pasta',
                    done: true
                },
                {
                    text: 'Mozzarella',
                    done: true
                },
                {
                    text: 'Acciughe',
                    done: false
                },
                {
                    text: 'Marmellata',
                    done: false
                },
                {
                    text: 'Nutella',
                    done: true
                },
                {
                    text: 'Vino',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeTodo() {
            this.arrTodo.splice(0, 1);
        }
    }
}).mount('#app')