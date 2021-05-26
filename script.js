let hello = () => {
    alert('hello!');
}

// window.addEventListener('load', hello);

function getNumRows() {
    // return 3
    return document.getElementById('row').value;
}


function getNumCols() {
    //return 6
    return document.getElementById('col').value;
}


function buildTable(len, width) {
    let table = document.getElementById('promo_table');
    console.log(table); // remove after testing

    table.innerHTML = '';

    const newTable = document.createElement('table');
    const newTableBody = document.createElement('tbody');
    table.insertAdjacentElement('afterbegin', newTable);
    newTable.insertAdjacentElement('afterbegin', newTableBody);

    for (let row = 0; row < len; row++) {
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
function findEssentialRewards() {
    // find and replace !er with &lt;img src="">
    const img = '<img title="Essential Rewards Only" src="#"> alt="Essential Rewards Only"'
    return -1
}


// generate table HTML
function getTableData(len, width) {
    let cellData = '';
    // let cellData = document.getElementById('c00').firstChild.value;
    // console.log(cellData);
    for (let row = 0; row < len; row++) {
        // check open table row
        if (row == 0) {
            cellData += '<br>&lt;thead class="bg-primary text-white"><br>';
        } else {
            cellData += `<br>&lt;tr><br>`;
        }
        for (let col = 0; col < width; col++) {
            cellData += `&lt;td>&lt;a href="#" target="_blank" rel="noopener noreferrer">${document.getElementById(`c${row}${col}`).firstChild.value}&lt;/a>&lt;/td><br>`;
            console.log(cellData);
        }
        // check close table row
        if (row == 0) {
            cellData += '&lt;/thead><br>&lt;tbody>';
        } else {
            cellData += `&lt;/tr>`;
        }
    }

    // findEssentialRewards();

    document.getElementById('output').innerHTML = `
&lt;table class="table-bordered">${cellData}
&lt;/tbody>
&lt;/table>`
}


// buildTable(3,3);