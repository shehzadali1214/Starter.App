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

Got it! Since you’re using **Yarn** instead of npm, we just need to adjust the commands in your README accordingly. Here's the updated version with **Yarn** commands:

---

## 📥 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/shehzadali1214/Starter.App.git
cd Starter.App
```

2. **Install JavaScript dependencies:**

```bash
yarn install
```

3. **Install iOS Dependencies (macOS only):**

```bash
yarn ios:pod
```

---

## ⌨️ Available Scripts

### 🛰 Development

| Command        | Description             |
| -------------- | ----------------------- |
| `yarn start`   | Start the Metro Bundler |
| `yarn android` | Run the app on Android  |
| `yarn ios`     | Run the app on iOS      |

### 🏗 Build & Release

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `yarn build:apk`       | Generate APK via custom build script |
| `yarn android:release` | Assemble Release AAB/APK             |
| `yarn android:clean`   | Clean Gradle cache                   |

### 🛡 Quality & Maintenance

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `yarn typecheck`     | Run TypeScript validation         |
| `yarn lint`          | Run ESLint check                  |
| `yarn test`          | Run Jest unit tests               |
| `yarn ios:pod:clean` | Deep clean and reinstall iOS Pods |

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

## Download yarn for Windows

[![Download Yarn](https://img.shields.io/badge/Yarn-Download&download)](https://classic.yarnpkg.com/latest.msi)

1. npm install --global yarn
2. use in PowerShell : `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`
3. use in PowerShell : Set-ExecutionPolicy AllSigned

⭐️ From the **Codeavour** Team.

Would you like me to help you set up the `tailwind.config.js` or provide a starter template for your `App.tsx`?