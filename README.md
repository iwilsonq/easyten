# Easyten

_An app by a runner for other runners who people whom otherwise should run_

## Project structure

```
── app
    ├── components
    │    ├── Card
    │    │    ├── index.js
    │    │    ├── Card.js
    │    │    └── styles.js
    │    └── TabBar
    │        ├── index.js
    │        ├── TabBar.js
    │        └── styles.js
    │
    ├── screens
    │    ├──Home.js
    │    ├──Profile.js
    │    └──Details.js
    ├── config
    │    ├──routes.js
    │    ├──settings.js
    │    └──styles.js
    └── index.js
```

Generally speaking, reuseable components will exist in the components directory, app screens (or possibly containers)
for higher order logic, and config for settings and route configuration.

Styles are kept separate from their components in order to make decomposing components easier.

For more info check out this (article)[https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0] on structuring a React Native project.
