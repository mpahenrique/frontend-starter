# Frontend-Starter

Frontend Starter is a framework to help you build web applications using organized and optimized structure. Each page has its JSON file, where you can declarate your theme componentes and modules.

##### Undestanding the structure:


```
├── app
│   ├── data                   # Pages authored location (JSON files)
│   ├── fonts                  # Fonts
│   ├── js
│   │   ├── 3rd-modules        # 3rd files (3rd scripts that need changes or improvements)
│   │   ├── config             # Config directory (Put here configuration files)
│   │   │   └── index.js       # Config file sample
│   │   ├── general            #
│   │   │   ├── index.js       # Global declarations
│   │   │   ├── modules.js     # All theme modules declaration
│   │   │   └── views.js       # Views declarations
│   │   ├── modules            # Modules directory
│   │   ├── index.js           # JS main file
│   │   │   └── module-type.js # Module sample file
│   │   ├── partials           # Partials location
│   │   ├── util               # Util js functions of your theme
│   │   └── views              # Views directory
│   │       └── index.js       # View/Page sample file
│   ├── markup                 # HTML directory
│   │   ├── layouts            # HTML structure templates (put here your base structure. Look sample) 
│   │   ├── modules            # HTML modules or components (Look sample file inside)
│   │   ├── partials           # HTML partials (buttons, cta, icons, etc. Look sample file inside)
│   │   └── views              # HTML view core file (only modify if you want to change view macro structure)
│   ├── pdf                    # PDF directory (put your site PDFs here)
│   ├── scss                   # SCSS directory
│   │   ├── 3rd-modules        # 3rd files (3rd scss that need changes or improvements)
│   │   ├── fonts              # Fontfaces directory
│   │   ├── modules            # Modules directory
│   │   ├── partials           # Partials directory
│   │   ├── util               # Util files
│   │   │   ├── general.scss   # General styles
│   │   │   ├── helpers.scss   # Helpers
│   │   │   ├── mixins.scss    # Mixins
│   │   │   ├── reset.scss     # Reset
│   │   │   └── variables.scss # Variables
│   │   ├── views              # Views directory
│   │   └── index.scss         # Main scss file
│   └── video
├── bin                        # Bin directory with installation and build scripts
│   ├── build.sh               # Production build script
│   ├── dev.sh                 # Dev build script
│   └── setup.sh               # Project setup
└── ...

```

### Installation
```sh
$ git clone git@github.com:mpahenrique/frontend-starter.git
$ cd frontend-starter/src
$ npm run setup
```

#### Usage (development mode)
###### In frontend-starter/src directory:
```sh
$ npm run dev
```

#### Usage (production mode)
###### In frontend-starter/src directory:
```sh
$ npm run build
```