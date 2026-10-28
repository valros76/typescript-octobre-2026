/**
 * Créez un tableau de données.
 * Ce tableau devra contenir uniquement des ressources interfacées ou typées.
 * Mettre en place une itération sur chaque élément de tableau pour vérifier son type réel [ console.log(typeof data) ].
 */

/**
 * Créez un tableau de données.
 * Ce tableau devra contenir uniquement des ressources interfacées ou typées.
 * Mettre en place une itération sur chaque élément de tableau pour vérifier son type réel [ console.log(typeof data) ].
 */


// Interface ou type custom

/**
 * UTILISATION DU GÉNÉRIQUE <T> :
<T> est une "variable de type" (un paramètre). 
Elle permet de rendre la réponse réutilisable pour n'importe quelle donnée (User, Product, Order, etc.).
Quand on écrit RestResponse<User[]>, T devient automatiquement le type User[].
 */

type RestResponse<T, S> =
  | {
    success: true;
    status: S;
    // Ici, T prend le type exact de la donnée injectée (ex: User[])
    data: T;
  }
  | {
    success: false;
    status: 400 | 401 | 403 | 404 | 500;
    error: string;
    details?: Record<string, string[]>;
  };


/**
 * UTILISATION DE RECORD<K, V> :
Record<Clé, Valeur> sert à typer un objet dont on ne connaît pas à l'avance le nom des clés.
- Record<string, string[]> signifie :
"C'est un objet où chaque clé est une chaîne (ex: 'email', 'password')
 et chaque valeur est un tableau de chaînes (ex: ['Format invalide', 'Requis'])".
 */

/**
 * Exemple d'utilisation du Record<>
 * const errors: Record<string, string[]> = {
    email: ["Format incorrect", "Déjà utilisé"], // Clé = string, Valeur = string[]
    password: ["Trop court"]                    // Clé = string, Valeur = string[]
  };
 */

interface User {
  id: number;
  name: string;
}

type successStatusT = 200 | 201;
// Tableau - Inclusion d'une User[] dans le paramètre data correspondant à un retour de payload API
const response: RestResponse<User[], successStatusT> = {
  success: true,
  status: 200,
  data: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]
};


// Boucle itérative effectuant un console.log() permettant d'afficher dans la console le type de la donnée itérée actuellement
if (response.success) {
  response.data.forEach((user) => {
    console.log(user.name, "-> typeof:", typeof user);
  });
}

