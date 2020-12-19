var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

var newarray = [];
for (var i = 0; i  mix.length; i++){
    newarray.push(typeof([i]));
}

console.log(newarray);

//-------------------------No Resuelto -------------------------

for(let index = 0; index < myArray.length; index++){
    let item = myArray[index];
    console.log(typeof(item))