console.log("hello world!!!");

// Equality	of	three	values
function equal(a, b, c) {
    if (a == b && b == c) {
        false
    }
    else true
}
console.log(equal(1, 1, 2))
//convert Minutes to seconds
console.log(equal(30, 3, 2))
function MinutesConvert(min) {
    return min * 60
}
//Equality of three values
function equal(a, b, c) {
    if (a == b && b == c) { return true }
    else {
        return false
    }
}
//console.log(nextInt(1)) // football points
function fonctionMatch(a, b, c) {

}

// array , tableaux 
// 1. Creer un tableau vid
let emptyArray = [2];
// 2. Creer un tableau aves des valeurs
let array = [2, 3, 4, 5];
// 3. Acceder a un elemnt du tableu 
let firstElement = array[2];
console.log(array);
array.push("samedi")
console.log(array)
// 6. Supprimer un element a la fin du tableau 
array.pop(2, 3);
console.log(array);
// 7 . Ajouter un element au debut du tableau
array.unshift("samedi")
console.log(array);
// 8 . Supprimer un element au debut du tableau
array.shift();
console.log(array);
// 9 . Supprimer un element a une position donnee
array.splice(3, 2)
console.log(array);
// 10 . Ajouter un element a une potion donee
array.splice(2, 0["mercredi", "jeudi"]);
// JavaScript variables

// array
let selectedColors = ["red", "bleu"]
console.log(selectedColors[0]);

let pizzafood = {
    name: 'pizza',
    price: 150,
    discount: 15
}
delete pizzafood.discount;
console.log(pizzafood.name);
console.log(pizzafood.discount);
console.log(pizzafood.price);
// declare un tableau
let array5 = [1, 2, 3, , 4, , 5, 6, 7]
function sumArray(array) {
    // declarer une variable qui va stocker la some
    let sum = 0;
    // Parcourir le tabluau
    for (let i = 0; i < array.length; i++) {
        // ajouter chaque element au total 
        sum += array[i];
        console.log(array[i])
        //sum = sum + array [i];
    }
    // retourner le total
    return sum;
}
console.log(sumArray(array5));
// boucle while 
let i = 0;[1,2,3]
while (i <  panier.length){
    // sum += panier[i];
    i++;
}
// retourner le total
return sum ;
// boucler do while
do {
    sum += panier[i];
    i++;
} while ( i < pannier.length);