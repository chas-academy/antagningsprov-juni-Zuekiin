function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const person = [
    { name: "Lotta", age: 30 },
    { name: "Kim", age: 16 },
    { name: "Agneta", age: 23 },
    { name: "Jens", age: 56 },
    { name: "Ola", age: 29 },
  ];

  function dirtyThirty(array) {
    for (let names of array) {
      if (names.age >= 30) {
        console.log(names.name);
      }
    }
  }

  dirtyThirty(person);
}

module.exports = { uppg8 };
