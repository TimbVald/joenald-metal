# Joenald Metal - Site Vitrine Professionnel

Ce projet est un site web vitrine professionnel pour Joenald Metal, conçu pour présenter l'activité, les réalisations et permettre aux clients de prendre contact. Le site est responsive, optimisé pour le SEO et offre une expérience utilisateur moderne.

## Technologies Utilisées

*   **Next.js** (Framework React) : Pour le rendu côté serveur (SSR), la génération de sites statiques (SSG) et une performance optimale.
*   **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
*   **Tailwind CSS** : Framework CSS utilitaire pour un stylisme rapide et responsive.
*   **TypeScript** : Pour un typage statique et une meilleure maintenabilité du code.

## Structure du Projet

Le projet suit la structure standard d'une application Next.js avec le répertoire `app` pour le routage et les composants.

*   `src/app/` : Contient les pages de l'application.
    *   `layout.tsx` : Le layout principal du site, incluant la navigation.
    *   `page.tsx` : La page d'accueil.
    *   `about/page.tsx` : La page "À propos".
    *   `projects/page.tsx` : La page "Projets/Galerie".
    *   `contact/page.tsx` : La page "Contact" avec un formulaire.
    *   `globals.css` : Styles globaux et importation de Tailwind CSS.
*   `public/` : Contient les assets statiques (images, icônes).
*   `tailwind.config.js` : Configuration de Tailwind CSS.
*   `postcss.config.mjs` : Configuration de PostCSS.
*   `package.json` : Liste des dépendances et scripts du projet.
*   `tsconfig.json` : Configuration TypeScript.

## Installation et Lancement (Développement)

Pour lancer le projet en mode développement sur votre machine locale :

1.  **Cloner le dépôt :**
    ```bash
    git clone [URL_DU_DEPOT]
    cd joenald-metal
    ```
2.  **Installer les dépendances :**
    ```bash
    pnpm install
    ```
3.  **Lancer le serveur de développement :**
    ```bash
    pnpm dev
    ```
    Le site sera accessible à l'adresse `http://localhost:3000`.

## Construction et Déploiement

Pour construire l'application pour la production :

```bash
pnpm build
```

Cela créera une version optimisée de votre application dans le dossier `.next`.

Pour lancer l'application en production localement :

```bash
pnpm start
```

Pour le déploiement, vous pouvez utiliser des plateformes comme Vercel, Netlify, ou tout autre hébergeur supportant les applications Next.js.

## Guide d'Utilisation (pour le client)

Ce guide vous aidera à gérer le contenu de votre site web.

### Mise à jour du contenu textuel

Le contenu textuel de chaque page est directement modifiable dans les fichiers `.tsx` correspondants :

*   **Page d'accueil :** `src/app/page.tsx`
*   **Page "À propos" :** `src/app/about/page.tsx`
*   **Page "Projets/Galerie" :** `src/app/projects/page.tsx`
*   **Page "Contact" :** `src/app/contact/page.tsx`

Pour modifier un texte, ouvrez le fichier `.tsx` de la page concernée et éditez le texte entre les balises HTML (par exemple, `<p>Votre texte ici</p>`).

### Ajout de projets à la galerie

Pour ajouter de nouveaux projets à la page "Projets/Galerie" (`src/app/projects/page.tsx`), vous pouvez dupliquer la structure d'un élément de projet existant dans la section `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">` et y ajouter vos informations :

```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-2">Nom du Nouveau Projet</h2>
  <p className="text-gray-700 dark:text-gray-300">Description détaillée du nouveau projet.</p>
  {/* Vous pouvez ajouter une image ici : */}
  {/* <img src="/images/nouveau-projet.jpg" alt="Nouveau Projet" className="mt-4 rounded-lg" /> */}
  {/* Ou un lien vers une page de détails si vous en créez une : */}
  {/* <a href="/projects/nouveau-projet" className="text-blue-600 hover:underline mt-2 block">En savoir plus</a> */}
</div>
```

N'oubliez pas d'ajouter les images de vos projets dans le dossier `public/images/` (vous devrez créer ce dossier si ce n'est pas déjà fait) et de les référencer correctement.

### Formulaire de contact

Le formulaire de contact sur la page `src/app/contact/page.tsx` est une interface utilisateur. Pour que les messages soient envoyés, il faudra intégrer un service de backend (par exemple, une API Route Next.js, un service comme Formspree, ou un backend personnalisé) qui traitera l'envoi des emails. Cette partie n'est pas incluse dans le livrable actuel et nécessitera un développement supplémentaire.

## Code Source

Le code source complet du projet est disponible dans ce dépôt. Chaque composant et page est structuré de manière claire et utilise des conventions de nommage standard.

## Version de Déploiement

Une fois le projet construit (`pnpm build`), le dossier `.next` contient la version optimisée et prête à être déployée.

---
Ce site a été généré par votre assistant IA.

