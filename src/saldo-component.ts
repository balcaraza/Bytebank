let saldo = 3125;

const elementoFecha = document.querySelector(".block-saldo time") as HTMLElement;

const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;

if (elementoSaldo) {
  elementoSaldo.textContent = saldo.toLocaleString("es-us",{currency:"USD", style:"currency"});
}

if (elementoFecha) {
  const fechaAcceso: Date = new Date();
  elementoFecha.textContent= fechaAcceso.toLocaleDateString("es-es",{weekday:"long", day:"2-digit",month:"2-digit",year:"numeric"})
}