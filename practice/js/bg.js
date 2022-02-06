const bgBtn = document.querySelector('.bg-btn');
const page = document.querySelector('.page');

bgBtn.onclick = function() {
  page.classList.toggle('rainbow');
}