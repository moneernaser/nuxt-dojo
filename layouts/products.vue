<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/products">Nuxt dojo Merch</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

    <main class="container mx-auto p-4">
        <slot />
    </main>
    <footer class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </footer>

</template>
<style scoped>
    footer {
        background-color: #ccc222;
        padding: 1rem;
    }


    .router-link-exact-active {
        color: green;
    }
</style>