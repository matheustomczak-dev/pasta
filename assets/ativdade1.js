function iniciar() {
    let numero = 10;
    const contador = document.getElementById("contador");

    const intervalo = setInterval(() => {
        contador.textContent = numero;
        numero--;

        if (numero < 0) {
            clearInterval(intervalo);
            contador.textContent = "Lançamento realizado!";
        }
    }, 1000);
}