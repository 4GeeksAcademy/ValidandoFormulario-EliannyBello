/* eslint-disable */
import "bootstrap";
import "./style.css";
document.addEventListener("DOMContentLoaded", function() {
  let card = document.querySelector("#card");
  let cvc = document.querySelector("#cvc");
  let amount = document.querySelector("#amount");
  let name = document.querySelector("#name");
  let lastName = document.querySelector("#lastname");
  let city = document.querySelector("#city");
  let state = document.querySelector("#state");
  let postalcode = document.querySelector("#postalcode");
  let menssage = document.querySelector("#mensage");
  let button = document.querySelector("#enviar");
  const globalError = document.getElementById("globalError");
  globalError.textContent = "Some filds are missing";
}
  button.addEventListener("click", function(event){
    if (card.value == "") {
        card.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      }
      if (cvc.value == "") {
        cvc.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (amount.value == "") {
        amount.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (name.value == "") {
        name.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (lastName.value == "") {
        lastName.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (city.value == "") {
        city.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (state.value == "") {
        state.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (postalcode.value == "") {
        postalcode.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")
      if (menssage.value == "") {
        menssage.classList.add("is-invalid");
      } else {
          card.classList.remove("is-invalid")}

  });
}

