const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function idozitettUzenetek() {
    await wait(1000);
    console.log('1 masodperc');

    await wait(1000);
    console.log('2 masodperc');

    await wait(1000);
    console.log('3 masodperc');
}

idozitettUzenetek();
