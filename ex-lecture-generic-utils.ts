interface Utilisateur {
  nom: string;
  age: number;
  date: string;
}

interface UserAffinedI extends Pick<Utilisateur, "age">{}
//type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// T => générique donc ici, Utilisateur
// K => clé, ici une propriété

// K extends keyof T => les clés récupérés correspondent aux propriétés d'Utilisateur
// [P in K]: T[P] => récupération du nom de la propriété, dans notre objet Utilisateur

// [P in K] => par exemple : nom in this.
// T[P] => par exemple : Utilisateur[nom]
