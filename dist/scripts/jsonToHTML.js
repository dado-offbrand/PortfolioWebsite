// Loads all content from a json file onto a page,
// jsonName is the name of the json
// parentID is the id of the parent object to locate
function loadJsonPageContent(jsonName) {
    const jsonFile = '../loadables/' + jsonName;

    fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
        applyJsonPageContent(data);
    })
    .catch((error) => {
        console.error('Error fetching JSON:', error);
    });
}

// Doesn't apply just one json object, applies the entire array of objects
function applyJsonPageContent(data) {
    parentElement = document.getElementById('jsonContentParent');
    let initial = true;
    let currentRow;
    let columnsAdded = 0;
    
    data.forEach(sectionData => {
        if (columnsAdded % 2 == 0 || initial) {
            initial = false;
            columnsAdded = 0;

            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            parentElement.appendChild(currentRow);
        }

        // create objects
        const columnDiv = document.createElement('div');
        const portBoxDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const contentDiv = document.createElement('div');

        const title = document.createElement('h3');
        const paragraph = document.createElement('p');

        // configure main divs
        portBoxDiv.classList.add('port-box');
        columnDiv.classList.add('col-sm-6');

        // configure title
        titleDiv.setAttribute('id', 'top');
        title.textContent = sectionData.Title;

        // configure contentDiv & paragraph
        contentDiv.classList.add('port-box-content');
        paragraph.textContent = sectionData.Content;

        // parent objects
        currentRow.appendChild(columnDiv);
        columnDiv.appendChild(portBoxDiv);
        portBoxDiv.appendChild(titleDiv);
        portBoxDiv.appendChild(contentDiv);
        titleDiv.appendChild(title);
        contentDiv.appendChild(paragraph);
        
        columnsAdded++;
    });
}