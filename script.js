let hello = () => {
    alert('hello!');
}

// window.addEventListener('load', hello);

function getNumRows() {
    console.log('num rows');
    return 3
}


function getNumCols() {
    console.log('num cols');
    return 6
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
                newTableHead.setAttribute('id', `c${row}${col}`); // here for safety might delete later
                newTableHead.setAttribute('value', 'text');
            } else {
                // regular table columns
                const newTableCol = document.createElement('td');
                newTableRow.appendChild(newTableCol);
                newTableCol.appendChild(document.createElement('input'));
                newTableCol.setAttribute('id', `c${row}${col}`); // here for safety might delete later
            }
        }
        newTableBody.appendChild(newTableRow);
    }
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
            cellData += `&lt;td>${document.getElementById(`c${row}${col}`).firstChild.value}&lt;/td><br>`;
            console.log(cellData);
        }
        // check close table row
        if (row == 0) {
            cellData += '&lt;/thead><br>&lt;tbody>';
        } else {
            cellData += `&lt;/tr>`;
        }
    }


    document.getElementById('output').innerHTML = `
&lt;table class="table-bordered">${cellData}
&lt;/tbody>
&lt;/table>`
}


// buildTable(3,3);