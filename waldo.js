function findWaldo(arr, found) {
  arr.forEach(found);
}

function actionWhenFound(name, index) {
  if ( name == "Waldo") {
    console.log(name , index);
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);