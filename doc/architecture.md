# Architecture

Dans ce fichier, nous expliquerons les différents choix concernant l'architecture dossier de notre projet. 

## Mono-repository vs. multi-repository

1 repo pour tous les bots
1 repo

### Mono-repository 

L'architecture de type mono-repository, littérallement "un seul dépôt". Ce type d'architecture est le plus utilisé car le plus intuitif lors de l'apprentissage et du développement d'applications. 
En effet, ce type d'architecture consiste à stocker tous les fichiers d'une application dans un seul référentiel de versioning, comme Git. Ainsi, tous les fichiers de l'application ne se trouvent que dans un seul dépôt qui sera central. 

En plus d'être intuitive, cette architecture facilite grandement certains processus : 
* Lors du développement, il est plus facile de gérer les différents fichiers et d'obtenir une vue globale sur son projet. 
* Pour le travail en équipe, la collaboration est simplifiée en permettant à tous les membres de l'équipe de partager les mêmes outils et fihcier,  et d'adopter le même point de vue concernant l'application (y compris sur des domaines ne concernant pas directement leur travail).
* Une application comporte des dépendances. Ces dépendances logicielles sont des éléments ayant vocation à être assemblé à d'autres en vue de construire le logiciel. En d'autres termes, les cdépendances sont des composants qu'il est nécessaire de possèder pour le bon foinctionnemenbt de l'application. Une architecture mono-repo nous permet de mieux gérer les dépendances du projet en les centralisant. 

### Multi-repository


Lorsque (au minimum) deux repository sont construits, il est plus difficile de gérer les dépendances logicielles car celles-ci doivent être installées et configurées de multiples fois. 