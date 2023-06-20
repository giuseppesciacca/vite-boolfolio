<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            // pulisco l'array con i messaggi
            this.errors = {};

            axios.post(`${this.store.urlBase}api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                } else {
                    // ripulisco i campi di input
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;
            })
        },
    }
}
</script>

<template>
    <div v-if="success" class="alert alert-success text-start" role="alert">
        Messaggio inviato con successo!
    </div>

    <form @submit.prevent="sendForm()">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Insert your name here"
                aria-describedby="helpId" v-model="name" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="Insert your email here"
                aria-describedby="helpId" v-model="email" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Insert message</label>
            <textarea class="form-control" name="message" id="message" rows="3" v-model="message" required></textarea>
        </div>

        <button type="reset" class="btn btn-warning me-3">Reset fields</button>
        <button type="submit" class="btn btn-primary">Send email</button>
    </form>
</template>

<style lang="scss" scoped></style>