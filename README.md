# BaseApp (Expo + Expo Router) — Template stable

Template mobile Expo basé sur `expo-template-tabs`, transformé en base **login obligatoire** + **auth UI complète** (mock) + **persistance locale**.

## ✅ Fonctionnalités incluses
- Expo Router + Tabs
- Auth obligatoire (guard sur les tabs)
- État connecté/déconnecté (context)
- Persistance (AsyncStorage)
- Écrans Auth (UI + validations + loader)
  - Connexion
  - Inscription
  - Mot de passe oublié
- Profil (onglet) + Déconnexion

## 📁 Structure
- `app/`
  - `(auth)/`
    - `login.tsx`
    - `register.tsx`
    - `forgot-password.tsx`
  - `(tabs)/`
    - `index.tsx` (Accueil)
    - `profile.tsx` (Profil + logout)
    - `_layout.tsx` (tabs + guard)
  - `_layout.tsx` (root)
  - `index.tsx` (redirige vers tabs; le guard gère login)
- `src/auth/auth.tsx` (AuthProvider + persistance)

## ▶️ Lancer le projet
```bash
npm install
npm run start
```

