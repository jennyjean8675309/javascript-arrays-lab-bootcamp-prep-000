// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
   return kittens.concat(name);
}

function prependKitten(name){
  return [name].concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}



