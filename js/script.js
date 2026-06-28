// https://api.github.com/repos/hannahjblair/beets/commits


// https://api.github.com/repos/hannahjblair/beets/languages

const apiEndpoint = 'https://api.github.com/repos/hannahjblair/beets/languages';
const targetContainer = document.getElementById('beets-languages');

async function fetchRepoLanguages() {
    try {
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
            throw new Error('Could not load languages');
        }

        const data = await response.json();

        // Loop through the data keys and print just the names of the languages
        for (let lang in data) {
            targetContainer.innerHTML += `<p>${lang}</p>`;
        }

    } catch (error) {
        targetContainer.innerHTML = `Error: ${error.message}`;
    }
}


// console.log("testing");

const apiEndpointWebDev = 'https://api.github.com/repos/hannahjblair/webdev-task-wk1-and-wk2/languages';
const targetContainerWebDev = document.getElementById('web-dev-languages');

async function fetchRepoLanguagesWeb() {
    try {
        const response = await fetch(apiEndpointWebDev);
        
        if (!response.ok) {
            throw new Error('Could not load languages');
        }

        const data = await response.json();

        // Loop through the data keys and print just the names of the languages
        for (let lang in data) {
            targetContainerWebDev.innerHTML += `<p>${lang}</p>`;
        }

    } catch (error) {
        targetContainerWebDev.innerHTML = `Error: ${error.message}`;
    }
}

const apiEndpointText = 'https://api.github.com/repos/hannahjblair/Text_File_Creator/languages';
const targetContainerText = document.getElementById('text-languages');

async function fetchRepoLanguagesText() {
    try {
        const response = await fetch(apiEndpointText);
        
        if (!response.ok) {
            throw new Error('Could not load languages');
        }

        const data = await response.json();

        // Loop through the data keys and print just the names of the languages
        for (let lang in data) {
            targetContainerText.innerHTML += `<p>${lang}</p>`;
        }

    } catch (error) {
        targetContainerText.innerHTML = `Error: ${error.message}`;
    }
}

fetchRepoLanguages();
fetchRepoLanguagesWeb();
fetchRepoLanguagesText();

