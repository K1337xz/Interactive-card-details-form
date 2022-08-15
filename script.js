const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".nameCard");
const expDate = document.querySelector(".expDate");
const cvc = document.querySelector(".cvc");
const cardM = document.querySelector(".monthC");
const cardY = document.querySelector(".yearC");
const inputs = document.querySelectorAll(".forms input");
const errorNum = document.querySelector(".errorNum");
const errorMonth = document.querySelector(".errorMY");
const errorYear = document.querySelector(".errorCv");
let cardHolder = document.querySelector("#cardholder");
let cardnumInput = document.querySelector("#cardnum");
let cardMonth = document.querySelector("#month");
let cardCvc = document.querySelector("#cvcinput");
let cardYear = document.querySelector("#year");

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("click", () => {
		if (inputs[i].id === "cardholder") {
			cardHolder.addEventListener("keyup", () => {
				cardName.innerHTML = cardHolder.value;
			});
		} else if (inputs[i].id === "cardnum") {
			cardnumInput.addEventListener("keyup", () => {
				cardNumber.innerHTML = cardnumInput.value
					.split("-")
					.join("-")
					.match(/.{1,4}/g)
					.join("-");
			});
		} else if (inputs[i].id === "month") {
			cardMonth.addEventListener("keyup", () => {
				cardM.innerHTML = cardMonth.value;
			});
		} else if (inputs[i].id === "year") {
			cardYear.addEventListener("keyup", () => {
				cardY.innerHTML = cardYear.value;
			});
		} else if (inputs[i].id === "cvcinput") {
			cardCvc.addEventListener("keyup", () => {
				cvc.innerHTML = cardCvc.value;
			});
		}
	});
}
