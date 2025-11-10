const draggables = document.querySelectorAll(".choose");
const tierRows = document.querySelectorAll(".tier-row");
const resetButton = document.getElementById("reset-button");
const sourceContainer = document.getElementById("source-container");

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("choose")) {
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("choose")) {
    e.target.classList.remove("dragging");
  }
});

tierRows.forEach((row) => {
  row.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  row.addEventListener("drop", (e) => {
    e.preventDefault();

    const dragging = document.querySelector(".dragging");

    if (dragging) {
      row.appendChild(dragging);
    }
  });
});

function resetTierList() {
  const allItems = document.querySelectorAll(".choose");

  allItems.forEach((item) => {
    sourceContainer.appendChild(item);
  });

  console.log("Tier List resetada! Itens retornaram ao contêiner de origem.");
}

if (resetButton) {
  resetButton.addEventListener("click", resetTierList);
}
