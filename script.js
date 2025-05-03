// Change text content
document.getElementById("change-text").addEventListener("click", function () {
    document.getElementById("intro").textContent = "The text has been changed!";
  });
  
  // Modify CSS style
  document.getElementById("change-style").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("main-title").style.color = "darkblue";
  });
  
  // Add a new element
  document.getElementById("add-element").addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.textContent = "This is a new element!";
    newDiv.className = "new-box";
    document.getElementById("container").appendChild(newDiv);
  });
  
  // Remove last added element
  document.getElementById("remove-element").addEventListener("click", function () {
    const container = document.getElementById("container");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  });
  