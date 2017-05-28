// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCPZb_SgR67qOM9RvgtvJJVJtuM24fqADs',
    authDomain: 'ng2-business-app.firebaseapp.com',
    databaseURL: 'https://ng2-business-app.firebaseio.com',
    projectId: 'ng2-business-app',
    storageBucket: 'ng2-business-app.appspot.com',
    messagingSenderId: '692928847401'
  }
};