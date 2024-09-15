var form = document.querySelector('#form');
var input = document.querySelector('#input');
var ul = document.querySelector('#ul');
var array = []; // sirf string type ka array
// input.value hamesha ek string hota hai, kyunke HTMLInputElement.value ka type string hota hai.
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (ul) {
        ul.innerHTML = "";
    }
    console.log(input.value);
    array.push(input.value); // input.value is a string, so array should be string[]
    console.log(array);
    if (ul) {
        array.map(function (item) {
            ul.innerHTML += "<li>".concat(item, "</li>");
        });
    }
});
