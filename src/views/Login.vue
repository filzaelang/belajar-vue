<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        // redirect user to home page
        window.location.href = '/'
    } catch (err) {
        error.value = err.message
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

form div {
    margin-bottom: 15px;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px;
}
</style>