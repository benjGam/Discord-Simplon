# Proposition technique pour la réalisation du projet

# Introduction

Afin de déterminer les technologies les plus adaptées à la réalisation de notre projet,<br>
notre équipe a mené une analyse comparative de différentes options.<br>

Suite à cette évaluation, nous avons établi ce document de proposition technique détaillant les différentes approches proposées<br>
pour la mise en œuvre du projet.<br>

Ce document vise à présenter de manière claire et concise les choix technologiques retenus et les raisons de ces choix.<br>

# Identification des technologies 

| Technologies | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| NodeJS       | NodeJS est un environnement d'exécution JavaScript permettant de réaliser des applications Web côté Serveur         |
| NestJS       | NestJS est un Framework Back-End qui permet de créer des applications Web robustes et facilement maintenables       |
| Angular      | Angular est un Framework Front-End qui permet de créer des applications Web dynamiques et performantes              |
| PostgreSQL   | PostgreSQL est un système de gestion de base de données relationnelles de haute performance Open Source et évolutif |
| TypeORM      | TypeORM est un ORM Open Source permettant d'intéragir avec les bases de données de façon simple et sécurisée        |

# Proposition d'une API

Lors de nos réfléxions, la question de l'architecture API ou Monolithique s'est posée.<br>

Nous proposons d'utiliser une API car l'architecture d'une API est bien plus modulaire<br>
qu'une architecture monolithique, ce qui permet par exemple à d'autres développeurs<br>
d'utiliser notre application afin d'ajouter des fonctionnalités et d'être capable de créer<br>
de nouveaux outils à partir de notre de application.<br>

Cela permettra d'apporter une évolutivité du projet dans son ensemble en permettant l'agrégation<br>
de nouveaux outils sans besoin de retravailler l'architecture de l'application préalablement<br>
en plus de permettre l'utilisation de l'API en tant que source d'informations.<br>

# Proposition de langage

La proposition de TypeScript plutôt que JavaScript a été motivé par plusieurs facteurs. <br>

Tout d'abord, TypeScript est un langage de programmation open-source qui est une extension de JavaScript,<br>
ajoutant la vérification de type statique au code, ce qui rends le debogage d'une application plus efficient.<br>

En plus de la vérification de type, TypeScript ajoute également un support de la programmation orientée objet au JavaScript,<br>
ce qui permet d'utiliser des concepts tels que les classes, les interfaces et les types génériques pour structurer le code de manière plus claire et plus évolutive.<br>

TypeScript est également connu pour sa meilleure documentation, grâce à la possibilité de définir les types de chaque variable et fonction dans le code. <br>
Cela rend la documentation plus complète et facilite la compréhension du code par d'autres développeurs,<br>
de ce fait, la maintenabilité et la lisibilité du code sont assurées de façon plus efficace.<br>

Enfin, TypeScript est compatible avec de nombreux outils et frameworks populaires pour le développement JavaScript, <br>
ce qui consistue un atout dans le cadre d'utilisation d'Angular par exemple.<br>

En résumé, TypeScript est un langage de programmation polyvalent et performant qui ajoute certains concepts<br> 
et une meilleure documentation au JavaScript, ce qui peut rendre le développement plus fiable et plus facile à maintenir.<br>

C'est pourquoi, notre proposition de langage s'est portée sur TypeScript plutôt que JavaScript.<br>

# Raisons de l'utilisation de Node.js en tant qu'environnement d'exécution

Nous proposons Node.js comme environnement d'exécution pour plusieurs raisons :<br>

- **Facilité de création d'applications Web** : Node.js dispose d'une large gamme<br>
de frameworks pour le développement back-end et front-end,<br> 
ce qui rend la création d'applications Web très facile.

- **Environnement complet et puissant** : Node.js est un environnement complet et puissant,<br> 
avec une large communauté de développeurs.<br> 
Cela permet d'avoir accès à de nombreuses ressources et à une documentation fournie.

- **Développement de bots Discord** : Dans le cadre de ce projet, nous souhaitons<br>
développer des bots Discord.<br>
Node.js offre une grande flexibilité et des performances élevées, <br>
ainsi qu'un large choix d'outils pour faciliter la communication entre les bots et Discord.<br>

- **Utilisation d'un seul environnement** : Enfin, en choisissant Node.js comme<br>
environnement d'exécution, nous pouvons développer à la fois des bots Discord et une<br>
interface Web de configuration de ces bots et de consultation de données sur le serveur communautaire,<br>
tout en utilisant un seul et même environnement.<br>

Node.js a donc été retenu en tant qu'environnement d'exécution pour ce projet en raison de sa facilité de mise en place,<br> 
de sa flexibilité, de ses hautes performances, de sa large communauté et de la disponibilité d'outils pour la communication avec Discord.<br> 
De plus, en choisissant Node.js, nous pouvons développer tous les aspects de ce projet dans un seul et même environnement.<br>

# Raisons de l'utilisation d'Angular en tant que framework Front-End

Nous proposons d'utiliser **Angular** comme framework Front-End car c'est un outil très<br> 
puissant qui repose sur une architecture **MVC (Modèle-Vue-Contrôleur)** solide.<br>
Cette architecture permet de séparer efficacement les données, la logique et la présentation de l'application.<br>

De plus, Angular propose des **bindings bidirectionnels**, ce qui est intéressant dans le cadre<br>
de ce projet en ce qui concerne la visualisation de données. <br>
En effet, grâce à ce système, il est possible de synchroniser en temps réel des changements de données.<br>

Angular propose également un système de **composants réutilisables**, ce qui signifie que des<br> 
composants peuvent être utilisés dans certaines interfaces et réutilisés dans d'autres<br>
sans avoir à les redévelopper.<br>

En outre, Angular a une **structure de fichiers claire et organisée**, ce qui peut rendre la<br>
maintenance de l'application plus facile pour d'autres développeurs, et donc assurer une<br>
meilleure maintenabilité de l'application.<br>

Angular a également une grande **communauté de développeurs**, ce qui peut être une<br>
source précieuse d'aide et de soutien pendant le développement de cette application.<br>

En résumé, nous proposons donc d'utiliser Angular comme framework Front-End pour tous ces avantages.

# Raisons de l'utilisation de PostgreSQL en tant que SGBD

Nous proposons d'utiliser **PostgreSQL** comme système de gestion de base de données (SGBD) pour notre projet en raison de sa :

- **Fiabilité** : PostgreSQL a fait ses preuves en étant utilisé dans de nombreux projets à succès tel qu'Instagram par exemple.

- **Performance** : PostgreSQL est capable de traiter efficacement de grandes quantités de données.
Ce qui dans le cadre de notre projet semble être intéressant en raison du nombre de données que nous<br>
seront amenés à stocker sur le long terme.

- **Aide de la communauté** : La communauté active autour de PostgreSQL fournit un soutien précieux pour résoudre les problèmes qui peuvent survenir
lors de l'utilisation de PostgreSQL.<br>

- **Nature open source** : PostgreSQL nous donne la liberté de modifier les bases de données selon nos besoins.

Nous pensons que l'utilisation de PostgreSQL est la meilleure option pour assurer la persistance des données de notre application.

# Raisons de l'utilisation de TypeORM

Nous proposons d'utiliser **TypeORM** en tant qu'ORM afin de sécuriser les<br> 
interactions entre l'application et les bases de données.<br>
Voici quelques raisons pour lesquelles **TypeORM** peut être un choix judicieux :<br>

- **TypeORM** est un ORM entièrement conçu en **TypeScript**, ce qui correspond à nos besoins en termes de langage.<br>
Il dispose d'une large communauté de développeurs et d'une documentation détaillée,<br>
ce qui peut apporter un nombre conséquent de ressources en termes de résolution de problèmes éventuels<br>
pouvant survenir lors du développement, ainsi que de nombreuses solutions pour le développement des fonctionnalités<br> 
dont nous aurons besoin.
- **TypeORM** est un ORM **open source**, ce qui est intéressant en termes de<br>
liberté quant à l'utilisation et la manipulation de ce dernier.
- **TypeORM** est performant et est utilisé par un grand nombre de développeurs<br>
en raison de sa flexibilité. Il prend en charge de nombreux SGBD, dont **PostgreSQL**.
- **TypeORM** gère automatiquement les schémas de base de données en termes<br>
de création et de modifications, selon les modèles établis dans le code, ce qui<br>
permet de gagner du temps<br>
- **TypeORM** prend en charge la migration de base de données, ce qui permet de<br>
gérer plus facilement les mises à jour du schéma de base de données.<br>
- **TypeORM** est très intuitif et simple d'utilisation, <br>
ce qui rend la manipulation de bases de données facile et intuitive.

En résumé, **TypeORM** est un ORM complet et polyvalent qui peut s'intégrer facilement à notre projet<br> 
et nous offrir une gestion sécurisée et efficace des interactions avec les bases de données. <br>

Sa grande communauté de développeurs et sa documentation détaillée en font également<br>
un choix de qualité pour le développement de notre application.<br>