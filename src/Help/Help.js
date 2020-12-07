import {fire} from '../Firebase/Firebase';
import React from "react";

/*** ================================================================================
 *          JSON's
 * ================================================================================*/
export const userJson = {
    position: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    dateCreation: "",
    dateUpdate: "",
    status: "",
    uid: "",
    balance: 0,
    auto: [],
};
export const autoJson = {
    dateCreation: '',
    uid: '',
    fullName: '',
    carBrand: '',
    VIN: '',
    purchaseDate: '',
    auctionPrice: '',
    insurance: '',
    dateOfPayment: '',
    deliveryAmount: '',
    deliveryPaymentDate: '',
    buttonCost: '',
    dateOfPaymentButton: '',
    photoUSA: '',
    photoPortUkraine: '',
    release: false,
    complexCost: '',
    dateOfPaymentComplex: '',
    line: '',
    container: '',
    arrivalDate: '',
    totalAmount: '',
    notes: '',
};



/*** ================================================================================
 *          Parse Date
 * ================================================================================*/
export function getDateFromMilliseconds(num){
    const date = new Date(num);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getUTCDate()+ ' ' + date.getHours()+ ':' + date.getMinutes();
}
export function getDate() {
    const date = new Date();
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getUTCDate()+ ' ' + date.getHours()+ ':' + date.getMinutes() + ':' + date.getSeconds();
}
/*** ================================================================================
 *          Firebase
 * ================================================================================*/
export function createUser(user) {
    return new Promise(function (resolve, reject) {
        user.dateCreation = getDate();
        user.dateUpdate = getDate();
        fire.auth().createUserWithEmailAndPassword(user.email, user.password).then( r => {
            user.uid = r.user.uid;
            user.password = 'secret';
            fire.firestore().collection('users').add(user).then( res => {
                resolve(res);
            }).catch( err => {
                reject(err.message);
            })
        }).catch( err => {
            reject(err.message);
        });
    });
}
export function getCollection(collection) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).get().then( res => {
            var data = [];
            res.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch( err => {
            reject(err);
        });
    });
}
export function getCollectionWhereKeyValue(collection, key, value) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).where(key,"==", value).get().then( res => {
            var data = [];
            res.forEach(doc => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch( err => {
            reject(err);
        });
    });
}
export function setDocumentToCollection(collection, document) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).add(document)
                .then(r => {
                    resolve({result:r});
                }).catch(e => {
                reject(e);
            })
        }catch (e) {
            reject(e);
        }
    })
}
export function updateDocumentInCollection(collection, idDocumnent, document) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idDocumnent).update(document).then(r => {
                resolve({result: r})
            }).catch(e => {
                reject(e);
            })
        }catch (e) {
            reject(e);
        }
    })
}
export function deleteDocumentFromCollectionWithID(collection, idPost) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idPost).delete()
                .then( result => {
                    resolve(result)
                }).catch(function(error) {
                reject(error)
            });
        }catch (e) {
            reject(e)
        }
    })
}
/*** ================================================================================
 *          Log
 * ================================================================================*/
export function sendLog(text, state) {
    return new Promise(function (resolve, reject) {
        try {
            // fire.firestore().collection('log').add({
            //     dateCreation: getDate(),
            //     text: text,
            //     state: state,
            // }).then( res => {
            //     resolve(res);
            // }).catch( err => {
            //     reject(err.message);
            // })
            resolve("res");
        }catch (e) {
            // fire.firestore().collection('log').add({
            //     dateCreation: getDate(),
            //     text: "Error add Log",
            // }).then( res => {
            //     resolve(res);
            // }).catch( err => {
            //     reject(err.message);
            // })
            reject("err.message");
        }
    });
}














