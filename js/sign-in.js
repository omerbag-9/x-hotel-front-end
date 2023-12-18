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
    var data = await fetch(`http://serco-dev.com:2020/api/login/`, {
        method: "post",
        credentials:'include',
        headers: {
            'Authorization': `Bearer ${Token}`,
        },
            body: JSON.stringify(loginUserData)
    })
    let res = await data.json()
    console.log(res);
}
