const getfood = () => {
    const getIputFlid = document.getElementById('user-input');
    const userMell = getIputFlid.value;
    // console.log(userMell);
    getIputFlid.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userMell}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');

    meals.forEach(mell => {
        console.log(mell);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
       
        <div class="card">
            <img src=" ${mell.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${mell.strMeal}</h5>
            <p class="card-text"> ${mell.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
    `;
        // console.log(div);
        searchResult.appendChild(div);
    })
}