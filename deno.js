const food = 'love';

if (food === 'love') {
    console.log(' 🦖... Deno is born!')
} else {
    console.log('🥚...this egg needs some love')
}

setTimeout(() => {
    console.log('check');
    console.log(Deno.metrics());
}, 3000)




