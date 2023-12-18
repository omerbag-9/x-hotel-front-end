// change password
var oldPassword = document.getElementById("old_password")
var newPassword = document.getElementById("new_password")

async function changeData() {
    var changeUserData = {
        old_password: oldPassword.value,
        new_password: newPassword.value,
    }
    var data = await fetch(`localhost:8000/api/login/`, {
        method: "post",
        body: JSON.stringify(changeUserData)
    })
    let res = await data.json()
    console.log(res);
}
