const counter = document.getElementById('reader');
const increaser = document.getElementById('increase');
const reseter = document.getElementById('reset');
const decreaser = document.getElementById('decrease');

increaser.addEventListener('click', () => counter.innerHTML++);

reseter.addEventListener('click', () => counter.innerHTML = 0);

decreaser.addEventListener('click', () => counter.innerHTML--)