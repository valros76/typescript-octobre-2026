/**
 * 
 *  Créez deux fonctions utilitaires : 
 * 
 * La première fonction aura pour rôle de calculer une surface effective : 
 * - Un rectangle
 * - Un hexagone (3 * Math.sqrt(3) / 2) * Math.pow(cote, 2)
 * 
 */

interface RectI {
  longueur: number;
  largeur: number;
}

interface HexagoneI {
  cotes: number;
}

interface CarreI {
  tranche: number;
}

type FormesT = RectI | HexagoneI | CarreI;

function calcSurface(element: FormesT): number {

  if ("cotes" in element) return Number(((3 * Math.sqrt(3) / 2) * Math.pow(element.cotes, 2)).toFixed(2));

  if ("tranche" in element) return element.tranche * element.tranche;

  return element.longueur * element.largeur;
}

const monRect = {
  longueur: 2,
  largeur: 4
};
const monCarre = {
  tranche: 6
};
const monHexa = {
  cotes: 5
};

console.log(calcSurface(monRect));
console.log(calcSurface(monCarre));
console.log(calcSurface(monHexa));


// La deuxième fonction devra être une méthode d'objet, qui devra avoir un retour obligatoire d'une chaîne de caractère précise : 
//  - Votre objet sera une voiture
//  - Sa méthode doit permettre à la voiture de signaler une alerte sonore dans la console.
//  - Cette alerte peut prendre plusieurs formes différentes, mais sous un seul type de donnée en entrée

type KlaxonT = NoInfer<"TutTut" | "CoinCoin">;

interface CarI {
  brand: string;
  model: string;
  klaxon(alert: KlaxonT): KlaxonT;
}

const car: CarI = {
  brand: "Hyundai",
  model: "Santa Fe 2.2 CRDi",
  klaxon: (alert) => {
    return alert;
  }
}

console.log(car.klaxon("TutTut"));
console.log(car.klaxon("CoinCoin"));
console.log(car.klaxon("BipBip"));