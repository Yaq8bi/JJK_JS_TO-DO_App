// Get the elements
const inputing = document.getElementById("input-field");
const notesContainer = document.querySelector(".notes");
const post = document.querySelector("#domain");
const delete_btn = document.getElementById("delete_btn");
let COOK = [];
// Add event listener to the post button
post.addEventListener("click", () => {
    addTask(inputing.value);
});

delete_btn.addEventListener("click", () => {
    // illegal
    [...notesContainer.children].forEach(note => note.remove());
    localStorage.clear();
    COOK = []; 
    alert("You erased storage!");
});

function addTask(_string = null) {
    if (_string == null || _string.trim() === "") {
        alert("Which domain you expanded?");
    }
    else
    {
        let newDiv = document.createElement("div");
        newDiv.classList.add("notes"); // Add class for styling
        
        let newH1 = document.createElement("h1");
        const limitedInput = _string.substr(0, 9);
        newH1.innerText = `${limitedInput}`;
        newH1.classList.add("topic");

        // Create a new check image
        let newCheckImage = document.createElement("div");
        newCheckImage.classList.add("check"); 

        // Create a new text paragraph
        let newText = document.createElement("p");
        newText.classList.add("text");
        newText.innerText = _string;

        // Append elements to newDiv
        newDiv.appendChild(newCheckImage);
        newDiv.appendChild(newH1);
        newDiv.appendChild(newText);
        notesContainer.appendChild(newDiv);

        // Append elements to notesContainer
        // notesContainer.appendChild(newH1);
        notesContainer.appendChild(newDiv);

        // Add event listener to toggle strike-through effect
        newCheckImage.addEventListener("click", ()=>{
            newText.classList.toggle("line");
        });

        // Save the data after user is done interacting.
        save_data(_string);

        // Clear input field
        inputing.value = "";
    }
}

function save_data(_string)
{
    console.log(_string);
    COOK.push(_string);
    localStorage.setItem("data", COOK);
}

function get_data()
{
    const cookies = localStorage.getItem("data");
    const cook = cookies.split(",");
    cook.forEach(cookie => {
        console.log(cookie);
        addTask(cookie);
    });
}
get_data();
