const backdrop = document.getElementById("backdrop");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
const noBtn = document.getElementById("noBtn");
const buttonsArea = document.getElementById("buttonsArea");

openModalBtn.addEventListener("click", () => backdrop.classList.add("show"));
closeBtn.addEventListener("click", () => backdrop.classList.remove("show"));

function moveNo(){
  const r = buttonsArea.getBoundingClientRect();
  noBtn.style.left = Math.random() * (r.width - 100) + "px";
  noBtn.style.top = Math.random() * (r.height - 40) + "px";
}

if (matchMedia("(pointer:fine)").matches){
  noBtn.addEventListener("mouseenter", moveNo);
}else{
  noBtn.addEventListener("pointerdown", e => {
    e.preventDefault();
    moveNo();
  });
}
