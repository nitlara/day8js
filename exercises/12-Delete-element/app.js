var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(z)
 {var eliminats = [];
 eliminats = people.splice(people.indexOf(z), 1);
 return eliminats;
console.log(eliminats)}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

