function listeners() {
    let dimensionsbtn = document.getElementById('get-table-dimensions');
    dimensionsbtn.addEventListener('click', () => {
        buildTable(getHeight(), getWidth());
        generatebtn.style.display = 'block';
    });
    
    let generatebtn = document.getElementById('generate-html');
    let codeDisplay = document.getElementById('output');
    let copybtnDisplay = document.querySelector('.flex-container');
    generatebtn.addEventListener('click', () => {
        buildTableHTML(getHeight(), getWidth());
        codeDisplay.style.display = 'block';
        copybtnDisplay.style.display = 'flex';

    });

    let copybtn = document.getElementById('copy-table');
    copybtn.addEventListener('click', () => {
       copy(); 
    });
}


function getHeight() {
    // get table hight
    return document.getElementById('tbl-height').value;
}


function getWidth() {
    // get table width
    return document.getElementById('tbl-width').value;
}


function buildTable(height, width) {
    let table = document.getElementById('promo_table');
    console.log(table); // remove after testing

    table.innerHTML = '';

    const newTable = document.createElement('table');
    const newTableBody = document.createElement('tbody');
    table.insertAdjacentElement('afterbegin', newTable);
    newTable.insertAdjacentElement('afterbegin', newTableBody);

    for (let row = 0; row < height; row++) {
        const newTableRow = document.createElement('tr');

        // create table columns
        for (let col = 0; col < width; col++) {
            // create table head
            if (row == 0) {
                const newTableHead = document.createElement('th');
                newTableRow.appendChild(newTableHead);
                newTableHead.appendChild(document.createElement('input'));
                newTableHead.setAttribute('id', `c${row}${col}`);
                newTableHead.setAttribute('value', 'text');
            } else {
                // regular table columns
                const newTableCol = document.createElement('td');
                newTableRow.appendChild(newTableCol);
                newTableCol.appendChild(document.createElement('input'));
                newTableCol.setAttribute('id', `c${row}${col}`);
                newTableCol.setAttribute('value', 'text');
            }
        }
        newTableBody.appendChild(newTableRow);
    }
}


// find and replace !er command with er img
function findEssentialRewards(cellData) {
    // find and replace !er with &lt;img src="">
    const img = ' &lt;img title="Essential Rewards Only" src="#" alt="Essential Rewards Only">';
    let result = cellData.replaceAll('!er', img)
    let final = result.replaceAll('!br', '&lt;br>') // this is a hack, but will refactor later
    return final;
}


// buildTableHTML
function buildTableHTML(len, width) {
    const productHubLink = 'https://mskbase.youngliving.com/product-hub/?language=en-us&productId=0000';
    let cellData = '';
    for (let row = 0; row < len; row++) {
        // check open table row
        if (row == 0) {
            cellData += '<br>&lt;thead class="bg-primary text-white font-weight-bold"><br>';
        } else {
            cellData += `<br>&lt;tr><br>`;
        }
        for (let col = 0; col < width; col++) {
            if (row == 0) {
                cellData += `&lt;th>${document.getElementById(`c${row}${col}`).firstChild.value}&lt;/th><br>`;
            } else {
                cellData += `&lt;td>&lt;a href="${productHubLink}" target="_blank" rel="noopener noreferrer">${document.getElementById(`c${row}${col}`).firstChild.value}&lt;/a>&lt;/td><br>`;
            }
        }
        // check close table row
        if (row == 0) {
            cellData += '&lt;/thead><br>&lt;tbody>';
        } else {
            cellData += `&lt;/tr>`;
        }
    }

    // findEssentialRewards(cellData);

    document.getElementById('output').innerHTML = `
&lt;table class="table-bordered">${findEssentialRewards(cellData)}
&lt;/tbody>
&lt;/table>`;
}


function copy() {
    // copy output
    tableOutput = document.getElementById('output');
    console.log('TODO');
    alert('error, not copied');
}

// buildTable(3,3);

window.addEventListener('load', listeners);