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
const continuebtn = document.querySelector(".continuebtn");
const blankName = document.querySelector(".blankcardholder");
const form = document.querySelector(".forms");
const thanksState = document.querySelector(".thanksstate");
let cardHolder = document.querySelector("#cardholder");
let cardnumInput = document.querySelector("#cardnum");
let cardMonth = document.querySelector("#month");
let cardCvc = document.querySelector("#cvcinput");
let cardYear = document.querySelector("#year");

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("click", () => {
		if (inputs[i].id === "cardholder" || inputs[i].id === `errorBorder`) {
			cardHolder.addEventListener("keyup", () => {
				cardName.innerHTML = cardHolder.value;
			});
		} else if (
			inputs[i].id === "cardnum" ||
			inputs[i].id === `errorBorders`
		) {
			cardnumInput.addEventListener("keyup", () => {
				cardNumber.innerHTML = cardnumInput.value
					.split("-")
					.join("-")
					.match(/.{1,4}/g)
					.join("-");
			});
		} else if (
			inputs[i].id === "month" ||
			inputs[i].id === `errorMonthYear`
		) {
			cardMonth.addEventListener("keyup", () => {
				cardM.innerHTML = cardMonth.value;
			});
		} else if (inputs[i].id === "year" || inputs[i].id === `errorYear`) {
			cardYear.addEventListener("keyup", () => {
				cardY.innerHTML = cardYear.value;
			});
		} else if (inputs[i].id === "cvcinput" || inputs[i].id === `wrongcvc`) {
			cardCvc.addEventListener("keyup", () => {
				cvc.innerHTML = cardCvc.value;
			});
		}
	});
}

function chcekForm(e) {
	const reg = /^[0-9]+$/i;
	const regName = /^[a-zA-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]*$/;
	if (cardnumInput.value === ``) {
		errorNum.innerHTML = `Card numbers cannot be empty`;
		cardnumInput.id = `errorBorders`;
		e.preventDefault();
	} else if (!cardnumInput.value.match(reg)) {
		errorNum.innerHTML = `Wrong format, numbers only`;
		cardnumInput.id = `errorBorders`;
		e.preventDefault();
	} else if (cardnumInput.value < 16) {
		errorNum.innerHTML = `Must have 16 numbers`;
		cardnumInput.id = `errorBorders`;
		e.preventDefault();
	} else if (cardnumInput.value >= 16) {
		errorNum.innerHTML = ``;
		cardnumInput.id = `cardnum`;
		e.preventDefault();
	}

	if (cardMonth.value > 12 && cardYear.value === ``) {
		errorMonth.innerHTML = `Wrong Month and year can't be blank`;
		cardMonth.id = `errorMonthYear`;
		e.preventDefault();
	} else if (cardMonth.value > 12 && cardYear.value) {
		cardYear.id = `year`;
		errorMonth.innerHTML = `Wrong Month`;
		e.preventDefault();
	} else if (cardMonth.value === `` && cardYear.value === ``) {
		errorMonth.innerHTML = `Can't be blank`;
		cardMonth.id = `errorMonthYear`;
		cardYear.id = `errorYear`;
		e.preventDefault();
	} else if (cardMonth.value > 0 && cardYear.value === ``) {
		cardMonth.id = `month`;
		cardYear.id = `errorYear`;
		errorMonth.innerHTML = `Can't be blank`;
		e.preventDefault();
	} else if (cardYear.value > 0 && cardMonth.value === ``) {
		cardMonth.id = `errorMonthYear`;
		cardYear.id = `year`;
		errorMonth.innerHTML = `Can't be blank`;
		e.preventDefault();
	} else if (cardYear.value > 0 && cardMonth.value > 0) {
		cardMonth.id = `month`;
		cardYear.id = `year`;
		errorMonth.innerHTML = ``;
	}

	if (cardCvc.value === ``) {
		errorCV.innerHTML = `Can't be blank`;
		cardCvc.id = `wrongcvc`;
		e.preventDefault();
	} else if (cardCvc.value < 3) {
		errorCV.innerHTML = `CVC Must have 3 numbers`;
		cardCvc.id = `wrongcvc`;
		e.preventDefault();
	} else {
		errorCV.innerHTML = ``;
		cardCvc.id = `cvcinput`;
	}

	if (cardHolder.value === ``) {
		blankName.innerHTML = `Cardholder can't be blank`;
		cardHolder.id = `errorBorder`;
		e.preventDefault();
	} else if (!cardHolder.value.match(regName)) {
		blankName.innerHTML = `Cardholder can't have numbers`;
		cardHolder.id = `errorBorder`;
		e.preventDefault();
	} else {
		cardHolder.id = `cardholder`;
		blankName.innerHTML = ``;
	}

	if (
		errorMonth.innerHTML === `` &&
		errorNum.innerHTML === `` &&
		blankName.innerHTML === `` &&
		errorCV.innerHTML === ``
	) {
		form.style.display = `none`;
		thanksState.style.display = `flex`;
	}
}

function reset() {
	form.style.display = `block`;
	thanksState.style.display = `none`;
	cvc.innerHTML = `000`;
	cardY.innerHTML = `00`;
	cardM.innerHTML = `00`;
	cardNumber.innerHTML = `0000 0000 0000 0000`;
	cardName.innerHTML = `Jane Appleseed`;
	cardMonth.value = ``;
	cardYear.value = ``;
	cardCvc.value = ``;
	cardnumInput.value = ``;
	cardHolder.value = ``;
}
confirmButton.addEventListener("click", chcekForm);
continuebtn.addEventListener("click", reset);
