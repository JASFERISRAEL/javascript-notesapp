const notesContainter = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let  notes = document.querySelectorAll(".input-box");


function showNotes(){
    notesContainter.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateSorage(){
    localStorage.setItem("notes",notesContainter.innerHTML)
}
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainter.appendChild(inputBox);
    inputBox.appendChild(img);
    updateSorage();
    inputBox.focus();
})


notesContainter.addEventListener("click", function(e){
    if (e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateSorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateSorage();
            }
        })
    }
})


document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
}
)