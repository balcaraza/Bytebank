let saldo = 3125;
const elementoFecha = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) {
    elementoSaldo.textContent = formatearMoneda(saldo);
}
if (elementoFecha) {
    const fechaAcceso = new Date();
    elementoFecha.textContent = formatearFecha(fechaAcceso);
}
