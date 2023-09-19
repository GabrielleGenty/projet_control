//exe 1&2
var nom ="Genty"
var prénom ="Darine"
console.log(nom,prénom)
//exe 3&4&5
var age = 42
var ageplus = 5
console.log(age)
console.log(age+ageplus)
//exe 6
var prixlivre = 15
var nomlivre = 10
var total = prixlivre * nomlivre
console.log(prixlivre*nomlivre)
console.log(total)
//exe 7&8&9
var fruits = ['pomme', 'cerise', 'panane'];
console.log(fruits);
console.log(fruits[0])

//exe 10
let fruits =['pomme','banane','fraise','orange','cerise']
console.log(fruits.length)

//exe11
var estetudiant = (true)
console.log(estetudiant)

//exe13&14
var colors ={ciel: "bleu",feu: "rouge",foret: "vert"}
console.log({colors})
console.log(colors.ciel)

//exe 15
var colors ={ciel: "bleu",feu: "rouge",foret: "vert"}
console.log({colors})
console.log(colors.ciel)
console.log(colors.feu="orange")
console.log({colors})

//exe 16
var animal ="Chien";
var lieu = "foret";
var colors ="noir";
resultat = "Le " + animal +" "+ colors +" est dans le " +lieu ;
console.log(resultat)

//exe 17
var age = 22;
console.log(typeof(age));
var nom ="Genty"
console.log(typeof(nom));
var color ="noir"
console.log(typeof(color));
var bolean =true ;
console.log(typeof(bolean));

//exe 18 
var prixarticle = 25;
var remise = 20;
console.log(prixarticle*(1-remise/100));

//exe 19
var animal ="chien";
var nom ="fox";
var age = 3;
var color ="blan ";
var lieu ="foret"
console.log("mon " +animal+ " son nom " + nom +" il a l'age " +age+ " est perdu dans " + lieu+ " son color est " +color);

//exe 20
var jour = "Mardi";
console.log(" Bon " + jour + " si le jour est " + jour);

//exe 21
//con
const text = 'je suis tres belle femme';
const words =text.split(' ');
console.log(words);
//var
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ");
console.log(splits);

//exe 23
const list = ["mon", "chien","est","noir","je","l'aime","becoup"];
console.log(list.join(' '))

//exe 24
fruits = ['banane', 'pomme','orange', 'cerise', 'fraise','raisins'];
console.log(Object.keys(fruits));
console.log(fruits.length); 
console.log(fruits[0],fruits[1],fruits[4],fruits[5]);

//exe 25
const array = [1, 2, 3, 4,12,5,10,3];
let sum = 0;

console.log(array.length)

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
var result = console.log(sum);

//exe 26
var liste = ["jours",15, true];
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(typeof(list));

//exe 28
var fruits = ['banane', 'pomme','orange', 'cerise', 'reaise','climantine'];
console.log("fruits avant : " + JSON.stringify(fruits));
var premierÉlément = fruits.shift();
console.log("fruits après :", fruits);
console.log("Cet élément a été enlevé :", premierÉlément);

//exe 29
var aleatoire = Math.random();
console.log (Math.sqrt(aleatoire));

//exe 30
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));








