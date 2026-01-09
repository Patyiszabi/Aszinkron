  async function randomnumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 100) + 1;
            resolve(randomNum);
        }, 2000);
    });
}
