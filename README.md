# 🚀 Codeavour

**Codeavour** is a high-performance cross-platform mobile application built with React Native 0.82. It utilizes the latest React 19 features, NativeWind for styling, and Reanimated for fluid UI interactions.


---

## 🛠 Tech Stack

* **Framework:** React Native 0.82.1 (New Architecture)
* **UI/Styling:** NativeWind (Tailwind CSS) & Vector Icons
* **Navigation:** React Navigation (Bottom Tabs)
* **Animations:** React Native Reanimated 4.2
* **Type Safety:** TypeScript 5.8

---

## ⚙️ Requirements

Before starting, ensure you have the following installed:

* **Node.js**: `v20.18.0` or higher
* **Yarn** or **npm**
* **Java SDK**: 17
* **CocoaPods**: For iOS development

---

## 📥 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shehzadali1214/Starter.App.git
cd Starter.App

```


2. **Install JavaScript dependencies:**
```bash
npm install

```


3. **Install iOS Dependencies (macOS only):**
```bash
npm run ios:pod

```


---

## ⌨️ Available Scripts

### 🛰 Development

| Command | Description |
| --- | --- |
| `npm run start` | Start the Metro Bundler |
| `npm run android` | Run the app on Android |
| `npm run ios` | Run the app on iOS |

### 🏗 Build & Release

| Command | Description |
| --- | --- |
| `npm run build:apk` | Generate APK via custom build script |
| `npm run android:release` | Assemble Release AAB/APK |
| `npm run android:clean` | Clean Gradle cache |

### 🛡 Quality & Maintenance

| Command | Description |
| --- | --- |
| `npm run typecheck` | Run TypeScript validation |
| `npm run lint` | Run ESLint check |
| `npm run test` | Run Jest unit tests |
| `npm run ios:pod:clean` | Deep clean and reinstall iOS Pods |

---

## 📁 Project Structure

```text
codeavour/
├── android/               # Android native project files
├── ios/                   # iOS native project files
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── navigation/        # Navigation configurations
│   └── screens/           # Main application screens
├── build-apk.js           # Custom build automation
├── tailwind.config.js     # NativeWind configuration
└── package.json           # Project metadata and dependencies

```

---

## 📝 Environment Configuration

This project uses `react-native-config`. Create a `.env` file in the root directory to manage your variables:

```env
API_URL=https://api.example.com
DEBUG=true

```

---

## 🤝 Contributing

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📲 Download App
You can download the latest development build (APK) directly from the link below:

[![Download APK](https://img.shields.io/badge/Download-Latest%20APK-brightgreen?style=for-the-badge&logo=android)](https://github.com/shehzadali1214/Starter.App/raw/main/app-release.apk)

> **Note:** If you are viewing this on GitHub, navigate to the `builds` folder in this repo and click on the `.apk` file to download.

---

## 🛠 Installation for Testers
1. **Download** the `.apk` file above.
2. **Transfer** the file to your Android device (if downloaded via PC).
3. **Open** the file on your device.
4. **Allow "Install from Unknown Sources"** in your Android settings if prompted.
5. **Launch** Codeavour! 🚀


---

⭐️ From the **Codeavour** Team.

Would you like me to help you set up the `tailwind.config.js` or provide a starter template for your `App.tsx`?