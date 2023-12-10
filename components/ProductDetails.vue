<template>
    <div>
        <h1>Product Details</h1>
        <p>Product Title: {{ product.title }}</p>
        <p>Product Price: {{ product.price }}</p>
        <p>Product Description: {{ product.description }}</p>
        <p>Product Category: {{ product.category }}</p>
        <p>Product Image: <img :src="product.image" alt=""></p>
        <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to Cart</span>
        </button>
    </div>
</template>

<script setup>

    const { prodcut } = defineProps(['product'])
    
</script>

<style scoped>

</style>