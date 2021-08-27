const getCountrys = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => display(data))
}
getCountrys();
const display = countrys => {
    // console.log(countrys);
    const countryContainer = document.getElementById('country');
    countrys.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>Country Name : ${country.name} </h3>
        <P>Capatial : ${country.capital} </p>
        <button onclick="getCountryByName('${country.name}')">Add Details</button>
        `
        countryContainer.appendChild(div)

    })
}
const getCountryByName = name => {
    // console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}
const displayDetails = country => {
    console.log(country);
    const details = document.getElementById('countru-details');
    details.classList.add('details')
    details.innerHTML = `
    <h5>Country Name : ${country.name}</h5>
    <p>Area : ${country.area}</p>
    <h5> Capital : ${country.capital}</h5>
    <img width="150px" src="${country.flag}"></img>
    <p>Population : ${country.population}</p>
    `
}