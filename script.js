getAPI = async function() {
    try {
        const activities = await fetch('https://www.boredapi.com/api/activity/');
        activititiesJson = await activities.json();
        return activititiesJson.activity;
    } catch(e) {
        console.error(`Ошибка: ${e}`)
    }
}

getText = async function() {
    try {
        const idea = await getAPI();
        ideaToString = String(idea);
    } catch (e) {
        console.log(`Ошибка такая вот: ${e}`)
    }
    return ideaToString;
}
    

// Начинаю работать с элементами 

const paragraphs = {
    paragrapgh1: document.querySelector('.active-block-1'),
    paragrapgh2: document.querySelector('.active-block-2'),
    paragrapgh3: document.querySelector('.active-block-3')
}

setText = function(key) {
    getText().then(test => {
        paragraphs[key].textContent = test;
      }).catch(error => {
        console.error(`Ошибка: ${error}`);
      });
}

Promise.all(['paragrapgh1', 'paragrapgh2', 'paragrapgh3'].map(el => setText(el)));




