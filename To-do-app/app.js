var form = document.querySelector('#form');
var input = document.querySelector('#input');
var ul = document.querySelector('#ul');
var array = [];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    ul.innerHTML = "";
    console.log(input.value);
    array.push(input.value);
    console.log(array);
    array.map(function (item) {
        ul.innerHTML += "<li>".concat(item, "</li>");
    });
});
