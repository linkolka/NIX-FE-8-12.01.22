const firstRow = document.querySelector('.first-row');
const secondRow = document.querySelector('.second-row');
const thirdRow = document.querySelector('.third-row');
const forthRow = document.querySelector('.forth-row');
const rowBtn = document.querySelector('.row-btn');

rowBtn.onclick = function() {
  firstRow.classList.toggle('odd');
  thirdRow.classList.toggle('odd');
  secondRow.classList.toggle('even');
  forthRow.classList.toggle('even');
}
