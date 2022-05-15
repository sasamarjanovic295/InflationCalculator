function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years);

    let worth = money + (money * (inflationRate / 100));    
    
    for(let i=1; i < years; i++){
        worth += worth * (inflationRate / 100);
    }

    let description = document.createElement('div');
    description.className = 'description-value';
    description.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth.toFixed(2)}€ za ${years} godina.`;
    document.querySelector('.container').appendChild(description);
}