<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eaque rem nulla soluta nesciunt dolores
            consequatur numquam ipsa est dolorem.</p>
        <p>Data from server: {{ data }}</p>
    </div>
</template>

<script setup>
// define a counter to count number of times the call is made
const {data} = await useFetch('/api/currency/GBP');


</script>

<style scoped></style>