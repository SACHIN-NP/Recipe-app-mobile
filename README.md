<h1 align="center">🍽️ Recipe Finder – React Native Mobile App 🍽️</h1>

<p align="center">
  <img src="assets/images/screenshot-for-readme.png" alt="App demo" width="300" />
</p>

---

## ✨ Highlights

- 🔐 Signup, Login & 6-digit email verification with **Clerk**
- 🍳 Browse featured recipes & filter by categories
- 🔍 Real-time search with debounced queries
- 🎥 Recipe detail pages embed YouTube tutorials
- ❤️ Add / remove favorites (persisted via backend API)
- 🌈 8 ready-made color themes
- ⚡ Tech stack React Native • Expo • Express • PostgreSQL
- 🔗 Data source [TheMealDB](https://www.themealdb.com/) (free tier)
- 🆓 100 % free services – no paid tiers required

---

## 🔗 Related Repositories

| Layer      | Repository |
| ---------- | ---------- |
| Backend API | <https://github.com/SACHIN-NP/Recipe-finder-api> (Express + PostgreSQL) |
| Mobile App | **this repo** |

---

## 🧪 Environment Variables

Create a `.env` file in the project root:

##Recipe-app-mobile
```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
API_URL=https://recipe-finder-api.onrender.com/api
```

---

## 🚀 Quick Start
| Step | Command |
| ---- | ------- |
| Install deps | `npm install` |
| Run Expo dev server | `npx expo start` |
| Cloud Android build | `eas build --platform android` |
| Local APK build | `eas build --platform android --local --output app.apk` |

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 📂 Project Structure

Recipe-app-mobile
├── app/ # Expo Router pages
├── components/ # Reusable UI
├── constants/ # Themes, images
├── hooks/ # Custom hooks
├── services/ # API helpers
└── assets/images/… # Screenshots, icons


---

## 📲 Try It Now
| Platform | Link |
| -------- | ---- |
| Android  | Latest APK (GitHub → Releases) |
| Expo Go  | Scan QR shown after `npx expo start` |
| Web (optional) | <https://recipe-finder.vercel.app> |

Backend health-check:  
`https://recipe-finder-api.onrender.com/api/health`

---

## 🤝 Contributing
1. Fork → create branch  
2. `npm run lint` before commit  
3. Open PR 🎉

---


-- free to use, modify, share.

