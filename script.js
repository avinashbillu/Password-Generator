function generate() {
  const length = document.getElementById("length").value;
  let pool = "";

  if (document.getElementById("lower").checked) pool += "abcdefghijklmnopqrstuvwxyz";
  if (document.getElementById("upper").checked) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (document.getElementById("digits").checked) pool += "0123456789";
  if (document.getElementById("symbols").checked) pool += "!@#$%^&*()_-+=<>?/{}[]|";

  if (pool === "") {
    document.getElementById("password").innerText = "⚠️ Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }

  document.getElementById("password").innerText = password;
  document.getElementById("strength").innerText = "Strength: " + checkStrength(password);
}

function checkStrength(pw) {
  let strength = "Weak";
  if (pw.length >= 12 && /[A-Z]/.test(pw) && /\d/.test(pw) && /\W/.test(pw)) {
    strength = "Strong";
  } else if (pw.length >= 8 && (/[A-Z]/.test(pw) || /\d/.test(pw))) {
    strength = "Medium";
  }
  return strength;
}

function copyPassword() {
  const pw = document.getElementById("password").innerText;
  if (!pw || pw.startsWith("⚠️")) {
    alert("No valid password to copy!");
    return;
  }
  navigator.clipboard.writeText(pw);
  alert("✅ Password copied to clipboard!");
}
