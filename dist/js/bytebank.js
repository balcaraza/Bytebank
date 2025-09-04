let saldo = 3125;
alert("hola estamos probando");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}
const elementoFormulario = document.querySelector(".block-nueva-transaccion form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor rellene todos los campos de la transacción");
        return;
    }
    const inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputFecha = elementoFormulario.querySelector("#fecha");
    let tipoTransaccion = inputTipoTransaccion.value;
    let valor = inputValor.valueAsNumber;
    let fecha = new Date(inputFecha.value);
    if (tipoTransaccion == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransaccion == "Transferencia" ||
        tipoTransaccion == "Pago de factura") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transaccion invalida");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const nuevaTransaccion = {
        tipoTransaccion: tipoTransaccion,
        valor: valor,
        fecha: fecha,
        esNueva: true
    };
    console.log(nuevaTransaccion);
    elementoFormulario.reset();
});
