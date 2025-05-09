## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tarasoffy/octy.git
cd octy
```

## Step 2: Install Dependencies

npm install
# or
yarn

## Step 3: Install iOS Pods

cd ios
pod install
cd ..

## Step 4: (Optional) Clean Android Build

cd android
./gradlew clean
cd ..

## Step 5: Add Environment Variables

Use the site api https://swop.cx/

Create a .env file in the root directory and add the following.

API_KEY=your_api_key_here

## Step 6: Run the App

npm start

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Librarys used

| **Library**                                | **Version**   | **Purpose**                                                                 |
|--------------------------------------------|---------------|-----------------------------------------------------------------------------|
| `@react-native-async-storage/async-storage` | ^2.1.2        | Provides an asynchronous key-value storage system for React Native apps.    |
| `@react-native-community/netinfo`          | ^11.4.1       | Used to check the network state (e.g., if the device is online or offline). |
| `@react-navigation/bottom-tabs`            | ^6.6.1        | Implements a bottom tab navigation in a React Native app.                   |
| `@react-navigation/native`                 | ^6.1.18       | Core navigation library for React Native, providing common navigation patterns. |
| `@react-navigation/stack`                  | ^6.4.1        | Provides stack navigation, used to navigate between screens in a stack-like manner. |
| `react-native-dotenv`                      | ^3.4.11       | Allows you to manage environment variables in React Native projects.        |
| `react-native-gesture-handler`             | ^2.18.1       | Enables gesture handling in React Native, such as swipe gestures, drag events, etc. |
| `react-native-responsive-screen`           | ^1.4.2        | Helps create responsive layouts that adjust based on screen size.          |
| `react-native-safe-area-context`           | ^4.10.8       | Provides a safe area context, ensuring your app's UI fits within the screen's safe area. |
| `react-native-screens`                     | ^3.33.0       | Optimizes screen rendering in React Navigation for better performance.      |
| `react-native-svg`                         | ^15.11.2      | Provides an SVG implementation for React Native to render vector graphics. |
| `react-native-svg-transformer`             | ^1.5.1        | Allows for SVG imports to be used directly in React Native projects.        |
| `zustand`                                  | ^5.0.4        | A state management library for React with a simple API and minimal boilerplate. |


### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
