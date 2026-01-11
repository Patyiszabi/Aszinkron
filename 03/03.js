const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function uzenetKesesleltetve() {
    const uzenetElem = document.getElementById('uzenet');
    uzenetElem.textContent = 'Uzenet betoltese...';

    await wait(1000);
    uzenetElem.textContent = 'Megjott az uzenet 1 masodperc kesleltetessel.';
}

document.getElementById('uzenetGomb').addEventListener('click', uzenetKesesleltetve);
