/**
 * @file firebaseCalls.js
 * @copyright Ryan Yang 2019
 * @summary - A set of functions to help organize all the server calls
 * in one place
 */

import * as firebase from 'firebase/app';
import 'firebase/firestore';

let db;

/**
 * @function init
 * @description initializes the firestore and fb auth 
 */
let init = (userID) => {
    db = firebase.firestore();
    db.enablePersistence();
    sessionStorage.setItem('uid', userID);
}
/**
 * @function getDrinks
 * @param {*} onSuccess
 */
let getStats = ( onSuccess, onFail ) => {
    db.collection( 'users' )
    .doc(sessionStorage.getItem('uid'))
    .collection( 'user' )
    .doc( 'stats' )
    .get()
    .then( ( resp ) => {
        onSuccess( resp.data() );
    }).catch((error) => {
        onFail(error);
    });
}


export default {
    init: init,
    getStats: getStats
}