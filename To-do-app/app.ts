let form = document.querySelector('#form') as HTMLFormElement;
let input = document.querySelector('#input') as HTMLInputElement;
let ul: any = document.querySelector('#ul');
let array: (string | number)[] = [];


form.addEventListener('submit', event => {
    event.preventDefault()
    ul.innerHTML = ``
    console.log(input.value);
    array.push(input.value)
    console.log(array);
    array.map((item: (string | number)) => {
        ul.innerHTML += `<li>${item}</li>`
    })

});