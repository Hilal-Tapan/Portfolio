const main = document.querySelector('main');
// Variabelen om HTML-elementen te vinden


// Functie om elementen in de HTML te vinden
const element = (element) => {
    return document.querySelector(element)
}

const theTitel = element('h2')
const theDescription = element('p')

// Zet de bijbehorende api gegevens in de HTML elementen
const changeTitel = (data) => {
    console.log(data)
    const text = data
    theTitel.innerHTML = text
}

const changeDescription = (data) => {
    console.log(data)
    const descrip = data
    theDescription.innerHTML = descrip
}

const url = 'https://api.github.com/users/hilal-tapan/repos';
fetchData();

// Haal gegevens op van de API
function fetchData() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            data.forEach((repo) => {
                console.log(repo.full_name);
                console.log(repo.description);
                // console.log(repo.html_url);
                // console.log(repo.homepage);

                // data veranderen
                changeTitel(repo.full_name);
                changeDescription(repo.description);


                // // Create a new HTML element for the repository description
                // description.innerHTML = repo.description;

                // // Append the description element to the main element
                // main.appendChild(description);

                // // Add the full_name data as innerHTML to the titel variable
                // const name = document.createElement('p');
                // name.innerHTML = repo.full_name;
                // titel.appendChild(name);
            });

            if (data.error) {
                handleFetchError(data.error);
                return;
            }
        });
}