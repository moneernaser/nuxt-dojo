export default defineEventHandler(async (event) => {
    
    const { CODE } = event.context.params
    const { currencyKey } = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${CODE}`;
    const { data } = await $fetch(uri);
    return {
        currencyData: data
    };
});