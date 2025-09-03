let saldo =3125;
const elementoSaldo = document.querySelector(".saldo-valor .valor");

elementoSaldo.textContent =  saldo;

const elementoFormulario = document.querySelector(".block-nueva-transaccion form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if(!elementoFormulario.checkValidity()){
        alert("Por favor rellene todos los campos de la transacción");
        return;
    }
})