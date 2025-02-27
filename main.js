// CONSEGNA
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// BONUS:
// 1- Abbellire con CSS o Bootstrap
// 2- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// get the DOM nodes

const randMailEl = document.querySelectorAll(".random_mail")
console.log(randMailEl);

const randPerson = document.querySelectorAll(".random_person")
console.log(randPerson);



// loop for as many items as the class appears in the HTML
for (let i = 0; i < randMailEl.length; i++) {

    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            // log the data to see what we have
            console.log("Random email:", data.response);

            // extract the mail value saving it in a variable
            const thisRandMailGenerated = data.response;
            console.log(thisRandMailGenerated);

            // create a variable that adds a <p> HTML element inside
            const randMailNode = document.createElement("p")
            // make the new paragraph display the generated file
            randMailNode.innerText = thisRandMailGenerated;
            // fix the margins of the new element
            randMailNode.classList.add('m-0');

            console.log(randMailNode);

            // officially insert the above variable inside every i° element of the HTML
            randMailEl[i].appendChild(randMailNode);
        })

    fetch("https://flynn.boolean.careers/exercises/api/random/name")
        .then(response => response.json())
        .then(data => {
            // log the data to see what we have
            console.log("Random Person name:", data.response);

            // extract the mail value saving it in a variable
            const thisDude = data.response;
            console.log(thisDude);

            // create a variable that adds a <p> HTML element inside
            const randDudeNode = document.createElement("p")
            // make the new paragraph display the generated file
            randDudeNode.innerText = thisDude;
            // fix the margins of the new element
            randDudeNode.classList.add('m-0');

            console.log(randDudeNode);

            // officially insert the above variable inside every i° element of the HTML
            randPerson[i].appendChild(randDudeNode);
        })
}