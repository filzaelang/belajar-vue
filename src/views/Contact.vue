<template>
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
    <div v-if="submitted">
        <p>Thank you for your message, {{ form.name }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitted = ref(false)

const handleSubmit = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
    })

    if (response.ok) {
        submitted.value = true
        const data = await response.json()
        console.log('API response:', data)
    } else {
        console.error('Error submitting form')
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

input,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
</style>