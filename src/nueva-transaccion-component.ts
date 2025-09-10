const elementoFormulario = document.querySelector(
  ".block-nueva-transaccion form"
) as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor rellene todos los campos de la transacción");
    return;
  }
  const inputTipoTransaccion = elementoFormulario.querySelector(
    "#tipoTransaccion"
  ) as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector(
    "#valor"
  ) as HTMLInputElement;
  const inputFecha = elementoFormulario.querySelector(
    "#fecha"
  ) as HTMLInputElement;

  let tipoTransaccion = inputTipoTransaccion.value as TipoTransaccion;
  let valor = inputValor.valueAsNumber;
  let fecha: Date = new Date(inputFecha.value);

  if (tipoTransaccion == TipoTransaccion.DEPOSITO) {
    saldo += valor;
  } else if (
    tipoTransaccion == TipoTransaccion.TRANSFERENCIA ||
    tipoTransaccion == TipoTransaccion.PAGO_FACTURA
  ) {
    saldo -= valor;
  } else {
    alert("Tipo de transaccion invalida");
    return;
  }
  elementoSaldo.textContent = saldo.toString();

  const nuevaTransaccion: Transaccion = {
    tipoTransaccion: tipoTransaccion,
    valor: valor,
    fecha: fecha
  };

  console.log(nuevaTransaccion);
  elementoFormulario.reset();
});