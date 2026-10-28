interface ArticleI{
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface ArticleStockPriceI extends Omit<ArticleI, "name" | "description">{}

//type Omit<T, K extends keyof any> = { [P in Exclude<keyof T, K>]: T[P]; }

/**
 * ||| Définition des paramètres génériques |||
 * T => Le type source complet (ici : ArticleI).
 * K => La ou les clés à supprimer (ici : "name" | "description").
 * 
 * ||| K extends keyof any |||
 * keyof any correspond à l'union (string | number | symbol).
 * Cette contrainte permet d'accepter n'importe quel nom de propriété valide,
 * même si K contient une clé qui n'existe pas explicitement dans T.
 * 
 * ||| Exclude<keyof T, K> |||
 * keyof T regroupe toutes les clés de ArticleI :
 *   -> "id" | "name" | "description" | "price" | "quantity"
 * 
 * Exclude compare cette union avec K ("name" | "description") et retire les doublons :
 *   -> Exclude<"id" | "name" | "description" | "price" | "quantity", "name" | "description">
 *   -> Résultat : "id" | "price" | "quantity"
 * 
 * ||| Mapped Type : [P in Exclude<keyof T, K>] |||
 * Boucle sur chacune des clés conservées après le filtre Exclude.
 *   -> 1ère itération : P = "id"
 *   -> 2ème itération : P = "price"
 *   -> 3ème itération : P = "quantity"
 * 
 * ||| INDEX ACCESS TYPE : T[P] |||
 * Récupère le type d'origine associé à chaque clé conservée dans ArticleI :
 *   -> ArticleI["id"]       => number
 *   -> ArticleI["price"]    => number
 *   -> ArticleI["quantity"] => number
 * 
 * ||| Résultat final (ArticleStockPriceI) |||
 * Le type construit équivaut exactement à :
 * {
 *   id: number;
 *   price: number;
 *   quantity: number;
 * }
 */