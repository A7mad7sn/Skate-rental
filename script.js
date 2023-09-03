document.addEventListener('DOMContentLoaded', function () {
    const personForm = document.getElementById('nameForm');
    const personTable = document.getElementById('customersTable');

    personForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('Skates_Number');
        const MortgageTypeInput = document.getElementById('MortgageType');
        const salaryInput = document.getElementById('rentTime');

        const name = nameInput.value;
        const age = parseInt(ageInput.value);
        const salary = parseFloat(salaryInput.value);

        if (name && age && salary) {
            const person = { name, age, salary };
            addPerson(person);
            saveDataToLocalStorage();
            nameInput.value = '';
            ageInput.value = '';
            salaryInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    personTable.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            deletePerson(event.target.dataset.index);
            saveDataToLocalStorage();
        } else if (event.target.classList.contains('edit-btn')) {
            var editCustomerContainer = document.getElementById('editCustomerContainer');
            editPerson(event.target.dataset.index);
            editCustomerContainer.style.display = 'block';
            saveDataToLocalStorage();

        }
    });

    

    function deletePerson(index) {
        console.log("invokeeed")
        const tableBody = personTable.querySelector('tbody');
        const rows = tableBody.getElementsByTagName('tr');
        console.log(index)
        if (index >= 0 && index < rows.length) {
            console.log("invokeeed if conedtion")

            tableBody.removeChild(rows[index]);
        }
    }

    function editPerson(index) {
        const tableBody = personTable.querySelector('tbody');
        const rows = tableBody.getElementsByTagName('tr');

        if (index >= 0 && index < rows.length) {
            const row = rows[index];
            const name = row.cells[0].textContent;
            const age = parseInt(row.cells[1].textContent);
            const salary = parseFloat(row.cells[2].textContent);

            const nameInput = document.getElementById('name');
            const ageInput = document.getElementById('age');
            const salaryInput = document.getElementById('salary');

            nameInput.value = name;
            ageInput.value = age;
            salaryInput.value = salary;

            tableBody.removeChild(row);
        }

    }



    function loadDataFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('personData')) || [];
        for (let i = 0; i < data.length; i++) {
            const person = data[i];
            addPerson(person);
        }
    }

    loadDataFromLocalStorage();
});
function saveDataToLocalStorage() {
    const tableBody = document.getElementById('customersTable').querySelector('tbody');

    //const tableBody = personTable.querySelector('tbody');
    const rows = tableBody.getElementsByTagName('tr');
    const data = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const name = row.cells[0].textContent;
        const age = parseInt(row.cells[1].textContent);
        const salary = parseFloat(row.cells[2].textContent);
        data.push({ name, age, salary, index: i });
    }
    localStorage.setItem('personData', JSON.stringify(data));
}
//======================

var custTable;


window.onload = function () { console.log("test"); }



function closeForm(ID) {
    document.getElementById(ID).style.display = "none";
    if (ID == 'timeForm') {
        //pop the selected skate from the combo box:
        var comboBox = document.getElementById("reqSkates")
        for (var i = 0; i < comboBox.options.length; i++) {
            if (comboBox.options[i].value === requiredSkates) {
                comboBox.remove(i);
                break;
            }
        }

        var selectedOption = document.querySelector('input[name="time"]:checked');
        time = selectedOption.value


        //====
        var sysDate = new Date();
        var finish = new Date(sysDate.getTime() + time * 60000);
        sysDate = sysDate.toTimeString().substring(0, 5)
        finish = finish.toTimeString().substring(0, 5);
        const tableBody = document.getElementById('customersTable').querySelector('tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${customerName}</td>
        <td>${requiredSkates}</td>
        <td>${mortage}</td>
        <td>${time}</td>
        <td>${sysDate}</td>
        <td>${finish}</td>

<td>
        <button class="delete-btn" data-index="${tableBody.children.length}">Delete</button>
    </td>
    `;
        tableBody.appendChild(row);
        custTable = tableBody

        displayData()

        saveDataToLocalStorage()
    }
}

//to be returned values from the form:
window.onload = function () { console.log("test"); }
var customerName = '';
var requiredSkates = '';
var time = ''; //in case open -1 else minutes eg 60 ,30
var mortage = ''; //'phone'or'id'or'else'





function openForm() {
    document.getElementById("nameForm").style.display = "block";
}


function navigateToNextPage(currentFormId, nextFormId) {
    if (currentFormId == "nameForm") {
        customerName = document.getElementById("custName").value;
        if (customerName == '') {
            document.getElementById("custName").focus()
            return;
        }
        document.getElementById("custName").value = '';
    }
    else if (currentFormId == "reqSkatesForm") {
        requiredSkates = document.getElementById("reqSkates").value;
    }
    else if (currentFormId == "mortageForm") {
        mortage = document.getElementById("mortage").value;
        if (mortage == '') {
            document.getElementById("mortage").focus()
            return;
        }
        document.getElementById("mortage").value = '';
    }
    currentForm = currentFormId;
    nextForm = nextFormId;
    var currentForm = document.getElementById(currentFormId);
    var nextForm = document.getElementById(nextFormId);
    var loadingContainer = currentForm.querySelector('.loading-container');
    loadingContainer.style.display = 'block';
    var nextButton = currentForm.querySelector('.btn');
    nextButton.disabled = true;
    setTimeout(function () {
        loadingContainer.style.display = 'none';
        nextButton.disabled = false;
        currentForm.style.display = 'none';
        nextForm.style.display = 'block';
    }, 150);




}
function displayData() {
    console.log("customer name #####" + customerName);
    console.log("required skates #####" + requiredSkates);
    console.log("time #####" + time);
    console.log("mortage #####" + mortage);
}


