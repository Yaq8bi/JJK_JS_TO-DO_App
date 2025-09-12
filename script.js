// Get the elements
const inputing = document.getElementById("input-field");
const notesContainer = document.querySelector(".notes");
const post = document.querySelector("#domain");
const delete_btn = document.getElementById("delete_btn");
// Add event listener to the post button
post.addEventListener("click", () => {
    addTask();
});

delete_btn.addEventListener("click", () => {
    notesContainer.remove();
    localStorage.clear();
    alert("You erased storage!");
});


function addTask() {
    if (inputing.value === "") {
        alert("Which domain you expanded?");
    }
    else
    {
        let newDiv = document.createElement("div");
        newDiv.classList.add("notes"); // Add class for styling
        
        let newH1 = document.createElement("h1");
        const limitedInput = inputing.value.substr(0, 9);
        newH1.innerText = `${limitedInput}`;
        newH1.classList.add("topic");

        // Create a new check image
        let newCheckImage = document.createElement("div");
        newCheckImage.classList.add("check"); 

        // Create a new text paragraph
        let newText = document.createElement("p");
        newText.classList.add("text");
        newText.innerText = inputing.value;

        // Append elements to newDiv
        newDiv.appendChild(newCheckImage);
        newDiv.appendChild(newH1);
        newDiv.appendChild(newText);
        document.body.appendChild(newDiv);

        // Append elements to notesContainer
        // notesContainer.appendChild(newH1);
        notesContainer.appendChild(newDiv);

        // Add event listener to toggle strike-through effect
        newCheckImage.addEventListener("click", ()=>{
            newText.classList.toggle("line");
            newDiv.remove();
        });

        // Save the data after user is done interacting.
        save_data();


        // Clear input field
        inputing.value = "";
    }
}

function save_data()
{
    localStorage.setItem("data", notesContainer.innerHTML);
}

function get_data()
{
    notesContainer.innerHTML = localStorage.getItem("data");
}
get_data();
