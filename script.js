let login = document.querySelector(".login");
login.addEventListener("click", function () {
  alert("click!");
});

console.log(document.querySelector(".Login"));

let commentContainer = document.getElementById("comment-container");

function createInputBox() {
  let div = document.createElement("div");

  div.setAttribute("class", "comment-details");

  div.innerHTML += `<input type="text"
                             placeholder="add text here"
                             class="input" /> 
                      <button class="btn submit"> 
                           Submit 
                      </button>`;
  return div;
}

function addReply(text) {
  let div = document.createElement("div");

  div.setAttribute("class", "all-comment");

  div.innerHTML += `<div class="card"> 
                      <span class="text"> 
                      ${text} 
                      </span> 
                      <span id="reply" class="reply"> 
                      Add Reply 
                      </span></div>`;
  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");

  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

  if (submitClicked) {
    const commentDetails = e.target.closest(".comment-details");
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});

function Show(id) {
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

//Submit Button
function Verify() {
  var userRef = "SuperBob";
  var passRef = "12RobotoLove";

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
    alert("Connexion");
  } else {
    alert("It's seem you make a mistake...");
  }
}
document.getElementById("joinUsButton").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "path/to/your/file.pdf"; // Replace with the path to your file
  link.download = "your_file.pdf"; // Replace with the desired download file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
