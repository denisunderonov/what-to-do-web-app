const getAPI = async function() {
    try {
        const activities = await fetch('https://www.boredapi.com/api/activity/');
        const activitiesJson = await activities.json();
        return activitiesJson.activity;
    } catch(e) {
        console.error(`Error: ${e}`);
        return 'Try refreshing the page';
    }
}

const getText = async function() {
    try {
        const idea = await getAPI();
        return String(idea);
    } catch (e) {
        console.log(`Error: ${e}`);
        return 'Something went wrong';
    }
}

const paragraphs = {
    paragraph1: document.querySelector('.active-block-1'),
    paragraph2: document.querySelector('.active-block-2'),
    paragraph3: document.querySelector('.active-block-3')
}

const setText = function(key) {
    getText().then(text => {
        paragraphs[key].textContent = text;
    }).catch(error => {
        console.error(`Error: ${error}`);
        paragraphs[key].textContent = 'Failed to load idea';
    });
}

const loadIdeas = function() {
    Promise.all(['paragraph1', 'paragraph2', 'paragraph3'].map(el => setText(el)));
}

// Load ideas on page load
loadIdeas();

// Refresh button
const refreshBtn = document.getElementById('refreshBtn');
if (refreshBtn) {
    refreshBtn.addEventListener('click', function() {
        loadIdeas();
    });
}
