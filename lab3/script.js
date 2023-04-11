//1 задача

function describeCountry(country,population,capitalCity){
    return `В ${country} проживает ${population} человек, а ее столица ${capitalCity} `
}

const finlandInfo = describeCountry('Финляндия', '6 миллионов', 'Хельсинки');
const franceInfo = describeCountry('Франция', '67 миллионов', 'Париж');
const japanInfo = describeCountry('Япония', '126 миллионов', 'Токио');

console.log(finlandInfo);
console.log(franceInfo);
console.log(japanInfo);

//2 задача

function percentageOfWorld1(pop){
    return (pop / 7900) * 100
}

const Kazakhstan = percentageOfWorld1(19);
const Ukraine = percentageOfWorld1(41);
const SouthKorea = percentageOfWorld1(51);
console.log(Kazakhstan, Ukraine, SouthKorea)

//3 задача со стрелочной функцией

let func = pop => (pop / 7900) * 100; 

const chinaPopulation = func(1441);
const usaPopulation = func(332);
const brazilPopulation = func(213);

console.log(chinaPopulation, usaPopulation, brazilPopulation);

//4 задача 

const describePopulation = (country, population) => {
    const percent = percentageOfWorld2(population);
    return `В ${country} проживает ${population} млн. чел, что составляет около ${percent}% населения мира`;
  }
  
  const percentageOfWorld2 = population => ((population / 7900) * 100).toFixed(1);
  
  console.log(describePopulation('Китай', 1441));
  console.log(describePopulation('Индия', 1393));
  console.log(describePopulation('США', 331));

//5 задача

function days_of_a_year(year) {
    return new Date(year, 12, 0).getDate();
}

console.log(days_of_a_year(2021)); // 365
console.log(days_of_a_year(2022)); // 366

  


