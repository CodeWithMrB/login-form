alert(window.innerWidth)

function checkPoint() {
    const username = document.getElementById('username')
    const usernameAlert = document.getElementById('usernameAlert')
    const password = document.getElementById('password')
    const passwordAlert = document.getElementById('passwordAlert')

    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@&*])(?=.*\d*).{8,}$/

    let emailValidate = false
    let passwordValidate = false

    if (username.value !== '' && emailRegExp.test(username.value)) {
        username.style.border = '2px solid #00ff00';
        username.style.backgroundColor = '#a7ff89';
        usernameAlert.innerText = '';
        usernameAlert.style.color = '#4dff25';
        emailValidate = true;
    }
    if (password.value !== '' && passwordRegExp.test(password.value)) {
        password.style.border = '2px solid #00ff00';
        password.style.backgroundColor = '#a7ff89';
        passwordAlert.innerText = '';
        passwordAlert.style.color = '#4dff25';
        passwordValidate = true;
    }

    if (username.value === '') {
        username.style.border = '2px solid #ff0000';
        username.style.backgroundColor = '#ff8989';
        usernameAlert.innerText = 'نام کاربری نمی تواند خالی باشد.';
        usernameAlert.style.color = '#ff2525';
        if (password.value === '') {
            password.style.border = '2px solid #ff0000';
            password.style.backgroundColor = '#ff8989';
            passwordAlert.innerText = 'گذرواژه نمیتواند خالی باشد';
            passwordAlert.style.color = '#ff2525';
            passwordValidate = false;
        } else {
            emailValidate = false;
        }
    }
    if (username.value !== '' && !emailRegExp.test(username.value)) {
        username.style.border = '2px solid #ff0000';
        username.style.backgroundColor = '#ff8989';
        usernameAlert.innerText = 'ایمیل باید حاوی علامت های @ و . باشد. لطفا ساختار ایمیل را به درستی رعایت کنید.';
        usernameAlert.style.color = '#ff2525';
        if (password.value !== '' && !passwordRegExp.test(password.value)) {
            password.style.border = '2px solid #ff0000';
            password.style.backgroundColor = '#ff8989';
            passwordAlert.innerText = 'گذرواژه باید حداقل 8 کاراکتر و حاوی حداقل یک حرف انگلیسی کوچک و یک حرف بزرگ داشته باشد و باید دارای یکی از علامت های @ یا & یا * باشد و میتواند شامل عدد باشد';
            passwordAlert.style.color = '#ff2525';
            passwordValidate = false;
        } else {
            emailValidate = false;
        }
    }

    if (emailValidate && passwordValidate) {
        return true
    } else {
        return false
    }
}

function userCheck() {
    const username = document.getElementById('username')
    const usernameAlert = document.getElementById('usernameAlert')

    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegExp.test(username.value)) {
        username.style.border = '2px solid #ff0000';
        username.style.backgroundColor = '#ff8989';
        usernameAlert.innerText = 'ایمیل باید حاوی علامت های @ و . باشد. لطفا ساختار ایمیل را به درستی رعایت کنید.';
        usernameAlert.style.color = '#ff2525';
    } else {
        username.style.border = '2px solid #00ff00';
        username.style.backgroundColor = '#a7ff89';
        usernameAlert.innerText = '';
        usernameAlert.style.color = '#4dff25';
    }

}
function passCheck() {
    const password = document.getElementById('password')
    const passwordAlert = document.getElementById('passwordAlert')

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@&*])(?=.*\d*).{8,}$/

    if (!passwordRegExp.test(password.value)) {
        password.style.border = '2px solid #ff0000';
        password.style.backgroundColor = '#ff8989';
        passwordAlert.innerText = 'گذرواژه باید حداقل 8 کاراکتر و حاوی حداقل یک حرف انگلیسی کوچک و یک حرف بزرگ داشته باشد و باید دارای یکی از علامت های @ یا & یا * باشد و میتواند شامل عدد باشد';
        passwordAlert.style.color = '#ff2525';
    } else {
        password.style.border = '2px solid #00ff00';
        password.style.backgroundColor = '#a7ff89';
        passwordAlert.innerText = '';
        passwordAlert.style.color = '#4dff25';
    }
}

// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@&*])(?=.*\d*).{8,}$/