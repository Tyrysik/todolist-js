let input = document.querySelector('#textPost');
let button = document.querySelector('.btn');
let output = document.querySelector('#posts');

function createElement(text){
  let newElement = document.createElement('li');
  newElement.className = 'block_list_li';
  newElement.textContent = text;

  let DeleteSpan = document.createElement('span');
  DeleteSpan.className = "deleted_span"
  DeleteSpan.textContent = "deleted"
  DeleteSpan.addEventListener("click", function(){
    output.removeChild(newElement);
  })

  output.appendChild(newElement);
}


button.addEventListener("click", function(e){
  e.preventDefault();
  if(!(input.value === "")){
    createElement(input.value);
    input.value = "";
    console.log(input.value)
  }
})