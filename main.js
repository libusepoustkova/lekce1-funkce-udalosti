// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(4, 5);

let ctverecek = document.querySelector(".ctverecek")

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}


/**
 * Obarvi na zelenou.
*/
function obarvi() {
  ctverecek.style.backgroundColor = 'green';
}