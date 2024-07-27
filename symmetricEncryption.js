const crypto = require('crypto');

// Membuat key and IV
const key = crypto.randomBytes(32);  // 256-bit key
const iv = crypto.randomBytes(16);   // 128-bit IV

// function Enkripsi
function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// function Deskripsi
function decrypt(encrypted, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Contoh Penerapan
const message = "This is a secret message";
const encrypted = encrypt(message, key, iv);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted, key, iv);
console.log("Decrypted:", decrypted);
