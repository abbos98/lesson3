//////////////////////////////////////////////
//  toq sonlani topish //

for (let i = 1; i<=10; i++) {
    if (i % 2 === 0) {
        console.log(i,'juft son');
    } else {
        console.log(i,'Toq son');
    }
}

// Sozlani teshkarib qilib berish //
let str = "abbos";
for (let i = str.length -1; i>=0; i -- ){
    console.log(str[i]);
}

//////////////////////////////////////////////////////
// kichkina harflarni topisb berish //
let str = 'abbosabbos';
let result = "";

for (let i = 0; i <str.length; i++){
    if (str[i] === 'b') {
        result = result + str[i];
    }
}
console.log(result);



let str = 'abbosabbos';
let result = 0;
for (let i = 0; i < str.length; i++){
    if (str[i] === 'b'){
        result++
    }
}
console.log(result);

///////////////////////////////////////////////
// harflarni topish //
let str = "ABboSaBboS"

let result = 0;

for (let i = 0; i <str.length; i++){
    if(str[i] === 'b' || str[i] === 'B'){
        result++
    }
}
console.log('a-',result);

////////////////////////////////////////////////
// kotta harflar //
let str = 'AbboSAbboS';
let result = "";

for (let i = 0; i < str.length; i++){
    if ( str[i] === str[i].toUpperCase()) {
        result += str[i]
    }
}

console.log(result);





