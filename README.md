# Vggo

This angular workspace include two projects:

1. vg-lib library project that will be published to npm registry. For details visit: https://www.npmjs.com/package/vg-lib

2. Example angular application project that use published vg-lib above.

## Run Development server to view example app
+ npm install
+ ng serve

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build vg-lib project and publish it to npm
+ Make your change and remember to update version in package.json 
+ Run `ng build vg-lib` to build the vg-lib project. The build artifacts will be stored in the `dist/` directory.
+ Move to dist folder, e.g. cd ./dist/vg-lib
+ Login npm account and then publish it: 
  npm login
  npm publish