document.addEventListener("DOMContentLoaded", function () {
// Pobieramy elementy formularza logowania
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");

// sprawdź czy wszystkie elementy zostały pobrane poprawnie 
  if (loginForm && loginButton && loginErrorMsg) {
    loginButton.addEventListener("click", function (e) {
      e.preventDefault();
// pobierz nazwę użytkownika i hasło z formularza
      const username = loginForm.querySelector("#username-field").value;
      const password = loginForm.querySelector("#password-field").value;
 
// Sprawdź czy login i hasło się zgadzają (są puste)
      if (username === "" && password === "") {
	// jeśli się zgadzają to wyświetlamy komunikat
        alert("You have successfully logged in.");
        location.reload();
      } else {
	// jeśli są wprowadzone dane (złe login i hasło) wyskakuje komunikat błędu
        loginErrorMsg.style.opacity = 1;
      }
    });
  }
});