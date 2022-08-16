const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".nameCard");
const expDate = document.querySelector(".expDate");
const cvc = document.querySelector(".cvc");
const cardM = document.querySelector(".monthC");
const cardY = document.querySelector(".yearC");
const inputs = document.querySelectorAll(".forms input");
const errorNum = document.querySelector(".errorNum");
const errorMonth = document.querySelector(".errorMY");
const errorCV = document.querySelector(".errorCv");
const confirmButton = document.querySelector(".confirmButton");
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

function chcekForm(e) {
	const reg = /^[0-9]+$/i;
	if (cardnumInput.value === ``) {
		errorNum.innerHTML = `Card numbers cannot be empty`;
		cardnumInput.id = `errorBorder`;
	} else if (!cardnumInput.value.match(reg)) {
		errorNum.innerHTML = `Wrong format, numbers only`;
		cardnumInput.id = `errorBorder`;
	} else {
		errorNum.innerHTML = ``;
		cardnumInput.id = `errorBorder`;
		cardnumInput.id = `cardnum`;
	}

	if (cardMonth.value === `` && cardYear.value === ``) {
		errorMonth.innerHTML = `Can't be blank`;
		cardMonth.id = `errorMonthYear`;
		cardYear.id = `errorMonthYear`;
	} else if (cardMonth.value > 0 && cardYear.value === ``) {
		cardMonth.id = `month`;
		cardYear.id = `errorMonthYear`;
		errorMonth.innerHTML = `Can't be blank`;
	} else if (cardYear.value > 0 && cardMonth.value === ``) {
		cardMonth.id = `errorMonthYear`;
		cardYear.id = `year`;
		errorMonth.innerHTML = `Can't be blank`;
	} else if (cardYear.value > 0 && cardMonth.value > 0) {
		cardMonth.id = `month`;
		cardYear.id = `year`;
		errorMonth.innerHTML = ``;
	}

	if (cardCvc.value === ``) {
		errorCV.innerHTML = `Can't be blank`;
		cardCvc.id = `wrongcvc`;
	} else if (cardCvc.value < 3) {
		errorCV.innerHTML = `CVC Must have 3 numbers`;
		cardCvc.id = `wrongcvc`;
	} else {
		errorCV.innerHTML = ``;
		cardCvc.id = `cvcinput`;
	}

	e.preventDefault();
}

confirmButton.addEventListener("click", chcekForm);
