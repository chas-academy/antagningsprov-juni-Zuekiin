function uppg7() {
  // skapa en funktion som tar in två tal som argument
  // funktionen ska returnera summan av talen
  // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
  function sumNum(x, y) {
    let sum = x + y;
    return sum;
  }

  return sumNum(5, 10);
}

module.exports = { uppg7 };
