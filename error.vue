<template>
    <div class="mt-7 max-w-sm mx-auto bg-white text-center">
        <h1 class="text-2xl font-bold text-red-500">Error</h1>
        <p class="mt-7 text-gray-500 font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-gray-500 text-6xl">Oops.</p>
        <p class="mt-7 text-gray-500">{{ error.message }}</p>
        <p><div class="btn" @click="handleClearError()">Go Home</div></p>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
    
</script>

<style scoped>

</style>