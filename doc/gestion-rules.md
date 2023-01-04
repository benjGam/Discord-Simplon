# Règles de gestion

![gestion rules image](https://www.financewhile.com/wp-content/uploads/2021/01/Business-Rules.png)

## OnBoarding : 

### Configuration

- Le bot doit disposer un systeme de configuration.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout des staffs .
    - L'embed doit disposer d'une liste box permettant de selectionner le role afin de generer un lien d'invitation.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout de formation.
    - L'embed doit disposer d'une liste box permettant la selection du type de formation .
      - Un nouvel embed doit etre envoye et doit disposer d'un bouton permettant de creer une nouvel formation.
      - Le bot doit envoyer un message demandant la date de commencement de formation.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout d'apprenant a une formation.
    - L'embed doit disposer d'une liste box permettant de generer un lien d'invitation pour un nouvel apprenant, a une formation specifique.
  - Le bot doit avoir une commande de generation d'embed (dans un canal) pour l'ajout de nouveaux utilisateur deja present sur le serveur discord, a une formation.
    - L'embed doit disposer d'une liste box permettant de selectionner une formation specifique.
      - Lors de la selection de la formation, un nouvel embed doit etre envoyer, il doit disposer d'un bouton permettant d'afficher un formulaire d'ajout d'utilisateur.
  - Le bot doit avoir une commande de generation d'embed pour l'ajout ou de modification de template de categorie de formation.
    - Une categorie de formation est un ensemble de canaux dedie a une formation.
    - Le bot doit a la creation d'une formation, generer une embed de configuration dans un channel propre a ca categorie.
  - Le lien d'invitation genere par le bot ne doit fonctionner que pour une personne.
  - Le lien d'invitation doit etre temporaire.
- Le bot ne doit pas pouvoir creer deux fois la meme embed.
- Le bot doit pouvoir detecter si une embed a ete supprimer pour permexttre la recreation d'une nouvelle.
- L'administrateur peut supprimer une embed.

---

- Lors de l'ajout d'un utitlisateur a une formation, le bot doit envoyer une demande de verification dans un canal dedie a ca formation.
- Le bot doit imposer une identification lors de l'arrive d'un nouvel apprenant ou nouveau membre du staff.
  - Lors de l'arrive d'un nouvel apprenant, le bot doit envoyer un message de demande de verification dans un canal dedie a ca formation.
  - Lors de l'arrive d'un nouveau staff, le bot doit envoyer un message de demande de verification dans un canal dedie au staff.
    - Une fois la verification de l'identite validee, le role doit etre attribue par le bot a l'utilisateur du lien.


# pôle

- Un pole est composé de 1 à n membres
- Un pole est représenté par un rôle au sein de l'organisation de Simplon-HDF

# Un ticket

- Un ticket est constitué d'un numéro d'identification
- Un ticket est composé par un nom
- Un ticket est composé d'un créateur représenté par un utilisateur affilié à Simplon-HDF
- Un ticket est composé d'un pôle destinataire
- Un ticket est composé d'un thread de discussion asynchrone

# Bot Ticketing

## Configuration

- Le bot doit mettre à disposition une commande permetant de modifier la catégorie dans laquelle les tickets seront situés
  
----

- Le bot doit disposer d'une interface (un canal) permettant à un utilisateur affilié à Simplon de créer un nouveau ticket 
  - Ce canal est composé :
  - D'un bouton permettant de créer un nouveau ticket
  - D'un champ de texte permettant de renseigner le nom du ticket
  - D'une listbox permettant de selectionner le pôle de destination du ticket
  - D'un bouton permettant de confirmer l'ouverture du ticket

## 🗣️ Un canal de discussion
    1. Un canal de discussion peut être textuel ou vocal.
    2. Il dispose d'une configurabilité par le biais de permissions.
    3. Un canal de discussion vocal peut avoir une limite d'utilisateurs simultané.
    4. Possibilité d'intégrer des web Hooks. dans les salons textuels, forum, salon announcement.

## 💬 Un forum de discussions est uniquement textuel
    1. Il posait un guide des postes.
    2. Il possèdent des tags.
    3. Possède 2 dispositions (Une sous-forme de lignes et une sous-forme de grille) pour une meilleure visibilité.
    4. Peut-être mis en archive (masqué) après une période d'inactivité.

## 📢 Le salon de type announcement
    1. Il peut avoir plusieurs salon de ce type.
    2. Récapitulatif pour les personnes qui entrent et sortent du serveur discord.
    3. Permets de suivre les messages postés dans un discord.
    4. Les mentions ne sont pas transmises.
    5. Permets un suivi de vos postes sur le discord d'un apprenant par exemple.

## 🔊 Le salon de type Stage (Conférence)
    1. Permets de créé des sessions, des groupes, d'organiser des événements publics (sous forme de conférence).
    2. Permet de diffuser des informations a tous le discord.
    3. Les orateurs :
      3a. faciliter de déplacement dans l'audience.
      3b. Sont autorisés à parler dans les salons stages.
    4. Les modérateurs de conférence :
      4a. ce sont des orateurs classiques.
      4b. Peuvent ajouter, retirer et mettre en sourdine d'orateurs.
    5. Toute personne ayant la permission de voir le salon de la conférence pourra y accéder en tant que spectateur.
  
## 🗂 Une catégorie Discord
    1. Elle peut contenir 0 à plusieurs canaux de discussion.
    2. Elle peut modifier les permissions des rôles du serveur, sur les canaux qui la compose.
    3. Elle peut être agencée de différentes façons.

## 👮🏼‍♂️ Un membre du Staff
    1. Un membre du staff peut créer des catégories
    2. Un membre du staff peut valider les demandes d'identification des visiteurs
    3. Un membre du staff peut créer des salons
    4. Un membre du staff peut accèder aux tickets crées par les apprenants
    5. Un membre du staff peut expulser ou bannir un membre du serveur Discord
    6. Un membre du staff peut accèder au panel d'administration de gestion des bots
    7. Un membre du staff peut poster des messages dans les canaux généraux
    8. Un membre du staff peut poster des annonces

## 🏃🏼‍♂️ Un formateur
    1. Un formateur peut créer un espace dédié à la formation qu'il dispense.
    2. Il peut ajouter un apprenant à cet espace dédié.
    3. Il peut supprimer un apprenant de cet espace dédié.
    4. Il peut discuter librement dans les canaux généraux.
    5. Il a accès aux canaux du Staff.

## 🤹🏼 Un apprenant
    1. Il peut discuter librement dans les canaux.
    2. Il peut discuter librement dans les canaux de sa promotion.
    3. Il peut prendre contact avec un membre du staff par le biais de canaux dédiés.
    4. Il doit être lié à une et une seule promotion en cours.
