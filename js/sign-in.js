
// login
var userNameLoginInput = document.getElementById("username")
var emailLoginInput = document.getElementById("email")
var passwordLoginInput = document.getElementById("password")

async function loginData() {
    var loginUserData = {
        username: userNameLoginInput.value,
        email: emailLoginInput.value,
        password: passwordLoginInput.value,
    }

    try {
        var response = await fetch(`https://xhotel3.onrender.com/api/login/`, {
            method: "post",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginUserData)
        });

        let res = await response.json();
        console.log(res);

        if (response.ok) {
            // Save the access token in local storage
            localStorage.setItem('accessToken', res.access_token);

            window.location.href = "https://omerbag-9.github.io/x-hotel-front-end/home.html";
        } else {
            console.error('Login failed:', res);
            window.alert("Username or password are incorrect");
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}
