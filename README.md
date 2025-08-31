<h1 align="center">🍽️ Recipe Finder – React Native Mobile App 🍽️</h1>


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
| Backend API | Your API (Express + PostgreSQL) |
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


---

## 📲 Try It Now
| Platform | Link |
| -------- | ---- |
| Expo Go  | Scan QR shown after `npx expo start` |

Backend health-check:  
`https://your-recipe-finder-api.onrender.com/api/health`

---

## 🤝 Contributing
1. Fork → create branch  
2. `npm run lint` before commit  
3. Open PR 🎉

---


-- free to use, modify, share.

