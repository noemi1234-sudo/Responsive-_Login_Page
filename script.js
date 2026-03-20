document.addEventListener('DOMContentLoaded', function () {

  const loginForm = document.getElementById('loginForm');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const submitButton = document.getElementById('submitButton');
  const errorDiv = document.getElementById('errorMessage');

  // Button am Anfang deaktivieren
  submitButton.disabled = true;

  // Fehlermeldungen sollen anfangs sichtbar sein
  errorDiv.textContent = "Bitte Vorname eingeben.\nBitte Nachname eingeben.";

  // Event Listener
  firstName.addEventListener('input', validateForm);
  lastName.addEventListener('input', validateForm);

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const first = firstName.value.trim();
    const last = lastName.value.trim();

    alert(`Erfolgreich abgeschickt!\nVorname: ${first}\nNachname: ${last}`);

    loginForm.reset();
    submitButton.disabled = true;
    errorDiv.textContent = "Bitte Vorname eingeben.\nBitte Nachname eingeben.";
  });

  function validateForm() {
    const first = firstName.value.trim();
    const last = lastName.value.trim();
    const minLength = 2;

    let messages = [];


    if (!first) {
      messages.push("Bitte Vorname eingeben.");
    } else if (first.length < minLength) {
      messages.push(`Vorname muss mindestens ${minLength} Zeichen haben.`);
    }

    if (!last) {
      messages.push("Bitte Nachname eingeben.");
    } else if (last.length < minLength) {
      messages.push(`Nachname muss mindestens ${minLength} Zeichen haben.`);
    }

    errorDiv.textContent = messages.join("\n");

    submitButton.disabled = messages.length > 0;
  }

});
