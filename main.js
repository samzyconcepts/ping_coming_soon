const form = document.getElementById("form"),
    email = document.getElementById("email"),
    error = document.querySelector("small");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validate email
    if (email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {

        error.classList.remove("error");
        email.style.border = "";
        email.value = "";
    } else {
        email.style.borderColor = "#FF5466";
        error.classList.add("error");
        email.value = "";
        email.placeholder = "example@email/com";

        setTimeout(() => {
            error.classList.remove("error");
            email.style.border = "";
            email.value = "";
        }, 3000);
    };
});
