// tady je místo pro náš program

let ctverecek = document.querySelector(".ctverecek")
let vysledek = document.querySelector("#vysledek")
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
  ctverecek.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  ctverecek.style.lineHeight = "30px";
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  alert("Gratulace, právě jsi spustila tuto funkci!");
}


/**
* Obarvi na zelenou.
* 
* @param {string} element 
*/
function obarvi(element) {
  document.querySelector(element).style.backgroundColor = 'green';
}

/**
* Zobraz vysledek.
*/
function zobraz_vysledek() {  
  vysledek.innerHTML = secti(4, 5);
}