// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(fuck, hello){
  console.log(fuck.key)
  console.log(hello.key);
})
