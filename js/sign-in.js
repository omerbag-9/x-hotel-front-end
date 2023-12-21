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
    var data = await fetch(`http://127.0.0.1:8000/api/login/`, {
        method: "post",
        credentials:'include',
        headers: {
            // 'Authorization': `Bearer ${Token}`,
            'Content-Type': 'application/json',

        },
            body: JSON.stringify(loginUserData)
    })
    let res = await data.json()
    console.log(res);

    if (data.ok) {
        // Registration successful, redirect to the home page
        window.location.href = "http://127.0.0.1:3000/x-hotel-front-end/home.html"; // Replace "/home" with the actual path to your home page
    } else {
        // Handle registration error
        let errorResponse = await data.json();
        console.error(errorResponse);
    }



}


// var userNameLoginInput = document.getElementById("username")
// var emailLoginInput = document.getElementById("email")
// var passwordLoginInput = document.getElementById("password")

// async function loginData() {
//     var loginUserData = {
//         username: userNameLoginInput.value,
//         email: emailLoginInput.value,
//         password: passwordLoginInput.value,
//     }

//     try {
//         var data = await fetch(`http://127.0.0.1:8000/api/login/`, {
//             method: "post",
//             credentials: 'include',
//             headers: {
//                 'Authorization': `Bearer ${Token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(loginUserData)
//         });

//         if (data.status === 200) {
//             let res = await data.json();

//             if (res.Token) {
//                 // Redirect to the home page or perform any other action
//                 window.location.replace = ("http://127.0.0.1:8000/x-hotel-front-end/home.html");
//             } else {
//                 console.error("Invalid token");
//                 // Display an error message to the user or take other actions
//             }
//         } else {
//             console.error(`Error: ${data.statusText}`);
//             // Display an error message to the user or take other actions
//         }
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         // Handle other errors (e.g., network issues)
//     }
// }




// var userNameLoginInput = document.getElementById("username")
// var emailLoginInput = document.getElementById("email")
// var passwordLoginInput = document.getElementById("password")

// async function loginData() {
//     var loginUserData = {
//         username: userNameLoginInput.value,
//         email: emailLoginInput.value,
//         password: passwordLoginInput.value,
//     };

//     try {
//         var data = await fetch(`http://127.0.0.1:8000/api/login/`, {
//             method: "post",
//             credentials: 'include',
//             headers: {
//                 // 'Authorization': `access `,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(loginUserData)
//         });

//         if (data.status === 200) {
//             let res = await data.json();

//             if (res.Token) {
//                 // Store the token securely (e.g., in an HTTP-only cookie)
//                 // Redirect to the home page or perform any other action
//                 window.location.href = "http://127.0.0.1:8000/x-hotel-front-end/home.html";
//             } else {
//                 console.error("Invalid token");
//                 // Display an error message to the user or take other actions
//             }
//         }
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         // Handle other errors (e.g., network issues)
//     }
// }
