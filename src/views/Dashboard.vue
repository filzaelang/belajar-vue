<template>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard, you are logged in!</p>
    <button @click="logout">Logout</button>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth()

const logout = async () => {
    try {
        await signOut(auth)
        window.location.href = '/login'
    } catch (error) {
        console.error('Error logging out', error)
    }
}
</script>