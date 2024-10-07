/*
Očkování – objekty
Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/

const jmeno = prompt("Jaké je vaše jméno?");
const vek = Number(prompt("Věk:"));

const person = {
  jmeno,
  vek,
};

document.body.innerHTML +=
  "<p>" + person.jmeno + ", věk: " + person.vek + "</p>";
