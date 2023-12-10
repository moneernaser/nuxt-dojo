// define a counter
let counter = 0;
export default defineEventHandler(async (event) => {

    counter++;
    console.log("counter", counter);
    const { name } = getQuery(event);

    // handle post data
    const { age } = await readBody(event);

    const {data}  = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_hUOft7MPspoVPyGGvXZv0hCDvhIWvoj7zLRI2YDX');

    console.log("currencyData", data);
    return {
        // message: `Hello ${name}! You are ${age} years old.`,
        currencyData: data
    };
});