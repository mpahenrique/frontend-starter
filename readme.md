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

##### Packages
  - [browser-sync](https://www.npmjs.com/package/browser-sync) - Keep multiple browsers & devices in sync when building websites.
  - [gulp](https://www.npmjs.com/package/gulp) - The streaming build system
      - [clean-css](https://www.npmjs.com/package/gulp-clean-css) - gulp plugin to minify CSS, using clean-css
      - [imagemin](https://www.npmjs.com/package/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images with imagemin
      - [pxtorem](https://www.npmjs.com/package/gulp-pxtorem) - This is a Gulp plugin for postcss-pxtorem
      - [sass](https://www.npmjs.com/package/gulp-sass) - Sass plugin for Gulp
      - [sourcemap](https://www.npmjs.com/package/gulp-sourcemaps) - Source map support for Gulp
      - [uglify](https://www.npmjs.com/package/gulp-uglify) - Minify JavaScript with UglifyJS2.
      - [nunjucks](https://www.npmjs.com/package/gulp-nunjucks) - Compile/precompile Nunjucks templates
  - [watchify](https://www.npmjs.com/package/watchify) - watch mode for browserify builds
  - [dom-manipulator](https://www.npmjs.com/package/dom-manipulator) - The Dom Manipulator allows you to manipulate HTML elements simply and objectively without unnecessary attributes.
  - [es5-shim](https://www.npmjs.com/package/es5-shim) - ECMAScript 5 compatibility shims for legacy JavaScript engines
  - [html5shiv](https://www.npmjs.com/package/html5shiv) - The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling
  - [localstorage-manipulator](https://www.npmjs.com/package/localstorage-manipulator) - Get and save data in localStorage easily
  - [xhrt](https://www.npmjs.com/package/xhrt) - The XHRTransfer allows you to send a service method passing a URL, a Data and a fallback, if necessary.
  - [validate-my-form](https://www.npmjs.com/package/validate-my-form) - A form validator to validate input[required] fields
  - [mask-form](https://www.npmjs.com/package/mask-form) - A mask to input[mask] fields

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