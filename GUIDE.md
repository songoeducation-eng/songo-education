# Guide du site Songo Éducation

Ce guide explique, étape par étape, comment mettre le site en ligne puis le modifier **sans écrire de code**.
Il est fait pour des personnes qui ne sont pas développeuses.

**Ce que coûte le site :** 0 €. Seul le nom de domaine `songo-education.org` reste payant (renouvellement annuel).

| Élément | Service | Prix |
|---|---|---|
| Hébergement du site | GitHub Pages | Gratuit |
| Modification du contenu | Pages CMS | Gratuit |
| Formulaire de contact | Web3Forms | Gratuit (jusqu'à 250 messages par mois) |
| Lettre d'information (facultatif) | Brevo | Gratuit |
| Nom de domaine | Wix aujourd'hui → **Zoho Domains** (section 2) ; expire le **18 septembre 2027** | Payant (renouvellement annuel) |
| Adresses e-mail @songo-education.org | Zoho Mail, offre Mail Free (section 4) | Gratuit (jusqu'à 5 adresses) |

---

## Sommaire

1. [Créer le dépôt GitHub et activer GitHub Pages](#1-créer-le-dépôt-github-et-activer-github-pages)
2. [Transférer le domaine de Wix vers Zoho Domains](#2-transférer-le-domaine-de-wix-vers-zoho-domains)
3. [Résilier Wix sans rien perdre](#3-résilier-wix-sans-rien-perdre)
4. [Adresse e-mail @songo-education.org avec Zoho Mail](#4-adresse-e-mail-songo-educationorg-avec-zoho-mail)
5. [Publier une actualité avec Pages CMS](#5-publier-une-actualité-avec-pages-cms)
6. [Ajouter un membre, un partenaire, un projet, un réseau social](#6-ajouter-un-membre-un-partenaire-un-projet-un-réseau-social)
7. [Changer une image ou un texte de page](#7-changer-une-image-ou-un-texte-de-page)
8. [Activer le formulaire de contact](#8-activer-le-formulaire-de-contact)
9. [Activer la lettre d'information (facultatif)](#9-activer-la-lettre-dinformation-facultatif)
10. [Bons réflexes](#10-bons-réflexes)
11. [Check-list : ancien site / nouveau site](#11-check-list--ancien-site--nouveau-site)

---

## 1. Créer le dépôt GitHub et activer GitHub Pages

Un « dépôt » est simplement le dossier en ligne qui contient le site.

1. Créez un compte gratuit sur **https://github.com/signup**, de préférence avec l'adresse `songo.education@gmail.com` (le compte appartient ainsi à l'association, pas à une personne).
2. Installez le logiciel gratuit **GitHub Desktop** : **https://desktop.github.com** (Windows ou Mac), puis connectez-vous avec ce compte (**Sign in to GitHub.com**).
3. Décompressez le fichier `songo-education.zip` fourni, par exemple dans **Documents**. Vous obtenez un dossier `songo-education`.
4. Dans GitHub Desktop : menu **File** → **Add local repository…** → **Choose…** → sélectionnez le dossier `songo-education` → **Add repository**.
   (Le dossier est déjà prêt : son historique contient une première version du site.)
5. Cliquez sur le bouton bleu **Publish repository** en haut.
   - **Name** : `songo-education`
   - **Décochez** « Keep this code private » (le dépôt doit être public pour GitHub Pages gratuit).
   - Cliquez sur **Publish repository**.
6. Cliquez sur **View on GitHub** (ou ouvrez `https://github.com/NOM-DU-COMPTE/songo-education`).
7. Allez dans **Settings** (onglet en haut du dépôt) → **Pages** (menu de gauche).
8. Dans **Build and deployment** :
   - **Source** : *Deploy from a branch*
   - **Branch** : `main` et dossier `/ (root)` → **Save**.
9. Patientez 1 à 3 minutes. Un bandeau indique l'adresse provisoire du site, du type `https://NOM-DU-COMPTE.github.io/songo-education/`.

> ℹ️ À l'adresse provisoire, la mise en page peut sembler cassée : c'est normal, le site est réglé pour `www.songo-education.org`. Tout s'affiche correctement après l'étape 2.

> 💡 Vous pouvez suivre chaque publication dans l'onglet **Actions** du dépôt : une coche verte = site à jour ; une croix rouge = erreur (voir la section 9).

---

## 2. Transférer le domaine de Wix vers Zoho Domains

Aujourd'hui, `songo-education.org` est enregistré via Wix (registraire Tucows, expiration le **18 septembre 2027**). On le transfère chez **Zoho Domains**, comme pour votre site perso, en préparant dès le transfert les réglages qui le pointeront vers GitHub. Ainsi, le site ne s'interrompt pas.

> Faites d'abord l'étape 1 : le dépôt doit être publié sur GitHub avec GitHub Pages activé.

### 2.1 Déclarer le domaine dans GitHub (à faire en premier)

1. Dans le dépôt GitHub : **Settings** → **Pages** → **Custom domain** → tapez `www.songo-education.org` → **Save**. (Le fichier `CNAME` du dépôt contient déjà cette adresse.)
2. Recommandé : protégez le domaine. Cliquez sur votre photo de profil → **Settings** → **Pages** (menu de gauche) → **Add a domain** → `songo-education.org`. GitHub affiche un enregistrement **TXT** à ajouter : notez-le, vous l'ajouterez chez Zoho (étape 2.3).

### 2.2 Obtenir le code de transfert chez Wix

1. Sur **wix.com** → menu **Domaines**.
2. À côté de `songo-education.org` : icône **Actions du domaine** (⋯) → **Transférer hors de Wix** → **Transférer le domaine** → **Je veux quand même transférer**.
3. Wix envoie un **code d'autorisation (code EPP)** à l'adresse e-mail du **propriétaire du domaine**. Vérifiez avant que cette adresse est bien consultée.

> ⚠️ Règle commune à tous les registraires : pas de transfert dans les 60 jours suivant un achat, un transfert ou un changement de propriétaire. Faites-le **bien avant** le 18 septembre 2027.

### 2.3 Lancer le transfert chez Zoho Domains

1. Connectez-vous sur **https://domains.zoho.com** (avec le compte Zoho de l'association, ou créez-en un).
2. Onglet **Transfer** → tapez `songo-education.org` → **Transfer** → **Add to Cart**.
3. Cliquez sur le **panier** en haut à droite, collez le **code EPP** reçu de Wix → **Checkout**.
4. Vérifiez les coordonnées du propriétaire (l'association), puis payez. Le transfert inclut en général une année de renouvellement : la date d'expiration est prolongée d'autant.
5. Cliquez sur **View Transfer**. Pour les réglages DNS, choisissez **Add DNS Records Manually** (ajouter les enregistrements manuellement) et saisissez ceux du tableau ci-dessous.

**Enregistrements à saisir chez Zoho : le site sur GitHub Pages**

| Type | Nom (Host) | Valeur | Rôle |
|---|---|---|---|
| A | `@` | `185.199.108.153` | Site |
| A | `@` | `185.199.109.153` | Site |
| A | `@` | `185.199.110.153` | Site |
| A | `@` | `185.199.111.153` | Site |
| CNAME | `www` | `NOM-DU-COMPTE.github.io` | Site (sans `/songo-education`) |
| TXT | *(fourni par GitHub, étape 2.1)* | *(fourni par GitHub)* | Protection du domaine |

Facultatif (IPv6) : 4 enregistrements **AAAA** sur `@` : `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

Les enregistrements e-mail (Zoho Mail) s'ajoutent à l'étape 4.

6. Le transfert prend en général 5 à 7 jours. Wix continue de servir le domaine pendant ce temps : ne résiliez rien chez Wix avant la fin. Suivez l'avancement dans Zoho Domains → **My Domains** → **Manage Transfer**.

### 2.4 Après le transfert : vérifier les DNS et activer HTTPS

1. Zoho Domains → **My Domains** → **Manage** à côté du domaine → **Manage DNS** → **Manage Records** : vérifiez que les enregistrements du tableau sont présents. Supprimez les anciens enregistrements **A** ou **CNAME `www`** qui pointeraient encore vers Wix.
2. Dans GitHub → **Settings** → **Pages** : attendez le message « DNS check successful », puis cochez **Enforce HTTPS**. (La case peut rester grisée jusqu'à 24 h, le temps que GitHub prépare le certificat.)
3. Vérifiez : `https://www.songo-education.org` affiche le nouveau site avec un cadenas, et `songo-education.org` (sans www) redirige vers la version avec www.
4. Testez quelques anciens liens Wix ; ils doivent mener vers la bonne nouvelle page :
   - `https://www.songo-education.org/general-7` → **Nous soutenir**
   - `https://www.songo-education.org/news` → **Actualités**
   - `https://www.songo-education.org/post/soirée-déclics-jeunes` → l'article correspondant

Les 24 anciennes adresses du site Wix sont redirigées (liste complète dans la section 11).

---

## 3. Résilier Wix sans rien perdre

Quand le site fonctionne sur `www.songo-education.org` **et** que le transfert vers Zoho est **terminé** :

1. Wix → **Abonnements Premium** → résiliez l'abonnement **du site**. Le domaine n'est plus chez Wix : il ne sera pas touché.
2. Gardez précieusement le dossier `songo-education` et l'inventaire (`INVENTAIRE.md`) : tout le contenu et toutes les images d'origine y sont.
3. Avant la résiliation, récupérez depuis le tableau de bord Wix ce qui n'est pas visible sur le site : messages reçus par le formulaire, liste d'abonnés éventuelle.

> Si vous résiliez Wix **avant** la fin du transfert, ne résiliez **pas** l'abonnement du domaine : l'abonnement Premium et celui du domaine sont séparés chez Wix.

---

## 4. Adresse e-mail @songo-education.org avec Zoho Mail

L'offre **Mail Free** de Zoho est gratuite : jusqu'à 5 adresses de 5 Go chacune sur un domaine, avec la messagerie web et l'application mobile. Elle n'inclut pas l'IMAP/POP (pas de connexion depuis Outlook ou l'application Mail du téléphone, seulement l'application Zoho Mail). Si cette offre n'est pas proposée lors de l'inscription, Zoho la réserve à certaines régions : contactez leur support ou choisissez l'offre payante la moins chère.

1. Allez sur **https://www.zoho.com/mail** → **Inscription** → choisissez l'offre **Mail Free** → « J'ai déjà un domaine » → `songo-education.org`.
2. **Vérifier le domaine** : Zoho affiche un enregistrement **TXT** (ou CNAME). Ajoutez-le dans Zoho Domains → **Manage DNS** → **Manage Records**, puis cliquez sur **Verify** dans Zoho Mail.
3. **Créer les adresses** : par exemple `contact@songo-education.org`, `presidence@songo-education.org`.
4. **Recevoir les e-mails** : ajoutez les enregistrements **MX** affichés par Zoho Mail (**Domaines** → **Configuration de l'e-mail**). Copiez exactement les valeurs affichées : elles dépendent de la région de votre compte. Par exemple, pour un compte européen :

| Type | Nom | Valeur | Priorité |
|---|---|---|---|
| MX | `@` | `mx.zoho.eu` | 10 |
| MX | `@` | `mx2.zoho.eu` | 20 |
| MX | `@` | `mx3.zoho.eu` | 50 |

5. **Ne pas finir en indésirables** : ajoutez les enregistrements **SPF** (TXT sur `@`, valeur du type `v=spf1 include:zohomail.eu ~all`) et **DKIM** (TXT `zoho._domainkey` ou nom indiqué, valeur commençant par `v=DKIM1;`), tels qu'affichés par Zoho Mail. Un seul enregistrement SPF doit exister.
6. Dans Zoho Mail, cliquez sur **Verify** pour chaque étape. La prise en compte peut prendre de 1 à 48 heures.
7. Facultatif : utilisez la nouvelle adresse sur le site. Dans Pages CMS → **Réglages du site** → **E-mail** → `contact@songo-education.org` → **Save** ; elle s'affiche alors partout. Pensez à refaire l'étape 8 (clé Web3Forms) avec cette adresse si vous voulez recevoir les messages du formulaire dessus.

> Les enregistrements du site (A, CNAME `www`) et ceux de l'e-mail (MX, SPF, DKIM) cohabitent sans problème : ne supprimez jamais les uns en ajoutant les autres.

---

## 5. Publier une actualité avec Pages CMS

Pages CMS est une interface web gratuite qui modifie le site à votre place, à l'aide de formulaires.

### 4.1 Première connexion (une seule fois)

1. Allez sur **https://app.pagescms.org**.
2. Cliquez sur **Sign in with GitHub** et connectez-vous avec le compte de l'association.
3. Autorisez Pages CMS à accéder au dépôt `songo-education` quand GitHub le demande (installation de l'application « Pages CMS » sur ce dépôt).
4. Choisissez le dépôt **songo-education**. Le menu de gauche affiche : *Actualités, Projets, Équipe, Partenaires, Ressources, Réglages du site, Menu du site, Pages*.
5. Pour donner accès à d'autres bénévoles : dans Pages CMS, ouvrez **Collaborators** et invitez-les par e-mail. Ils n'auront pas besoin de compte GitHub.

### 4.2 Écrire l'article

1. Menu **Actualités** → bouton **Add an entry** (ajouter).
2. Remplissez les champs :
   - **Titre** ;
   - **Date de publication** (l'article le plus récent apparaît automatiquement en premier, et sur l'accueil parmi les 3 dernières actualités) ;
   - **Catégorie** ;
   - **Image de couverture** : cliquez, puis **Upload** pour envoyer une photo depuis votre ordinateur ;
   - **Description de l'image** : une phrase qui dit ce que montre la photo ;
   - **Résumé** : 1 ou 2 phrases ;
   - **Texte de l'article** : écrivez comme dans un traitement de texte. Le bouton image de la barre d'outils insère des photos dans le texte.
3. Cliquez sur **Save** (enregistrer).
4. Attendez 1 à 2 minutes : l'article est en ligne.

> 💡 Les photos de téléphone sont très lourdes. Avant de les envoyer, réduisez-les à 1600 pixels de large au maximum, par exemple avec https://squoosh.app (gratuit, en français). Choisissez le format **WebP** ou JPG, qualité 75-80.

**Modifier ou supprimer un article :** menu **Actualités** → cliquez sur l'article → modifiez → **Save**. Pour supprimer : menu **⋯** à côté de l'article → **Delete**.

---

## 6. Ajouter un membre, un partenaire, un projet, un réseau social

### Un membre de l'équipe

1. **Équipe** → **Add an entry**.
2. **Prénom et NOM**, **Rôle**, **Photo** (carrée de préférence), **Ordre d'affichage** (1 = en premier ; les 11 membres actuels vont de 1 à 11) et **Présentation**.
3. **Réseaux sociaux de la personne** → **Add** : nom affiché, adresse et icône (LinkedIn, Facebook…).
4. **Save**.

Pour retirer un membre : ouvrez sa fiche → menu **⋯** → **Delete**.

### Un partenaire

1. **Partenaires** → **Add an entry**.
2. Choisissez le **Type** :
   - **Soutien** : le logo s'affiche dans « Ils nous ont fait confiance » (accueil, Nous soutenir, Partenaires), avec la **phrase courte** dessous ;
   - **Partenaire local** : présentation complète sur la page Partenaires, avec photos et coordonnées.
3. Ajoutez le **logo**, le **site internet**, etc. → **Save**.

### Un projet

**Projets** → **Add an entry** → nom, résumé, image, ordre, présentation complète → **Save**.
Le projet n° 1 (ordre = 1) est mis en avant sur la page d'accueil.

### Une ressource (rapport, PDF)

**Ressources** → **Add an entry** → titre, ordre, image de couverture, puis **soit** un lien (Calaméo…), **soit** un PDF à déposer → **Save**.

### Un réseau social de l'association (YouTube, LinkedIn, TikTok, WhatsApp…)

1. **Réglages du site** → section **Réseaux sociaux de l'association** → **Add**.
2. Nom affiché (ex. `YouTube`), adresse complète (commençant par `https://`) et choix de l'**icône** dans la liste.
3. **Save**.

L'icône apparaît automatiquement dans le menu mobile, le pied de page de toutes les pages et la page Contact. Pour WhatsApp, utilisez une adresse du type `https://wa.me/33632987247`.

### Changer le téléphone, l'e-mail ou le lien de don

**Réglages du site** → modifiez le champ voulu → **Save**. Le changement s'applique partout : en-tête, pied de page, contact et boutons « Faire un don ».

---

## 7. Changer une image ou un texte de page

### Le texte d'une page

- **Accueil, Nous soutenir, Nos valeurs, Organisation, Contact, S'informer** : menu **Pages** → choisissez la page. Chaque bloc a son propre champ (bandeau, chiffres clés, vignettes, postes de dépense, liste des donateurs…).
- **Qui sommes-nous, Mentions légales, Données personnelles** et les **phrases d'introduction** des pages Équipe, Projets, Partenaires, Actualités, Ressources : menu **Pages** → **Pages de texte** → choisissez la page.

Modifiez, puis **Save**. Le site est à jour 1 à 2 minutes plus tard.

### Une image

1. Ouvrez l'élément concerné (page, membre, article…).
2. Cliquez sur l'image actuelle → **Remove**, puis choisissez une autre image ou **Upload** pour en envoyer une nouvelle.
3. Mettez à jour la **description de l'image**.
4. **Save**.

Toutes les images sont aussi visibles dans le menu **Media** de Pages CMS.

### Ajouter un donateur

**Pages** → **Nous soutenir** → **Donateurs** → **Noms** → **Add** → tapez le nom → **Save**.

### Le menu

**Menu du site** : vous pouvez renommer, réordonner ou ajouter une entrée. Ne changez pas les adresses des pages existantes (`/contact/`, etc.), sinon les liens ne fonctionneront plus.

---

## 8. Activer le formulaire de contact

Tant qu'il n'est pas activé, le formulaire ouvre la messagerie du visiteur (cela marche, mais c'est moins pratique). Pour qu'il envoie directement les messages à `songo.education@gmail.com` :

1. Allez sur **https://web3forms.com** → **Create your Access Key**.
2. Saisissez `songo.education@gmail.com` et validez. Une **clé** (suite de lettres et de chiffres) arrive par e-mail.
3. Dans Pages CMS : **Réglages du site** → **Clé Web3Forms** → collez la clé → **Save**.
4. Testez le formulaire sur la page Contact après 2 minutes. Le message « Merci de votre envoi ! » s'affiche et l'e-mail arrive sur la boîte de l'association (pensez à vérifier les indésirables la première fois).

> Cette clé peut être publique sans risque : elle ne permet que d'envoyer des messages vers votre adresse. L'offre gratuite autorise 250 messages par mois.

---

## 9. Activer la lettre d'information (facultatif)

1. Créez un compte gratuit sur **https://www.brevo.com** avec l'adresse de l'association.
2. Menu **Contacts** → **Formulaires** → créez un formulaire d'inscription (nom de la liste, textes en français, case de consentement RGPD).
3. À la dernière étape, choisissez de **partager le formulaire** et copiez son **adresse (lien)**.
4. Dans Pages CMS : **Réglages du site** → **Adresse du formulaire Brevo** → collez le lien → **Save**.

Le bloc « Recevoir nos nouvelles » apparaît alors sur la page d'accueil. Pour le masquer, videz le champ.

---

## 10. Bons réflexes

- **Une modification = un enregistrement = une publication automatique.** Comptez 1 à 2 minutes avant de voir le résultat (rechargez la page avec **Ctrl + F5**, ou **Cmd + Maj + R** sur Mac).
- **Rien ne se perd :** GitHub garde l'historique de toutes les versions. En cas d'erreur, un développeur bénévole peut revenir en arrière en quelques clics (onglet **Commits** du dépôt).
- **En cas de croix rouge** dans l'onglet **Actions** du dépôt, la dernière modification contient une erreur et le site reste sur la version précédente (il ne casse pas). Le plus souvent, il s'agit d'un guillemet `"` mal fermé dans un titre. Corrigez le dernier élément modifié dans Pages CMS.
- **Images :** toujours renseigner la description (accessibilité et référencement Google).
- **Mots de passe :** activez la double authentification sur le compte GitHub de l'association (Settings → Password and authentication).

### Où se trouve quoi (pour un développeur)

| Contenu | Fichier(s) |
|---|---|
| Coordonnées, don, réseaux, clés | `_data/site.yml` |
| Menu | `_data/navigation.yml` |
| Actualités | `_posts/AAAA-MM-JJ-titre.md` |
| Équipe, projets, partenaires, ressources | `_equipe/`, `_projets/`, `_partenaires/`, `_ressources/` (un fichier par élément) |
| Pages | `index.md` (accueil) et `pages/*.md` |
| Images / PDF | `assets/images/…`, `assets/documents/` |
| Gabarits, styles, scripts | `_layouts/`, `_includes/`, `assets/css/songo.css`, `assets/js/site.js` |
| Formulaires Pages CMS | `.pages.yml` |
| Redirections des anciennes adresses Wix | champ `redirect_from` de chaque page et article |

Prévisualiser le site sur un ordinateur (facultatif, développeurs) : installer Ruby, puis `bundle install` et `bundle exec jekyll serve` → http://localhost:4000.

---

## 11. Check-list : ancien site / nouveau site

Vérification **automatique** effectuée sur le site compilé (même version de Jekyll que GitHub Pages) : chaque phrase de l'ancien site a été recherchée dans la page correspondante du nouveau site.

- **Textes : 357 phrases sur 357 retrouvées (100 %).** Les coquilles validées ont été corrigées ; les seuls textes non repris sont listés plus bas, avec leur raison.
- **Anciennes adresses : 24 sur 24 redirigent** vers la bonne page (14 pages + 10 articles).
- **Liens et images internes : 1 161 vérifiés, 0 cassé.**
- **Images : toutes les images du site actuel sont reprises, à leur place d'origine** : 62 photos de l'association, 2 photos Unsplash, 12 images d'illustration des pages, la vidéo de fond de l'accueil et le favicon. Converties en WebP (107 Mo → 7 Mo), chargement différé. Seuls les pictogrammes Wix (Facebook, LinkedIn…) sont remplacés par les icônes du nouveau site.

### Pages

| ✔ | Page | Ancienne adresse | Nouvelle adresse | Textes | Photos de l'association | Illustrations Wix (reprises aussi) |
|---|---|---|---|---|---|---|
| ☑ | Accueil | `/` | `/` | complets | 3 | 5 |
| ☑ | Qui sommes-nous ? | `/qui-sommes-nous` | `/qui-sommes-nous/` | complets | 3 | 0 |
| ☑ | Nos valeurs | `/copie-de-qui-sommes-nous` | `/nos-valeurs/` | complets | 0 | 3 |
| ☑ | Notre équipe | `/notre-équipe` | `/equipe/` | complets | 11 | 0 |
| ☑ | Notre organisation | `/copie-de-nos-valeurs` | `/organisation/` | complets | 1 | 0 |
| ☑ | Nos projets | `/nos-projets` | `/projets/` | complets | 1 | 0 |
| ☑ | Partenaires | `/partenaires` | `/partenaires/` | complets | 7 | 0 |
| ☑ | S'informer | `/services-4` | `/s-informer/` | complets | 1 | 2 |
| ☑ | Actualités | `/news` | `/actualites/` | complets | 0 | 0 |
| ☑ | Ressources | `/about-6` | `/ressources/` | complets | 4 | 0 |
| ☑ | Nous soutenir | `/general-7` | `/nous-soutenir/` | complets | 4 | 3 |
| ☑ | Contact | `/contact` | `/contact/` | complets | 1 | 0 |
| ☑ | Mentions légales | `/mentions-légales` | `/mentions-legales/` | complets | 0 | 1 |
| ☑ | Données personnelles | `/gestion-des-données-personnelles` | `/donnees-personnelles/` | complets | 0 | 1 |

### Articles

| ✔ | Article | Ancienne adresse | Nouvelle adresse | Textes | Images |
|---|---|---|---|---|---|
| ☑ | HOMMAGE À BIEN-AIMÉ BOKORO | `/post/hommage-à-bien-aimé-bokoro` | `/actualites/2026/hommage-a-bien-aime-bokoro/` | complets | 1 |
| ☑ | SOIRÉE DÉCLICS JEUNES | `/post/soirée-déclics-jeunes` | `/actualites/2025/soiree-declics-jeunes/` | complets | 4 |
| ☑ | LAURÉAT CONCOURS DÉCLICS JEUNES ! 😎 | `/post/lauréat-concours-déclics-jeunes` | `/actualites/2025/laureat-concours-declics-jeunes/` | complets | 2 |
| ☑ | ÇA BOUGE À SONGO ÉDUCATION ! ✨ | `/post/ça-bouge-à-songo-éducation` | `/actualites/2024/ca-bouge-a-songo-education/` | complets | 4 |
| ☑ | RENCONTRE CONVIVIAL & INSTALLATION DE TOUS LES SYSTÈMES D'EXPLOITATION 🌞💻 | `/post/rencontre-convivial-installation-de-tous-les-systèmes-d-exploitation` | `/actualites/2024/rencontre-conviviale-installation-systemes-exploitation/` | complets | 3 |
| ☑ | ON A TERMINÉ NOTRE COLLECTE DE MATÉRIEL 🙌 | `/post/on-a-terminé-notre-collecte-de-matériel` | `/actualites/2024/collecte-de-materiel-terminee/` | complets | 4 |
| ☑ | Installation du système d'exploitation 💻 | `/post/installation-du-système-d-exploitation` | `/actualites/2024/installation-du-systeme-d-exploitation/` | complets | 2 |
| ☑ | Collecte de matériel à La Rebooterie 🖱️⌨️🔌 | `/post/collecte-de-matériel-à-la-rebooterie` | `/actualites/2024/collecte-de-materiel-a-la-rebooterie/` | complets | 3 |
| ☑ | Rencontre à l'INSA de Toulouse ! | `/post/rencontre-à-l-insa-de-toulouse` | `/actualites/2024/rencontre-a-l-insa-de-toulouse/` | complets | 3 |
| ☑ | Les ordinateurs sont réceptionnés 🖥️ | `/post/les-ordinateurs-sont-réceptionnés` | `/actualites/2024/les-ordinateurs-sont-receptionnes/` | complets | 4 |

### Éléments communs

| ✔ | Élément | Ancien site | Nouveau site |
|---|---|---|---|
| ☑ | Logo | En-tête | En-tête, page Qui sommes-nous, image de partage sur les réseaux |
| ☑ | Slogan « Favoriser l'accès au numérique dans les écoles de Centrafrique. » | Bandeau d'accueil | Bandeau d'accueil (modifiable dans Réglages du site) |
| ☑ | Bouton « Faire un don » → HelloAsso | En-tête | En-tête, accueil (×2), Projets, Nous soutenir (« Abonnement »), pied de page |
| ☑ | Téléphone +33 6 32 98 72 47 | Pied de page, Contact | Pied de page, Contact, Mentions légales |
| ☑ | E-mail songo.education@gmail.com | Pied de page, Contact | Pied de page, Contact, Mentions légales, Données personnelles |
| ☑ | Instagram, Facebook | Pied de page | Pied de page, Contact, menu mobile |
| ☑ | Texte « À propos de nous » + devise | Pied de page | Pied de page |
| ☑ | « © 2023 by Mélody Mboli » | Pied de page | Pied de page (modifiable) |
| ☑ | Liens Mentions légales / Données personnelles | Pied de page | Pied de page |
| ☑ | Menu et sous-menus | Qui sommes-nous ▸ (Valeurs, Équipe, Organisation) ; S'informer ▸ (Actualités, Ressources) | Identiques |
| ☑ | Formulaire de contact (Nom, E-mail, Sujet, Message) | Wix | Web3Forms (étape 8) |
| ☑ | Favicon | Oui | Oui (+ icône pour l'écran d'accueil des téléphones) |
| ☑ | PDF « Sensibilisation à l'INSA » | Hébergé chez Wix | Copié dans le site (`/assets/documents/`) |

### Contenus volontairement non repris ou modifiés

| Page | Ancien contenu | Décision |
|---|---|---|
| Nous soutenir | Texte d'exemple Wix sous « Matériel » | Rubrique retirée (validé) |
| Mentions légales | Hébergeur WIX (Dublin) | Remplacé par GitHub Pages ; crédits Unsplash et polices ajoutés |
| Données personnelles | « L'hébergeur WIX permet de mesurer le nombre de visites… » | Réécrit : aucun traceur, formulaire Web3Forms, lettre Brevo, droits RGPD. La définition CNIL du cookie est conservée mot pour mot |
| Accueil | Titres « Nos projets » et « Partenaires » aux liens inversés | Corrigés |
| Équipe | Fiche de Bien-Aimé BOKORO | Conservée avec la mention « In memoriam (21 avril 1973 - 04 avril 2026) » (validé) |
| Partenaires | — | Ajout de la Fondation de France, EDA, Ordisol et Occitanie Coopération (validé) |
| Partout | Coquilles (nécéssaires, dénomée, Le Bourse…) | Corrigées (validé) |
| Partout | Titres en MAJUSCULES | Écrits en minuscules accentuées, plus lisibles (la mise en forme change, pas les mots) |
| Articles | Boutons Wix (« Plus d'actions », recherche, « Imprimer le post ») | Remplacés par des liens de partage sans traceur et « Article précédent / suivant » |

### Nouveautés

- **Site animé** : vidéo d'origine en fond d'accueil (avec bouton pause), diaporama « Ils nous ont fait confiance » qui défile seul (accueil et Nous soutenir), photos qui s'agrandissent au clic avec navigation d'une photo à l'autre (articles, équipe, valeurs, partenaires…). Les animations s'arrêtent automatiquement pour les personnes qui ont réduit les animations sur leur appareil.
- Bloc **« Dernières actualités »** sur l'accueil (3 derniers articles, automatique), chiffres clés, appel au don.
- Lien **« Aller au contenu »** pour la navigation au clavier, contrastes conformes, menu utilisable au clavier et sur mobile.
- **SEO** : titre et description pour chaque page, balises Open Graph (aperçu sur les réseaux), `sitemap.xml`, flux RSS des actualités, page 404 en français.
- **Aucun cookie ni traceur**, polices hébergées sur le site.

