# Règles de gestion

![gestion rules image](https://www.financewhile.com/wp-content/uploads/2021/01/Business-Rules.png)

## OnBoarding : 

- Le bot doit disposer un systeme de configuration.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout des staffs .
    - L'embed doit disposer d'une liste box permettant de selectionner le role afin de generer un lien d'invitation.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour la creation d'un nouveau type de formation.
    - L'embed doit disposer d'un bouton permettant d'envoyer une demande de nom de nouveau type.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout de formation.
    - L'embed doit disposer d'une liste box permettant la selection du type de formation.
      - Un demande doit être envoyer pour demander de completer le nom de la formation.
      - Un nouvel embed doit etre envoye et doit disposer d'un bouton permettant de creer une nouvel formation.
      - Le bot doit envoyer un message demandant la date de commencement et de fin de formation.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout d'apprenant a une formation.
    - L'embed doit disposer d'une liste box permettant de generer un lien d'invitation pour un nouvel apprenant, a une formation specifique.
      - Le lien d'invitation doit etre effectif pour une seul personne.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout de nouveaux utilisateur deja present sur le serveur discord, a une formation.
    - L'embed doit disposer d'une liste box permettant de selectionner une formation specifique.
      - Lors de la selection de la formation, un nouvel embed doit etre envoyer, il doit disposer d'un bouton permettant d'afficher un formulaire d'ajout d'utilisateur.
  - Le bot doit avoir une commande de generation d'embed pour l'ajout ou la modification de template de categorie de formation.
    - Une categorie de formation est un ensemble de canaux dedie a une formation.
    - Le bot doit à la creation d'une formation, générer un embed de configuration dans un channel propre à ça catégorie.
  - Le lien d'invitation générer par le bot ne doit fonctionner que pour une personne.
  - Le lien d'invitation doit etre temporaire.
- Le bot ne doit pas pouvoir creer deux fois la même embed de configuration.
- Le bot doit pouvoir detecter si un embed à été supprimé pour permettre la recreation d'une nouvelle.
- L'administrateur peut supprimer un embed.

- Lors de l'ajout d'un utitlisateur a une formation, le bot doit envoyer une demande de verification (dans un canal) dedié à ça formation.
- Le bot doit imposer une identification lors de l'arrive d'un nouvel apprenant ou nouveau membre du staff.
  - Lors de l'arrive d'un nouvel apprenant, le bot doit envoyer un message de demande de verification (dans un canal) dedié à ça formation.
  - Lors de l'arrive d'un nouveau staff, le bot doit envoyer un message de demande de verification (dans un canal) dedié au staff.
    - Une fois la verification de l'identité validée, le role doit etre attribué par le bot à l'utilisateur du lien.

- Le bot doit mettre en place un embed (dans un canal) permettant de selectionner les formations visibles pour le staff


## Gestion des signatures

- Le bot doit générer à la création de la formation, un embed doit être généré (dans un canal specifique) pour notifié les non signatures au apprenants
  - L'embed doit posseder une liste de box des apprenants de la formation
    - Lors de la selection d'un apprenant un message privé doit être envoyé par le bot pour signaler le problème.
  - La liste box doit être utilisé uniquement par le staff
  
- Le bot doit générer à la création de la formation, un embed permettant de notifié le formateur de l'absence d'émargement
  - L'embed doit disposer d'un bouton permettant d'envoyer un message privé au formateur.
    - Pour envoyer le message privé, il faut que 3 apprenants signal le problème.

- Le bot doit disposer d'une interface (un canal) permettant à un utilisateur affilié à Simplon de créer un nouveau ticket 
  - Ce canal est composé :
  - D'un bouton permettant de créer un nouveau ticket
  - D'un champ de texte permettant de renseigner le nom du ticket
  - D'une listbox permettant de selectionner le pôle de destination du ticket
  - D'un bouton permettant de confirmer l'ouverture du ticket


## Gestion des signatures

- Le bot doit générer à la création de la formation, un embed doit être généré (dans un canal specifique) pour notifié les non signatures au apprenants
  - L'embed doit posseder une liste de box des apprenants de la formation
    - Lors de la selection d'un apprenant un message privé doit être envoyé par le bot pour signaler le problème.
  - La liste box doit être utilisé uniquement par le staff


# pôle
  - Lors de l'arrive d'un nouvel apprenant, le bot doit envoyer un message de demande de verification (dans un canal) dedié à ça formation.
  - Lors de l'arrive d'un nouveau staff, le bot doit envoyer un message de demande de verification (dans un canal) dedié au staff.
    - Une fois la verification de l'identité validée, le role doit etre attribué par le bot à l'utilisateur du lien.

- Un pole est composé de 1 à n membres
- Un pole est représenté par un rôle au sein de l'organisation de Simplon-HDF
- Un pôle doit être affilié à un rôle du serveur
- Le bot doit mettre en place un embed (dans un canal) permettant de selectionner les formations visibles pour le staff

# Un ticket

- Un ticket est constitué d'un numéro d'identification
- Un ticket est composé par un nom
- Un ticket est composé d'un créateur représenté par un utilisateur affilié à Simplon-HDF
- Un ticket est composé d'un pôle destinataire
- Un ticket est composé d'un thread de discussion asynchrone
- Un ticket peut être fermé par son créateur et par le pôle destinataire
- Un ticket peut être marqué comme résolu par un membre du pôle destinataire
- Un ticket peut être archivé par un membre du pôle destinataire
- Un ticket peut être sauvegardé de façon externe

# Bot Ticketing

## Configuration

- Le bot doit disposer d'une commande permettant de generer un embed (dans un canal) pour creer des tickets

----

- Le bot doit disposer d'un embed (dans un canal) permettant à un utilisateur affilié à Simplon de créer un nouveau ticket 
  - Cet embed doit disposé d'un bouton permettant de commencer la création d'un nouveau ticket
    - Une demande de nom de ticket doit être envoyé à la création
    - Une embed doit être envoyé disposant d'une liste box permettant de selectionner le pôle visé.
    - Le bot doit creer un thread dedié pour le ticket dans une catégorie adapté
      - Cette catégorie doit être visible uniquement par le pôle visée
      - Le bot doit générer dans le thread du ticket un embed disposant d'un bouton
      - Cet embed doit disposer d'un bouton permettant de fermer le ticket
        - Le ticket doit etre archivé une fois fermé

# Sondage

- Un sondage est un embed
- Un sondage contient plus ou moin de bouton permettant de voter
- Il contient un message
- Il peut contenir des images
- Un sondage peut etre signaler

# Bot sondage

## Configuration

- Le bot doit disposer d'une commande permettant de definir une durée de sondage par defaut
- Le bot doit disposer d'une commande permettant de générer un embed (dans un canal) pour creer des sondages

---

- Le bot doit disposer d'un embed (dans un canal) permettant à un utilisateur de commencer la création d'un sondage.
- L'embed doit disposer d'un bouton permettant de commencer une configuration de sondage
- La configuration de sondage permet d'ajouter du texte, des images et des potentielles champs de votes et durée, et le canal dans lequel l'envoyer

- Le sondage doit etre supprimé apres le temps determiné pendant la configuration
- Le sondage doit pouvoir etre signalé via une application commande par tout les utilisateur
- A partir d'un certain nombre de signalement le sondage doit etre supprimé automatiquement

- L'utilisateur qui créée le sondage peux le fermer le fermer ou le supprimer
- Une image representant les resultats doit etre envoyé à la fin du sondage.

# Feedback bot

- Le bot doit mettre à disposition un canal dédié aux membres du staff afin de consulter les feedbakcs des apprenants
- Ce canal est affilié à la catégorie de la formation
- Les apprenants peuvnet envoyer un message au bot afin de faire leur feedback
- Le bot doit considérer les messages uniquement des apprenants
- Le bot doit considérer uniquement 1 message par apprenant
- Le bot doit considérer uniquement les messages des apprenants une semaine avant la fin de leur formation 
- Le bot doit envoyer le message dans le canal dédié afin de préserver l'anonymité des feedbacks des apprenants

# Configuration 

- Le bot doit mettre à disposition une commande permettant son activation
- Le bot doit mettre à disposition une commande permettant sa désactivation
- Le bot doit mettre à disposition une commande permettant d'activer les feedbacks selon les formations
  - Cette embed doit être composée d'une listbox permettant de selectionner la formation sur laquelle activer ou désactiver les feedbacks
# SimplonHub Bot

- Le bot doit analyser les ressources partagées dans les canaux dédiés
- Le bot doit permettre aux utilisateurs de voter pour encenser une ressource
- Le bot doit permettre aux utilisateurs de voter pour condamner une ressource
- Le bot doit mettre en place une commande permettant d'accèder à une liste de ressources jugées pertinentes par la communauté

## Configuration

- Le bot doit mettre à disposition une commande permettant son activation
- Le bot doit mettre à disposition une commande permettant sa désactivation
- Le bot doit mettre à disposition une commande permettant de lié un canal spécifique à un tag