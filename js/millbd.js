const getfood = () => {
    const getIputFlid = document.getElementById('user-input');
    const userMell = getIputFlid.value;
    if (userMell == '') {
        const arrow = document.getElementById('arrow');
        arrow.innerText = 'plase write something'
    }
    else {
        // console.log(userMell);
        getIputFlid.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userMell}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }

}



const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    if (meals == ' ') {
        const arrow = document.getElementById('arrow')
        arrow.innerText = 'your result is not found 404'
    }
    else {
        searchResult.textContent = '';
        meals.forEach(mell => {
            console.log(mell);
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `
           
            <div onclick="getid(${mell.idMeal})" class="card">
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

}
const getid = melId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${melId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = mel => {
    const getMelDetails = document.getElementById('mel-details');
    getMelDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${mel.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${mel.strMeal}</h5>
                <p class="card-text"> ${mel.strInstructions.slice(0, 250)}.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <a href="${mel.strYoutube}"><button class="btn-bg-primary">Recipi</button></a>
            </div>
        </div>
    </div>
    `;
    getMelDetails.appendChild(div)
}