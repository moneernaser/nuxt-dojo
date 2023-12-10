<template>
    <div class="bg-white shadow-md rounded-md overflow-hidden">
        <div class="relative">
            <img :src="product.image" :alt="product.title" class="w-full h-64 object-cover">
            <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-md truncate">{{ product.title }}</div>
            <NuxtLink :to="`/products/${product.id}`" class="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md">View Details</NuxtLink>
        </div>
    </div>
</template>
<script setup>
const { product } = defineProps(['product'])
</script>
