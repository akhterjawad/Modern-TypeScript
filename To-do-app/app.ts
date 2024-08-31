let form = document.querySelector('#form') as HTMLFormElement;
let input = document.querySelector('#input') as HTMLInputElement;
let ul = document.querySelector('#ul');
let array: string[] = []; // sirf string type ka array


// input.value hamesha ek string hota hai, kyunke HTMLInputElement.value ka type string hota hai.


form.addEventListener('submit', event => {
    event.preventDefault();
    if (ul) {
        ul.innerHTML = ``;
    }
    console.log(input.value);
    array.push(input.value); // input.value is a string, so array should be string[]
    console.log(array);
    if (ul) {
        array.map((item: string) => { // array contains strings, so item is string
            ul.innerHTML += `<li>${item}</li>`;
        });
    }
});
