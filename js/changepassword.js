// change password
var oldPassword = document.getElementById("old_password")
var newPassword = document.getElementById("new_password")

async function changeData() {
    var changeUserData = {
        old_password: oldPassword.value,
        new_password: newPassword.value,
    }
    var data = await fetch(`https://xhotel3.onrender.com/api/login/`, {
        method: "post",
        body: JSON.stringify(changeUserData)
    })
    let res = await data.json()
    console.log(res);
}
