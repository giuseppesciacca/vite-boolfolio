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
            <input type="text" name="name" id="name" class="form-control" :class="{ 'is-invalid': errors.message }"
                placeholder="Insert your name here" aria-describedby="helpId" v-model="name" required>
            <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" class="form-control" :class="{ 'is-invalid': errors.message }"
                placeholder="Insert your email here" cols="30" rows="10" aria-describedby="helpId" v-model="email" required>
            <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Insert message</label>
            <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="message" id="message" rows="3"
                v-model="message" required></textarea>
            <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback">
                {{ error }}
            </p>
        </div>

        <button type="reset" class="btn btn-warning me-3">Reset fields</button>
        <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ?
            'Sending email...' : 'Send email'
        }}</button>
    </form>
</template>

<style lang="scss" scoped></style>