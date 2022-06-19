// Your code here
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
//get dom elements
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const characterVote = document.getElementById("vote-count");

function fetchData() {
  fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((data) => {
      renderCharacters(data);
    });
}

//funtion to render characters
function renderCharacters(data) {
  data.forEach((data) => {
    const nameSpan = document.createElement("span");
    nameSpan.innerText = data.name;

    characterBar.appendChild(nameSpan);
    nameSpan.addEventListener("click", () => {
      characterName.textContent = data.name;
      characterImage.setAttribute("src", data.image);
      characterVote.textContent = data.votes;
    });
  });
}

// function updateVotes(characters) {
//   // console.log(characters)
//   for (let element of characters) {
//     const characterVoteForm = document.getElementById("votes-form");

//     characterVoteForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       // console.log(e.target.votes.value)
//       const newVotes = e.target.votes.value;
//       const characterVote = document.getElementById("vote-count");
//       characterVote.textContent = newVotes;
//       fetch("http://localhost:3000/characters", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newVotes),
//       }).then((res) => console.log(res.json()));
//       // .then(votes => console.log(votes))
//     });
//   }
// }
