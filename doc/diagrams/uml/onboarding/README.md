# Sommaire

- <a href='#context'>Contexte</a>
- <a href='#usecase-diagram'>Diagramme de cas d'utilisation</a>
- <a href='#activities-diagram'>Diagramme d'activités</a>
- <a href='#sequences-diagram'>Diagramme de séquences</a>
- <a href='#classes-diagram'>Diagramme de classes</a>

# Contexte <a id='context'></a>

Le **Bot d'Onboarding** doit permettre de gérer de façon globale l'import d'un éco-système de Centre de Formation au sein d'un seul et unique serveur **Discord**, 
dans cette optique, le **Bot** doit permettre d'accueillir de nouveaux membres internes ou externes au Centre de Formation.

Il doit permettre de définir qu'un utilisateur est un **Apprenant** ou un **Membre des différentes équipes** du Centre de Formation de la façon la plus simple possible, pour permettre l'accueil des différentes promotions, le **Bot** doit mettre à disposition un espace dédié à une promotion.

Aussi, le **Bot** doit permettre la création de nouvelles formations ainsi que la création de nouvelles promotions de façon la plus simple possible,
il doit aussi permettre aux membres concernés de consulter ces différents espaces si nécessaire tout en conservant une navigation fluide au sein du serveur **Discord**

# Diagramme de cas d'utilisation <a id='usecase-diagram'></a>

Le diagramme de cas d'utilisation représente les cas d'utilisation possibles d'une application de façon générale et très peu détaillée : 

<img src='use-case.jpg'/>

Dans ce présent diagramme :

L'administrateur (représenté ici par **Administrator**) peut configurer le **Bot** ce qui implique que le **Bot** modifie sa configuration.

Un nouveau membre (représenté ici par **New Member**) peut rejoindre le serveur ce qui implique que le **Bot** lui attribut un rôle par défaut,
aussi, il est possible que le **Bot** ait généré un lien d'invitation auquel il a associé un rôle à attribué à l'utilisateur.
Aussi, le nouveau membre peut ou doit s'identifier selon le lien d'invitation avec lequel il a rejoint le serveur **Discord**.

Le nouveau membre peut poster des messages dans les canaux globaux, et il peut poster des messages dans les canaux liés à son rôle ce qui implique,
qu'il se soit identifié.

Le CAP peut confirmer les demandes d'identification des nouveaux membres, ce qui implique que le **Bot** doivent redéfinir le pseudo du nouvel utilisateur,
le cap peut aussi créer un nouveau type de formation, il peut créer une nouvelle promotion, il doit pour cela assigner au moins un formateur à la promotion, pour créer une nouvelle promotion le **Bot** doit créer un espace dédié à la promotion.

Le CAP peut aussi mettre fin à un promotion en cours, ce qui implique que le **Bot** doit déplacer la catégorie liée à la promotion vers une zone d'archivage,
le cap peut aussi ajouter ou supprimer un apprenant d'une promotion.
Il peut aussi selectionner les promotions qu'il veut consulter ce qui implique que le **Bot** doit ajouter ou retirer un rôie au **CAP**.

Le formateur (représenté ici par **Trainer**) peut quant à lui consulter l'espace dédié à sa promotion et y discuter librement.
L'apprenant (représenté ici par **Learner**) peut lui aussi consulter son espace de formation et y discuter librement.

# Diagramme d'activités <a id='activities-diagram'></a>

Le diagramme d'activités représente les différentes activités d'une application de façon générale et peu détaillée, il est conçu à partir du <a href='#usecase-diagram'>**diagramme de cas d'utilisation**</a>

<img src='class-creation-activities.jpg'/>

Ce présent diagramme décrit les activités possibles lors de la création d'une nouvelles promotions :

Un **CAP** rejoint le canal dédié à la création d'une promotion, **Discord** affiche donc un bouton afin de donner au **CAP** une interface de création de promotion.
Le **CAP** clique sur le bouton et entre les différentes caractéristiques de la promotion puis valide la demande de création de promotion.
Le **Bot** vérifie les informations entrées par le **CAP**, si une erreur est detectée, il le notifie au **CAP¨**, sinon le **Bot** récupère le template du type de formation,
puis il créer un rôle de promotion ainsi qu'une catégorie (un espace) dédié à la promotion à laquelle il lie un lien d'invitation.
Il attribue le rôle de promotion au **CAP** qui a crée la promotion.
Alors **Discord** applique le template de formation à la catégorie de la promotion et lie le rôle de promotion à la catégorie.
Ensuite le **Bot** va lié le rôle de promotion à chaque apprenant.
Enfin **Discord** va notifier le succès de la création de la promotion au **CAP**

# Diagramme de séquences <a id='sequences-diagram'></a>

Le diagramme de séquence représente les différentes activités d'une application de façon très détaillée, il est conçu à partir du <a href='#activities-diagram'>**diagramme d'activités**</a>

<img src='sequence.jpg'/>

La lecture de ce diagramme suffit à son compréhension en raison de son niveau de détail.

# Diagramme de classes <a id='classes-diagram'></a>

Le diagramme de classe représente les différentes classes d'une application, ce diagramme doit être utilisé lors de la phase de développement afin de permettre aux développeurs de savoir la façon dont doit être développer l'application.<br>

<img src='classes.jpg'/>

