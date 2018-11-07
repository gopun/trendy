// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  server: 'http://localost:3000'
};

export const firebaseconfig = {
  apiKey: "AIzaSyApqNLW2K7jlEJga98KabjCDk9gqewLPXo",
    authDomain: "trendy-1540566976564.firebaseapp.com",
    databaseURL: "https://trendy-1540566976564.firebaseio.com",
    projectId: "trendy-1540566976564",
    storageBucket: "trendy-1540566976564.appspot.com",
    messagingSenderId: "513358115253"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
