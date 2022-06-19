// Your code here
document.addEventListener("DOMContentLoaded", () => {
  function fetchData() {
    fetch("http://localhost:3000/characters")
      .then((resp) => resp.json())
      .then((data) => rendercharacter(data));
  }
  const characterbar = document.querySelector("#character-bar");
  //funtion to render character to nav
  function rendercharacter(data) {
    //console.log(data);
    let output = "<span>Posts</span>";
    data.forEach((post) => {
      output += `
        <span>${post.name}</span>
          `;
    });
    characterbar.innerHTML = output;
  }
  fetchData();
});
