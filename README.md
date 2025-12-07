# Déploiement Netlify – Projet E-commerce (Vue.js)

## Fonctionnalités obligatoires

- **Liste dynamique des produits** depuis **MockAPI**
- **Ajout d’un produit au panier**
- **Liste dynamique des produits du panier**
- **Calcul dynamique du total HTVA**
- **Modification de la quantité** des produits dans le panier
- **Suppression** des produits du panier

---

## Structure du projet

### Store `products`

- Basé sur un fichier `DB.js`
- Contient les appels à MockAPI et la logique pour gérer les produits

### Store `shoppingCart`

- Gère l'état du panier (produits, quantités, total, etc.)

---

## Fonctionnalités optionnelles

- **Calcul dynamique de la TVA**
- **Modification des frais de port**
- **Sauvegarde du panier dans le `localStorage`** via un _watcher_
- Boutons UI créés en composants :
  - `./components/ui/MyButton.vue`

---
