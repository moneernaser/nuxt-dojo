<template>
    <div>
        <h1>Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eaque rem nulla soluta nesciunt dolores consequatur numquam ipsa est dolorem.</p>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
     </div>
</template>

<script setup>

    definePageMeta({
       layout: 'products'
    })

    useHead({
        title: 'Products',
        meta: [
            {
                name: 'description',
                content: 'This is the products page'
            }
        ]
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products');


</script>

