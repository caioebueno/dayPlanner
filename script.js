//real time

var calendar = moment().calendar();
var timeString = String(calendar);
var period = timeString.charAt(14) + timeString.charAt(15);
var hour12 = timeString.charAt(9);
var hour = 0;

if(period === "PM"){
    hour = parseInt(hour12) + 12; 
}
else if(period === "AM"){
    hours = hour12;
}




var hours = 18;
var hoursArray = ["06:00am","07:00am","08:00am","09:00am", "10:00am", "11:00am","12:00pm","01:00pm","02:00pm","03:00pm","04:00pm","05:00pm","06:00pm","07:00pm","08:00pm","09:00pm","10:00pm","11:00pm"];
var inputId = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
var table = document.getElementById("calendarTable");

for(i = 0; i < hours; i++){

    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr" + i);
    tr.setAttribute("class", "tr");

    var timeTh = document.createElement("th");
    timeTh.setAttribute("id", "time" + i);
    timeTh.setAttribute("class", "timeTh");
    timeTh.innerHTML = hoursArray[i];

    var inputTh = document.createElement("th")
    inputTh.setAttribute("id", "input" + i);
    inputTh.setAttribute("class", "inputTh");

    var input = document.createElement("textarea");
    input.setAttribute("id", "input" + inputId[i]);
    input.setAttribute("class", "input");
    input.disabled = true;
    if(hour == inputId[i]){
        input.setAttribute("style", "background-color: red;");
    }
    else if(hour < inputId[i]){
        input.setAttribute("style", "background-color: green;");
    }
    else{
        input.setAttribute("style", "background-color: grey");
    }

    var localStorageCheck = window.localStorage.getItem("button" + i);
    input.value = localStorageCheck;

    inputTh.appendChild(input);

    var editTh = document.createElement("th")
    editTh.setAttribute("id", "edit" + i);
    editTh.setAttribute("class","editTh");

    var button = document.createElement("button");
    button.setAttribute("id", "button" + i);
    button.setAttribute("class", "button");
    button.setAttribute("onclick", "editInput(this.id)");
    button.innerHTML = "edit";

    editTh.appendChild(button);

    table.appendChild(tr);

    tr.appendChild(timeTh);
    tr.appendChild(inputTh);
    tr.appendChild(editTh);

}

//edit

var edit = true;

function editInput(elementId){

    if(edit === true){
            
        var element = document.getElementById(elementId);
        var parentElement = element.parentElement;
        var parentElement2 = parentElement.parentElement
        var inputParent = parentElement2.childNodes[1];
        var input = inputParent.childNodes[0];
        input.disabled = false;
        edit = false;

    }
    else if(edit === false){

        var element = document.getElementById(elementId);
        var parentElement = element.parentElement;
        var parentElement2 = parentElement.parentElement
        var inputParent = parentElement2.childNodes[1];
        var input = inputParent.childNodes[0];
        input.disabled = true;
        edit = true;

        var localStorageString = input.value;
        window.localStorage.setItem(elementId, localStorageString);

    }

}
