// Variablen
const main = document.querySelector('main');
const repoList = document.getElementById('repository-list');

// Functie om elementen in de HTML te vinden
const element = (element) => {
    return document.querySelector(element)
}

// Variabelen om HTML-elementen te vinden
const theTitel = element('h2')
const theDescription = element('p')

// Zet de bijbehorende api gegevens in de HTML elementen
const changeTitel = (repo) => {
    console.log(repo)
    const text = repo
    theTitel.innerHTML = text
}
const changeDescription = (repo) => {
    console.log(repo)
    const descrip = repo
    theDescription.innerHTML = descrip
}

const url = 'https://api.github.com/users/hilal-tapan/repos';
fetchData();

// Haal gegevens op van de API
function fetchData() {
    fetch(url)
        .then((response) => response.json())
        .then((repos) => {
            repos.forEach(repo => {
            console.log(repo);
            console.log(repo.full_name)
            console.log(repo.description)
            console.log(repo.html_url)
            console.log(repo.homepage)

            // data veranderen
            changeTitel(repo.full_name)
            changeDescription(repo.description)

            const repoName = repo.name
            const repoDescription = repo.description
            const repoLink = repo.html_url
            const repoLiveSite = repo.homepage

            let repoElement = displayRepoData(repoName, repoDescription, repoLink, repoLiveSite)
            repoList.insertAdjacentHTML('beforeend', repoElement)
        });

    if (repo.error) {
        handleFetchError(repo.error)
        return;
    }
})}

function displayRepoData(repoName, repoDescription, repoLink, repoLiveSite) {
    return `
                 <article>
                    <h1>${repoName}</h1>
                    <p>${repoDescription}</p>  
                    <a href='${repoLink}'>Repository</a>  
                    <a href='${repoLiveSite}'>Live Site</a>  
                 </article>
                 `;
}