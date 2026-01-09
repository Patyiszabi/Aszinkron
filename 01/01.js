async function idozitettuzenet() {
    setTimeout(() => {
        console.log("1 ms");
    }, 1000);

    setTimeout(() => {
    console.log("2 ms");
    }, 2000);
}
idozitettuzenet();


function idozitettpromise(ido) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Eltelt ido " + ido/1000 + " ms"));
        }, ido);
    });
}

async function idozitettuzenetek() {
    await idozitettpromise(1000);
    await idozitettpromise(2000);
    await idozitettpromise(3000);
}