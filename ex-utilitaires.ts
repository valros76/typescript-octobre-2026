interface Article {
  id: string;
  titre: string;
  contenu: string;
  publie: boolean;
  dateCreation: Date;
}


/**
 * - Créez un type ArticleFormulaire pour le formulaire de création d'un article (sans id ni dateCreation).
   - Créez un type MiseAJourArticle permettant la modification partielle d'un article existant, tout en conservant l'obligation de fournir son id.
 */

type ArticleFormulaireT = Omit<Article, "id" | "dateCreation">;

type MiseAJourArticleT = Partial<Omit<Article, "id">> & Pick<Article, "id">;

const articleForm: ArticleFormulaireT = {
  titre: "20000 lieux sous les mers",
  contenu: "L'année 1866 fut marquée par un événement bizarre, un phénomène inexpliqué et inexplicable que personne n'a sans doute oublié.",
  publie: false
};

const updateArticleForm: MiseAJourArticleT = {
  id: "udhx-phko-opjl-oluk",
  publie: true
};