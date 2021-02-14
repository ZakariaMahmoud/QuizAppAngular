// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebaseConfig } from './firebase';
export const environment = {
  production: false,
  firebase: firebaseConfig
};

// in firebase file past this code
/* export const firebaseConfig = {
  apiKey: "****************************",
  authDomain: "****************************",
  databaseURL: "****************************",
  projectId: "****************************",
  storageBucket: "****************************",
  messagingSenderId: "****************************",
  appId: "****************************",
  measurementId: "****************************",
};

*/
