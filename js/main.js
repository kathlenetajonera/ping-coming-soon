const emailField = document.querySelector("#email")
const submitBtn = document.querySelector("#submit")
const resultText = document.querySelector(".result")

emailField.addEventListener("input", () => {
    if (!emailField.value) {
        emailField.classList.remove("error")
        resultText.classList.add("hide")
    }
})

submitBtn.addEventListener("click", e => {
    e.preventDefault()

    validateEmail(emailField.value)
})

function validateEmail(userEmail) {
    const emailPattern = /^([\w-\.])+@([a-z\-]{4,6}\.)([\w]{2,3})(\.[a-z]{2,3})?$/i

    if (!userEmail.match(emailPattern)) {
        if (!userEmail) {
            emailField.classList.add("error")
            showError("empty")
        } else {
            emailField.classList.add("error")
            showError("invalid")
        }
    } else {
        emailField.classList.remove("error")
        emailField.value = ""
        emailField.focus()

        resultText.classList.add("hide")
    }
}

function showError(err) {
    resultText.classList.remove("hide")

    switch (err) {
        case "invalid":
            resultText.textContent = "Please provide a valid email address"
            break;
        case "empty":
            resultText.textContent = "Whoops! It looks like you forgot to add your email"
    }
}