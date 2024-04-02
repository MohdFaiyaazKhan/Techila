var table = document.getElementById("myTable");
let rows = table.rows.length;

//for current date
let date = new Date().toLocaleDateString();

//for current day
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//to print date and day
document.getElementById('date').innerText = `${date}, ${dayNames[dayOfWeek]}`;

//to capitalize the input field text
document.getElementById('input').style.textTransform = 'capitalize'


function add(e){

    let task = e.parentNode.previousElementSibling.firstElementChild.value;

    field = e.parentNode.previousElementSibling.firstElementChild;

    if(task.trim() === ''){
        field.style.borderColor = 'red';
        document.getElementById('alert').style.display = 'block'
    }
    else{
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = task;
        cell1.style.textTransform = 'capitalize'
        cell2.innerHTML = `<div class= "activity" >
        <div onclick="del(this)">
        <i class="fa-solid fa-trash-can" style="color: #d10000;"></i></div>
        <div onclick="edit(this)">
        <i class="fa-regular fa-pen-to-square" style="color: #74C0FC;"></i></div></div>
        `;

    
        e.parentNode.previousElementSibling.firstElementChild.value = '';
        
        document.getElementById('alert').style.display = 'none'
        field.style.borderColor = '#ccc';
    }

   

}

function del(e){
    let index = e.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(index);
}

function  dltAll(e){
    var tableHeaderRowCount = 1;

    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}


let isUpdating = false;

function edit(e){
    if (!isUpdating) {
        isUpdating = true;

        let currentText = e.parentNode.parentNode.previousElementSibling.innerText;

        e.parentNode.parentNode.previousElementSibling.innerHTML = `<input class='editField' value='${currentText}' onblur="update(this)" type='text'>`;
    }
}

function update(e){
    if(e.value.trim() === ''){
        let index = e.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(index);
    } else {
        e.parentNode.innerHTML = e.value;
    }
    
    isUpdating = false;
}
