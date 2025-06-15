function uppg9() {
  // skapa en funktion som heter sort och tar in en array av siffror som argument
  // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
  // i if-sattsen skriv ut i konsolen resultatet
  // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

  // anropa funktionen och skicka med en array som argument
  const numbers = [2, 3, 7, 5, 9, 8, 0, 3, 4];

  function sort(array) {
    for (let num of array) {
      if (num % 2 === 0) {
        console.log(num, "jämt");
      } else {
        console.log(num, "udda");
      }
    }
  }

  sort(numbers);
}

module.exports = { uppg9 };
