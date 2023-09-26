let forNavn = 'Lars';
let efterNavn = 'Karlsen';
let spacer = ' ';

let FullName = forNavn + spacer + efterNavn;

console.info(FullName);
let myGreeting = 'Velkommen'
let myMessage = myGreeting.concat(spacer,FullName )

console.info(myMessage);

let postNummer = '9000';
let By = 'Aalborg';

let adresse = postNummer + spacer + By;
console.info('adressen er: '+ adresse)

let ferieDestination = 'Paris';
let feriePlan = 'Jeg planlægger at tage til'.concat(spacer, ferieDestination, spacer, 'i næste uge.');
console.info(feriePlan);

let produktNavn = 'PlayStation 5';
let produktPris = '3.000 DKK';
let minProdukt = 'Det valgte produkt er'.concat(spacer,produktNavn, spacer, 'og det koster', spacer, produktPris);
console.info(minProdukt);