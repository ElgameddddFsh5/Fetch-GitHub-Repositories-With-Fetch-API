//Main Var

let theInput = document.getElementById("search"),
  getBtn = document.querySelector(".get-repo-btn"),
  content = document.querySelector(".content"),
  allContentDiv = document.querySelector(".all-api-insideDiv");

// Repos button on click

getBtn.addEventListener("click", () => {
  GetRepo();
  
});

// Get repos Function

function GetRepo() {
  //Create Div that contain all user repos data
  if (theInput.value === "") {
    console.log("Enter Repo Name Please");
    // let allApiDiv = document.querySelector("all-api");
    allContentDiv.remove();
  }  else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        allContentDiv.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].name);
          let allApiDiv = document.createElement("div"),
            RepoDetailsDiv = document.createElement("div"),
            repoName = document.createElement("p"),
            StarsAndVisit = document.createElement("div"),
            Stars = document.createElement("p"),
            Visit = document.createElement("a");
          // SetAttributes
          allApiDiv.setAttribute("class", "all-api");
          RepoDetailsDiv.setAttribute("class", "repo-details");
          StarsAndVisit.setAttribute("class", "stars-visit");
          Stars.setAttribute("class", "stars");
          Visit.setAttribute("class", "visit");
          Visit.setAttribute("href", "#");
          // End of SettingAttributes

          // Append everything into content div
          allContentDiv.append(allApiDiv);
          allApiDiv.append(RepoDetailsDiv);
          RepoDetailsDiv.append(repoName);
          RepoDetailsDiv.append(StarsAndVisit);
          StarsAndVisit.append(Stars);
          StarsAndVisit.append(Visit);
          repoName.innerHTML = data[i].name;
          Stars.innerHTML = `${data[i].stargazers_count} Stars`;
          Visit.setAttribute(
            "href",
            `https://github.com/ElgameddddFsh5/${data[i].name}`
          );
          Visit.setAttribute("target", '"_blank"');
          Visit.innerHTML = "Visit";
        }
      });
  }
}
