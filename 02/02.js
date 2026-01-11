function veletlenszamgenerator() {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100) + 1);
        }, randomDelay);
    });
}

async function veletlenSzamMegjelenit() {
    const szam = await veletlenszamgenerator();
    console.log('Veletlen szam:', szam);
}

veletlenSzamMegjelenit();
