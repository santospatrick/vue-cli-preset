# Contributing

## App structure

```bash
├── your-project/
│   ├── src/
│   │   ├── components/ # components that can be used/reused everywhere
│   │   ├── network/ # axios instances (multiple) and websocket connections config
│   │   ├── modules/
│   │   │   ├── your-module/
│   │   │   │   ├── forms/
│   │   │   │   ├── pages/ # each page .vue file
│   │   │   │   ├── services/ # services that can or cannot be used by other modules
│   │   │   │   ├── store/ # vuex store: actions, getters, mutations and state
│   │   │   │   ├── routes.js # importing all routes from ./pages
│   │   │   │   └── index.js # public exports
│   │   ├── App.vue # menu + app
│   │   ├── router.js # routes config
│   │   └── store.js # vuex modules config
│   ├── jsconfig.json # vscode intellisense
│   └── mock.json # mock data served at "yarn mock" command
```