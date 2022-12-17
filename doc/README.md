# Proposition technique pour la réalisation du projet

# Introduction

Afin de mettre en oeuvre la réalisation de ce projet, mon équipe à réaliser<br>
des comparatifs sur différentes technologies afin d'évaluer lesquelles seraient<br>
les plus adaptées à la réalisation de ce projet.<br>

Ce présent document fait office de proposition technique quant à la réalisation<br>
des différentes propositions préalablement explicitées.<br>

# Identification des technologies 

| Technologies | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| NodeJS       | NodeJS est un environnement d'exécution JavaScript permettant de réaliser applications Web côté Serveur             |
| NestJS       | NestJS est un Framework Back-End qui permet de créer des applications Web robustes et facilement maintenables       |
| Angular      | Angular est un Framework Front-End qui permet de créer des applications Web dynamiques et performantes              |
| PostgreSQL   | PostgreSQL est un système de gestion de base de données relationnelles de haute performance Open Source et évolutif |
| TypeORM      | TypeORM est un ORM Open Source permettant d'intéragir avec les bases de données de façon simple et sécurisée        |

# Choix du langage

Le choix de TypeScript plutôt que JavaScript a été motivé par plusieurs facteurs. <br>

Tout d'abord, TypeScript est un langage de programmation open-source qui est une extension de JavaScript,<br>
ajoutant la vérification de type statique au code.<br>

Cela permet de détecter les erreurs de type à la compilation, ce qui peut être plus efficace qu'à l'exécution.<br>
En plus de la vérification de type, TypeScript ajoute également un support de la programmation orientée objet au JavaScript,<br>
ce qui permet d'utiliser des concepts tels que les classes, les interfaces et les types génériques pour structurer le code de manière plus claire et plus évolutive.<br>

TypeScript est également connu pour sa meilleure documentation, grâce à la possibilité de définir les types de chaque variable et fonction dans le code. <br>
Cela rend la documentation plus complète et facilite la compréhension du code par d'autres développeurs.<br>
Enfin, TypeScript est compatible avec de nombreux outils et frameworks populaires pour le développement JavaScript,<br>
tels que Angular, React et Vue.js, ce qui le rend facile à intégrer dans une stack de développement existante.<br>

En résumé, TypeScript est un langage de programmation polyvalent et performant qui ajoute la vérification de type statique,<br> 
un support de la programmation orientée objet et une meilleure documentation au JavaScript,<br>
ce qui peut rendre le développement plus fiable et plus facile à maintenir.<br>

# Raisons de l'utilisation de Node.js en tant qu'environnement d'exécution

Nous avons choisi Node.js comme environnement d'exécution pour plusieurs raisons :<br>

- **Facilité de création d'applications Web** : Node.js dispose d'une large gamme<br>
de frameworks pour le développement de back-end et de front-end,<br> 
ce qui rend la création d'applications Web très facile.

- **Environnement complet et puissant** : Node.js est un environnement complet et puissant,<br> 
avec une large communauté de développeurs.<br> 
Cela permet d'avoir accès à de nombreuses ressources et à une documentation fournie.

- **Développement de bots Discord** : Dans le cadre de ce projet, nous souhaitons<br>
développer des bots Discord. Discord étant lui-même développé avec Node.js, il semble<br>
plus intéressant de développer nos bots avec le même environnement.<br>
De plus, Node.js offre une grande flexibilité et des performances élevées, <br>
ainsi qu'un large choix d'outils pour faciliter la communication entre les bots et Discord.<br>

- **Utilisation d'un seul environnement** : Enfin, en choisissant Node.js comme<br>
environnement d'exécution, nous pouvons développer à la fois des bots Discord et une<br>
interface Web de configuration de ces bots et de consultation de données sur le serveur communautaire,<br>
tout en utilisant un seul et même environnement.<br>

Node.js a donc été choisi en tant qu'environnement d'exécution pour ce projet en raison de sa facilité de mise en place,<br> 
de sa flexibilité, de ses hautes performances, de sa large communauté et de la disponibilité d'outils pour la communication avec Discord.<br> 
De plus, en choisissant Node.js, nous pouvons développer tous les aspects de ce projet dans un seul et même environnement.<br>

# Raisons de l'utilisation de Angular en tant que framework Front-End

Nous avons décidé d'utiliser Angular comme framework Front-End car c'est un outil très puissant<br> 
qui repose sur une architecture MVC (Modèle-Vue-Contrôleur) solide.<br> 
Cette architecture permet de séparer efficacement les données, la logique et la présentation de l'application.

De plus, Angular propose des bindings bidirectionnels, ce qui est intéressant dans le cadre de ce projet en ce qui concerne la visualisation de données.<br>
En effet, grâce à ce système, il est possible de synchroniser en temps réel des changements de données.<br>

Angular propose également un système de composants réutilisables,<br>
ce qui signifie que des composants peuvent être utilisés dans certaines interfaces et réutilisés dans d'autres sans avoir à les redévelopper.<br>

En outre, Angular a une structure de fichiers claire et organisée, ce qui peut rendre la maintenance de l'application plus facile pour d'autres développeurs,<br> 
et donc assurer une meilleure maintenabilité de l'application.

Angular a également une grande communauté de développeurs, ce qui peut être une source précieuse d'aide et de soutien pendant le développement de cette application.<br>

En résumé, nous proposons donc d'utiliser Angular comme framework Front-End pour tous ces avantages.<br>