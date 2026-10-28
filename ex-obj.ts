/**
 * Intégrer un faux payload de réponse d'API au format JSON dans un script TypeScript.
Typer ce payload à l'aide d'une interface sur-mesure.
Écrire une petite fonction de vérification qui lit les propriétés de cet objet JSON pour valider un scénario de test.
 */

type genderT = "male" | "female";
type statusT = "alive" | "dead" | "unknown";
type speciesT = "human" | "mutant" | "robot" | "martian" | "decapodian" | "omicronian" | "amphibiosans";


interface SpeciesI{
  [id: number]: string
}


const species = [
  "human",
  "mutant",
  "robot",
  "martian",
  "decapodian",
  "omicronian",
  "amphibiosans"
] as const;

type SpeciesUnionT = Lowercase<typeof species[number]>;
// Type équivalent à : "human" | "mutant" | "robot" | "martian" | "decapodian" | "omicronian" | "amphibiosans"

interface PayloadI{
  id: number;
  name: string;
  gender: string; // À personnaliser
  status: string; // À personnaliser
  species: string; // À personnaliser
  createdAt: string;
  image: string;
}


function enregistrerLog(message: string, niveau: number, optionnel?: boolean) {}

type ParamsT = Parameters<typeof enregistrerLog>;
// Résultat : [message: string, niveau: number, optionnel?: boolean | undefined]