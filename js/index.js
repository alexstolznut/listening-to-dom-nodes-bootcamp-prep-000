// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(fuck){
  console.log(fuck.key)
})
