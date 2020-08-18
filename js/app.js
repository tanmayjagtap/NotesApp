

console.log("connected");
showNotes();
//if user addds a note add it to the local storage 
let addbtn=document.getElementById('addBtn');
addbtn.addEventListener('click',()=>{
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
    });
    let notesELm=document.getElementById("notes");
    if(notesObj.legth!=0){
        notesELm.innerHTML=html;
    }
    else{
        notesELm.innerHTML=`Nothing to show! Use above section to add notes`
    }
}

// function to delete note
function deleteNote(index){
    console.log("delete",index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1); 
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}


let search=document.getElementById('searchTxt')
search.addEventListener('input',()=>{
    inputVal=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})


// //further features
// 1. add title
// 2. mark a note as important
// 3. seperate notes for different users
// 4. sync and host 