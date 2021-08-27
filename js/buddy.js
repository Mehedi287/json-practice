const logBuddys = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}
logBuddys();
const displayBuddy = data => {
    const buddys = data.results;
    const buddyContainer = document.getElementById('buddy');

    for (const buddy of buddys) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = (`Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email : ${buddy.email}
        Gender : ${buddy.gender}
        Age : ${buddy.dob.age}`
        )
        buddyContainer.appendChild(p)
    }
}