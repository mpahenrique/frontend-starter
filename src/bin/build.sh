#!/bin/bash

node --version
npm --version

echo 'Installing frontend dependencies and building'
cd code && npm install --unsafe-perm && ./node_modules/gulp/bin/gulp.js video && ./node_modules/gulp/bin/gulp.js images && ./node_modules/gulp/bin/gulp.js build-release