const getAPI = async function() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        return data.activity;
    } catch(e) {
        console.error(`Error: ${e}`);
        return 'Try refreshing the page';
    }
}

const paragraphs = {
    paragraph1: document.querySelector('.active-block-1'),
    paragraph2: document.querySelector('.active-block-2'),
    paragraph3: document.querySelector('.active-block-3')
}

const setText = async function(key) {
    try {
        const text = await getAPI();
        paragraphs[key].textContent = text;
    } catch (error) {
        console.error(`Error: ${error}`);
        paragraphs[key].textContent = 'Failed to load idea';
    }
}

const loadIdeas = async function() {
    await Promise.all([
        setText('paragraph1'),
        setText('paragraph2'),
        setText('paragraph3')
    ]);
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
