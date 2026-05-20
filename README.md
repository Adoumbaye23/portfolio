# Site personnel — Adoumbaye MADJYAM

Site web professionnel destiné à valoriser le profil d'un **Statisticien-Économiste** et **Ingénieur des Travaux Statistiques**.

---

## 1. Aperçu

- **Pages** : Accueil (À propos), Mes travaux, Formations & Consultance, Contact
- **Design** : palette **bleu & blanc**, professionnel et sobre
- **Police** : **Tahoma** (Geneva en repli)
- **Technos** : HTML5, CSS3, JavaScript vanilla — aucune dépendance externe
- **Responsive** : adapté mobile, tablette et bureau

---

## 2. Arborescence du projet

```
Site Web/
│
├── index.html                  # Accueil + À propos + Compétences
├── travaux.html                # Travaux réalisés (avec filtres par domaine)
├── services.html               # Formations et consultance
├── contact.html                # Coordonnées + formulaire
├── README.md                   # Ce fichier
│
├── css/
│   └── styles.css              # Feuille de style globale
│
├── js/
│   └── main.js                 # Menu mobile, filtres, formulaire
│
├── assets/
│   └── img/                    # Photos, logos, illustrations
│
└── pdfs/                       # Travaux téléchargeables, classés par domaine
    ├── analyse-descriptive/
    ├── econometrie/
    ├── logiciels-statistiques/
    ├── intelligence-artificielle/
    └── memoires-rapports/
```

---

## 3. Personnalisation rapide

### a) Photo de profil
Déposer la photo dans `assets/img/photo.jpg`, puis dans `index.html`, à la section **À propos**, remplacer :

```html
<div class="about-photo">MAM</div>
```

par :

```html
<div class="about-photo"><img src="assets/img/photo.jpg" alt="Photo de profil"></div>
```

### b) Coordonnées
Modifier dans `contact.html` :
- numéro de téléphone (`tel:+221...`)
- lien LinkedIn (remplacer le `#`)
- toute autre information personnelle

### c) Ajouter un nouveau travail (PDF)
1. Déposer le fichier PDF dans le sous-dossier approprié de `pdfs/` (ex. `pdfs/econometrie/mon-etude.pdf`).
2. Ouvrir `travaux.html` et **dupliquer une fiche** existante :

```html
<div class="travail-card" data-category="econometrie">
    <div class="travail-icon">📐</div>
    <div class="travail-body">
        <span class="travail-tag">Économétrie</span>
        <h4>Titre du travail</h4>
        <p>Brève description du document.</p>
        <a class="travail-link" href="pdfs/econometrie/mon-etude.pdf" target="_blank" rel="noopener">Consulter le PDF →</a>
    </div>
</div>
```

3. Adapter `data-category`, le titre, la description et le lien. Les filtres fonctionneront automatiquement.

Catégories disponibles : `analyse-descriptive`, `econometrie`, `logiciels-statistiques`, `intelligence-artificielle`, `memoires-rapports`.

### d) Modifier les couleurs
Variables CSS définies en haut de `css/styles.css` (`:root`) :

```css
--bleu-primaire: #0a3d91;
--bleu-secondaire: #1565c0;
--bleu-clair: #e3f2fd;
--bleu-accent: #0277bd;
```

---

## 4. Tester le site en local

Ouvrir simplement `index.html` dans un navigateur (double-clic).

Pour un rendu plus fidèle (notamment chargement des PDFs), lancer un petit serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Puis ouvrir : http://localhost:8000
```

---

## 5. Mise en ligne — instructions détaillées

### Option A — GitHub Pages (gratuit, recommandé)

1. Créer un compte sur [https://github.com](https://github.com).
2. Créer un nouveau dépôt public, par ex. `mbaye-portfolio`.
3. Téléverser **tous les fichiers** du dossier `Site Web` à la racine du dépôt
   (via l'interface web : *Add file → Upload files*, ou via Git en ligne de commande).
4. Aller dans **Settings → Pages**.
5. Sélectionner :
   - Source : `Deploy from a branch`
   - Branch : `main` / dossier `/ (root)` → **Save**
6. Le site sera accessible sous quelques minutes à l'adresse :
   `https://votre-pseudo.github.io/mbaye-portfolio/`

### Option B — Netlify (gratuit, très simple)

1. Créer un compte sur [https://www.netlify.com](https://www.netlify.com).
2. Sur le tableau de bord : **Add new site → Deploy manually**.
3. Glisser-déposer le dossier `Site Web` complet.
4. Le site est en ligne immédiatement avec une URL `xxxx.netlify.app`.
5. Possibilité de connecter un **nom de domaine personnalisé** (ex. `mbaye-stat.com`).

### Option C — Hébergement classique (OVH, Hostinger, Infomaniak…)

1. Souscrire à une offre d'hébergement web (avec un nom de domaine).
2. Récupérer les **identifiants FTP** (hôte, utilisateur, mot de passe) auprès de l'hébergeur.
3. Installer un client FTP comme [FileZilla](https://filezilla-project.org/).
4. Se connecter au serveur.
5. Téléverser **tout le contenu** du dossier `Site Web/` dans le répertoire racine
   (souvent nommé `www/`, `public_html/` ou `htdocs/`).
6. Le site est accessible via votre nom de domaine.

### Option D — Vercel (gratuit)

1. Compte sur [https://vercel.com](https://vercel.com).
2. **Add New → Project → Import** depuis un dépôt GitHub (ou via CLI `vercel`).
3. Aucune configuration particulière (site statique). Déploiement automatique à chaque push.

---

## 6. Bonnes pratiques avant la mise en ligne

- [ ] Vérifier toutes les **fautes de frappe** dans les textes
- [ ] Renseigner la photo de profil dans `assets/img/`
- [ ] Compléter les **coordonnées** (téléphone, LinkedIn) dans `contact.html`
- [ ] Déposer les vrais fichiers PDF dans `pdfs/` et adapter les liens dans `travaux.html`
- [ ] Tester le site **sur mobile** (devtools du navigateur ou téléphone)
- [ ] Vérifier que tous les **liens internes** fonctionnent
- [ ] Optimiser les images (compression) si elles sont volumineuses

---

## 7. Évolutions possibles

- Ajout d'un blog (articles statistiques)
- Intégration d'un service d'envoi de formulaire en ligne (Formspree, Web3Forms)
- Ajout de Google Analytics ou Plausible pour le suivi de fréquentation
- Nom de domaine personnalisé (recommandé pour l'image professionnelle)

---

**Auteur** : Adoumbaye MADJYAM
**Contact** : madjyamadoumbaye23@gmail.com
