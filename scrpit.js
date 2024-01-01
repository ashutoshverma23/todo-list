const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("Add some text first");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
} 

list.addEventListener("click", function(x){
    if(x.target.tagName === "LI"){
        x.target.classList.toggle("checked");
    }
    else if(x.target.tagName === "SPAN"){
        x.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}   

function show(){
    list.innerHTML = localStorage.getItem("data");
}
show();