{
    let newCurrenty;

    const count = (inputAmountElement, selectCurrencyElement) => {
        const plnElement = document.querySelector(".js-pln");
        const usdElement = document.querySelector(".js-usd");
        const gbpElement = document.querySelector(".js-gbp");
        const eurElement = document.querySelector(".js-eur");
        const chfElement = document.querySelector(".js-chf");
    
        const currencyUSD = 3.97;
        const currencyGBP = 5.02;
        const currencyEUR = 4.28;
        const currencyCHF = 4.41;
    
        let result = 0;
        
        if(plnElement.checked) {
            newCurrenty = plnElement.value;
            switch(selectCurrencyElement) {
                case "pln":
                    return result = +inputAmountElement;
                case "usd":
                    return result = inputAmountElement*currencyUSD;
                case "gbp":
                    return result = inputAmountElement*currencyGBP;
                case "eur":
                    return result = inputAmountElement*currencyEUR;
                case "chf":
                    return result = inputAmountElement*currencyCHF;
            }
        } else if(usdElement.checked) {
            newCurrenty = usdElement.value;
            switch(selectCurrencyElement) {
                case "pln":
                   return result = inputAmountElement/currencyUSD;
                case "usd":
                   return result = +inputAmountElement;
                case "gbp":
                    return result = inputAmountElement*(currencyGBP/currencyUSD);
                case "eur":
                    return result = inputAmountElement*(currencyEUR/currencyUSD);
                case "chf":
                    return result = inputAmountElement*(currencyCHF/currencyUSD);
            }
        } else if(gbpElement.checked) {
            newCurrenty = gbpElement.value;
            switch(selectCurrencyElement) {
                case "pln":
                    return result = inputAmountElement/currencyGBP;
                case "usd":
                    return result = inputAmountElement*(currencyUSD/currencyGBP);
                case "gbp":
                    return result = +inputAmountElement;
                case "eur":
                    return result = inputAmountElement*(currencyEUR/currencyGBP);
                case "chf":
                    return result = inputAmountElement*(currencyCHF/currencyGBP);
            }
        } else if(eurElement.checked) {
            newCurrenty = eurElement.value;
            switch(selectCurrencyElement) {
                case "pln":
                    return result = inputAmountElement/currencyEUR;
                case "usd":
                    return result = inputAmountElement*(currencyUSD/currencyEUR);
                case "gbp":
                    return result = inputAmountElement*(currencyGBP/currencyEUR);
                case "eur":
                    return result = +inputAmountElement;
                case "chf":
                    return result = inputAmountElement*(currencyCHF/currencyEUR);
            }
        } else if(chfElement.checked) {
            newCurrenty = chfElement.value;
            switch(selectCurrencyElement) {
                case "pln":
                    return result = inputAmountElement/currencyCHF;
                case "usd":
                    return result = inputAmountElement*(currencyUSD/currencyCHF);
                case "gbp":
                    return result = inputAmountElement*(currencyGBP/currencyCHF);
                case "eur":
                    return result = inputAmountElement*(currencyEUR/currencyCHF);
                case "chf":
                    return result = +inputAmountElement;
            }
        }
        return result;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputAmountElement = document.querySelector(".js-inputAmount").value;
            const selectCurrencyElement = document.querySelector(".js-selectCurrency").value;
        
            const sectionValueElement = document.querySelector(".js-section__value");
            const sectionCurrencyElement = document.querySelector(".js-section__currency");
            sectionValueElement.innerText = count(inputAmountElement, selectCurrencyElement).toFixed(2);
            sectionCurrencyElement.innerText = newCurrenty;
        });
    }

    init();
}