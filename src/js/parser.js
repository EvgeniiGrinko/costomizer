window.addEventListener('DONContentLoaded', () => {
    const body = document.querySelector('body');
    body.childNodes.forEach(node => {
        console.log(node);
    });
});