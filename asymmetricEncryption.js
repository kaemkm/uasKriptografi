const crypto = require('crypto');

// Membuat keys
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// function Enkripsi
function encrypt(text, publicKey) {
  const buffer = Buffer.from(text, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}

// function Deskripsi
function decrypt(encrypted, privateKey) {
  const buffer = Buffer.from(encrypted, 'base64');
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString('utf8');
}

// Contoh Penerapan
const message = "This is a secret message";
const encrypted = encrypt(message, publicKey);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, privateKey);
console.log("Decrypted:", decrypted);
