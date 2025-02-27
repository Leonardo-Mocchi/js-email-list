// CONSEGNA
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// BONUS:
// 1- Abbellire con CSS o Bootstrap
// 2- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// get the DOM nodes

const randMailEl = document.querySelectorAll(".random_mail")
console.log(randMailEl);

for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            //log the data to see what we have
            console.log(data.response);

            //extract the player & computer dice value with destructuring
            const thisRandMailGenerated = data.response;
            console.log(thisRandMailGenerated);


            const randMailNode = document.createElement("p")
            randMailNode.innerText = thisRandMailGenerated

            console.log(randMailNode);


            randMailEl[i].appendChild(randMailNode)
        })

}
