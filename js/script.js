const { createApp } = Vue

createApp({
    data() {
        return {
            // Contenuto dell'input va direttamente qui
            newTodo: {
                text: ''
            },

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
                    done: true
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
        removeTodo(indiceTodo) {
            this.arrTodo.splice(indiceTodo, 1);
        },
        addTodo() {
            // trim() serve per non far passare gli spazi nell'input (toglie spazi prima e dopo)
            if (this.newTodo.text.trim().length > 0) {
                this.arrTodo.push(this.newTodo);
                this.newTodo = {
                    text: ''
                }
            }
        }
    }
}).mount('#app')