import CryptoJS from 'crypto-js';

const secretKey = 'chola-one';

export function encryptText(value) {

  const encryptedText = CryptoJS.AES.encrypt(value,secretKey).toString();
  // localStorage.setItem(key, encryptedText);
//    console.log(encryptedText, encryptedText,'text, encryptedText')
  return encryptedText;
}

export function decryptData(value) {
    // console.log(key,'encryptedText')
    // const secretKey = 'chola-one';
  //  const encryptedText= localStorage.getItem(key);
  const decryptedText = CryptoJS.AES.decrypt(value,secretKey).toString(CryptoJS.enc.Utf8);

  return decryptedText;
}



// export function decryptData(encryptedText) {
//     console.log(decryptedText,'decryptedText')
//     const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
//     const originalKey = Object.keys(localStorage).find(key => localStorage.getItem(key) === encryptedText);
//     console.log(originalKey, decryptedText,'originalKey, decryptedText')
//     localStorage.setItem(originalKey, decryptedText);
//     console.log(decryptedText,'decryptedTextdecryptedText')
//     return decryptedText;
//   }
// export function decryptData(encryptedText) {
//     console.log(encryptedText,'encryptedText')
//     const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
//     const originalKey = Object.keys(localStorage).find(key => localStorage.getItem(key) === encryptedText);
//     localStorage.setItem(originalKey, decryptedText);
//     console.log(originalKey, decryptedText, 'originalKey, decryptedText');
//     return decryptedText;
//   }

export default {
  encryptText,
  decryptData
};