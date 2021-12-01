
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 


//toggle between pages - possible code//

document.getElementById('switch_id').addEventListener("change", function(){
    if (this.checked) window.location.href = 'teacher.html';
 });
