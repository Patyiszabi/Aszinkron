const random = Math.floor(Math.random() * 5000) + 1000;

function veletlenszamgenerator() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100) + 1);
        }, random);
    });
}
