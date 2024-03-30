const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputAmountElement = document.querySelector(".js-inputAmount").value;
    const selectCurrencyElement = document.querySelector(".js-selectCurrency").value;
    count(inputAmountElement, selectCurrencyElement);
});

function count(inputAmountElement, selectCurrencyElement) {
    const plnElement = document.querySelector(".js-pln");
    const usdElement = document.querySelector(".js-usd");
    const gbpElement = document.querySelector(".js-gbp");
    const eurElement = document.querySelector(".js-eur");
    const chfElement = document.querySelector(".js-chf");

    const currencyUSD = 3.97;
    const currencyGBP = 5.02;
    const currencyEUR = 4.28;
    const currencyCHF = 4.41;

    let result;
    let newCurrenty;
    if(plnElement.checked) {
        newCurrenty = plnElement.value;
        switch(selectCurrencyElement) {
            case "pln":
                result = +inputAmountElement;
                break;
            case "usd":
                result = inputAmountElement*currencyUSD;
                break;
            case "gbp":
                result = inputAmountElement*currencyGBP;
                break;
            case "eur":
                result = inputAmountElement*currencyEUR;
                break;
            case "chf":
                result = inputAmountElement*currencyCHF;
                break;
        }
    } else if(usdElement.checked) {
        newCurrenty = usdElement.value;
        switch(selectCurrencyElement) {
            case "pln":
                result = inputAmountElement/currencyUSD;
                break;
            case "usd":
                result = +inputAmountElement;
                break;
            case "gbp":
                result = inputAmountElement*(currencyGBP/currencyUSD);
                break;
            case "eur":
                result = inputAmountElement*(currencyEUR/currencyUSD);
                break;
            case "chf":
                result = inputAmountElement*(currencyCHF/currencyUSD);
                break;
        }
    } else if(gbpElement.checked) {
        newCurrenty = gbpElement.value;
        switch(selectCurrencyElement) {
            case "pln":
                result = inputAmountElement/currencyGBP;
                break;
            case "usd":
                result = inputAmountElement*(currencyUSD/currencyGBP);
                break;
            case "gbp":
                result = +inputAmountElement;
                break;
            case "eur":
                result = inputAmountElement*(currencyEUR/currencyGBP);
                break;
            case "chf":
                result = inputAmountElement*(currencyCHF/currencyGBP);
                break;
        }
    } else if(eurElement.checked) {
        newCurrenty = eurElement.value;
        switch(selectCurrencyElement) {
            case "pln":
                result = inputAmountElement/currencyEUR;
                break;
            case "usd":
                result = inputAmountElement*(currencyUSD/currencyEUR);
                break;
            case "gbp":
                result = inputAmountElement*(currencyGBP/currencyEUR);
                break;
            case "eur":
                result = +inputAmountElement;
                break;
            case "chf":
                result = inputAmountElement*(currencyCHF/currencyEUR);
                break;
        }
    } else if(chfElement.checked) {
        newCurrenty = chfElement.value;
        switch(selectCurrencyElement) {
            case "pln":
                result = inputAmountElement/currencyCHF;
                break;
            case "usd":
                result = inputAmountElement*(currencyUSD/currencyCHF);
                break;
            case "gbp":
                result = inputAmountElement*(currencyGBP/currencyCHF);
                break;
            case "eur":
                result = inputAmountElement*(currencyEUR/currencyCHF);
                break;
            case "chf":
                result = +inputAmountElement;
                break;
        }
    }
    const sectionValueElement = document.querySelector(".js-section__value");
    const sectionCurrencyElement = document.querySelector(".js-section__currency");
    sectionValueElement.innerText = result.toFixed(2);
    sectionCurrencyElement.innerText = newCurrenty;
}