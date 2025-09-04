var saldo = 3125;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nueva-transaccion form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor rellene todos los campos de la transacción");
        return;
    }
    var inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputFecha = elementoFormulario.querySelector("#fecha");
    var tipoTransaccion = inputTipoTransaccion.value;
    var valor = inputValor.valueAsNumber;
    var fecha = new Date(inputFecha.value);
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
    var nuevaTransaccion = {
        tipoTransaccion: tipoTransaccion,
        valor: valor,
        fecha: fecha,
        esNueva: true
    };
    console.log(nuevaTransaccion);
    elementoFormulario.reset();
});
