const td_DayDate = document.querySelector(".td-dayDate");
const td_Day = document.querySelector(".td-day");
const td_Date = document.querySelector(".td-date");
const td_MonthYear = document.querySelector(".td-monthYear");
const table = document.querySelector("table");
const pre_btn = document.querySelector(".pre-btn");
const next_btn = document.querySelector(".next-btn");


const tdDayObject = {0:"SUN",1:"MON", 2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT"};
const tdMonthObject = {0:"JAN", 1:"FEB",2:"MAR",3:"APR",4:"MAY",5:"JUN",6:"JUL",7:"AUG",8:"SEP",9:"OCT",10:"NOV",11:"DEC"};

const today = new Date();
const tdDay = today.getDay();
const tdDate = today.getDate();
let tdMonth = today.getMonth();
let tdYear = today.getFullYear();

td_Day.innerText = tdDayObject[tdDay];
td_Date.innerText = tdDate;
td_MonthYear.innerText = `${tdMonthObject[tdMonth]} ${tdYear}`;

let firstDate = new Date(tdYear,tdMonth,1).getDate();
let lastDate = new Date(tdYear,tdMonth+1,0).getDate();
let firstDay = new Date(tdYear,tdMonth,1).getDay();

function gernerateTable() {
  let row = table.insertRow();
    for(i=0; i<firstDay; i++){                
        let cell = row.insertCell();
        cell.innerText = '';
    }
    for(i=1; i<=lastDate; i++){
        if(firstDay!==7) {               
            cell = row.insertCell();
            cell.innerText = i;
            firstDay+=1;
        } else {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = i;
            firstDay-=6;
        }
    }   
}
gernerateTable();

function paintBtnAll() {
    firstDate = new Date(tdYear,tdMonth,1).getDate();
    lastDate = new Date(tdYear,tdMonth+1,0).getDate();
    firstDay = new Date(tdYear,tdMonth,1).getDay();
    td_Day.innerText = tdDayObject[firstDay];
    td_Date.innerText = firstDate;
    td_MonthYear.innerText = `${tdMonthObject[tdMonth]} ${tdYear}`;
}

function goToPreMonth() {
    while (table.rows.length>1){
        table.deleteRow(1);
    }
    if (tdMonth===0){
        tdYear=tdYear-1;
        tdMonth=12;
    }
    tdMonth=tdMonth-1;
    paintBtnAll();
    gernerateTable();
    function paintBtnDate (event) {
        const clickedcell = event.target.innerText;
        td_Date.innerText = clickedcell;
        const clickedIndex =event.target.cellIndex;
        td_Day.innerText = tdDayObject[clickedIndex];
    }
    let cells = table.querySelectorAll("td");
    for( allCell of cells) {
        allCell.addEventListener("click",paintBtnDate);
    }
}

function goToNextMonth() {
    while (table.rows.length>1){
        table.deleteRow(1);
    }
    if (tdMonth===11){
        tdYear=tdYear+1;
        tdMonth=-1;
    }
    tdMonth=tdMonth+1;
    paintBtnAll();
    gernerateTable();
    function paintBtnDate (event) {
        const clickedcell = event.target.innerText;
        td_Date.innerText = clickedcell;
        const clickedIndex =event.target.cellIndex;
        td_Day.innerText = tdDayObject[clickedIndex];
    }
    let cells = table.querySelectorAll("td");
    for( allCell of cells) {
        allCell.addEventListener("click",paintBtnDate);
    }
}
        
next_btn.addEventListener("click",goToNextMonth);
pre_btn.addEventListener("click",goToPreMonth);


function paintBtnDate (event) {
        let clickedcell = event.target.innerText;
        td_Date.innerText = clickedcell;
        let clickedIndex =event.target.cellIndex;
        td_Day.innerText = tdDayObject[clickedIndex];

    }
    let cells = table.querySelectorAll("td");
    for( allCell of cells) {
        allCell.addEventListener("click",paintBtnDate);
    }
