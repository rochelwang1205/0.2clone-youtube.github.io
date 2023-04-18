var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
//訂閱按鈕點擊改變
const btn = document.getElementById("subscribeBtn");

btn.addEventListener("click", function() {
  if (btn.classList.contains("btn-primary")) {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-danger");
    btn.textContent = "Subscribe";
  } else {
    btn.classList.remove("btn-danger");
    btn.classList.add("btn-primary");
    btn.textContent = "Subscribed";
  }
});
