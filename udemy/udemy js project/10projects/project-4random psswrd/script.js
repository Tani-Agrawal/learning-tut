const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  const lengthOfPassword = 8; // you can change length here
  let password = "";

  for (let i = 0; i < lengthOfPassword; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordBox.value = password;
};

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
  const passwordCopy = passwordBox.value.trim();
  if (!passwordCopy) {
    alert("No Password to copy! Please generate a password first."); 
    return; // stop execution
  }

  navigator.clipboard.writeText(passwordCopy)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});
