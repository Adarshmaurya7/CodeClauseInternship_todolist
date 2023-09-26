const inputRow= document.getElementById("input-row");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputRow.value ===''){
        alert("you must write something");
    }
    else{
        let li =document.createElement("li"); // creating html element li and storing into  li
        li.innerHTML = inputRow.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputRow.value ="";
    saveData();
    }
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    },false);
    
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();