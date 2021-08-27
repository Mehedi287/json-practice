const getCountrys = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => display(data))
}
getCountrys();
const display = countrys => {
    console.log(countrys);
    const countryContainer = document.getElementById('country');
    countrys.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')

        const h3 = document.createElement('h3');
        h3.innerText = (` Country Name : ${country.name}`);
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = (`Capatial : ${country.capital}`);
        div.appendChild(p);
        const img = document.createElement('img');
        img.innerText = (`Flag : ${country.flag}`)
        div.appendChild(img);
        countryContainer.appendChild(div)

    })
}