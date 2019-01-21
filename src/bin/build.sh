#!/bin/bash

echo 'Building optimized production code'
rm -rf ../dist && \
npm install --unsafe-perm && \
./node_modules/gulp/bin/gulp.js build-release