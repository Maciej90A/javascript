//12
// let var1 = 1;
// let var2 = 1;
// if (var1 == var2) {
//     console.log('var1 == var2');
// }
// if (va1 === var2) {
//     conlse.log('var1 === va2');
// }
//
// var1 = 1;
// var1 = '1'
// if (var1 == var2) {
//     console.log('var1 == var2');
// }
// if (var1 === var2) {
//     conlse.log('var1 === va2');
// } else {
//     console.log('var1 !== var2');
// }

//13
// function alertFunction(){
//     alert("Test");
// }

//15
// function swap() {
//     let barFoo = document.getElementById("foobar");
//     if (barFoo.innerHTML === "Foo bar!") {
//         barFoo.innerHTML = "Bar foo!";
//     } else {
//         barFoo.innerHTML = "Foo bar!";
//     }
// }

// 16
// function validateForm() {
//     let formElement = document.forms['contactForm']['firstname'].value;
//     if (formElement === '') {
//         alert('Name must be filled out.');
//         return false;
//     }
// }

// 17
// function validateForm(formName) {
//     let form = document.forms[formName];
//     for (let formElement of form) {
//         if (formElement.tagName.toLowerCase() === 'input') {
//             if (formElement.value === '') {
//                 alert(formElement.parentElement.innerText + 'Name must be filled out.');
//                 return false;
//             }
//         }
//     }
// }

// 18
function validateForm(formName) {
    let isValid = true;
    let form = document.forms[formName];
    for (let formElement of form) {
        if (formElement.tagName.toLowerCase() === 'input') {
            if (formElement.value === '') {
                notify(formElement);
                isValid = false;
            } else {
                formElement.style = "";
            }
        }
    }
    return isValid;
}

function notify(formElement) {
    formElement.style = 'background-color: #ffb3b3; border-color: red';
    alert(formElement.parentElement.innerText + ' ' + 'musi zostać wypełnione')
}