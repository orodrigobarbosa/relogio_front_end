const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

function atualizarHoraa() {
    const now = new Date();
    hoursElement.textContent = now.getHours().toString().padStart(2, '0');
    minutesElement.textContent = now.getMinutes().toString().padStart(2, '0');
    secondsElement.textContent = now.getSeconds().toString().padStart(2, '0');
}

setInterval(atualizarHora, 1000);