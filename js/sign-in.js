// // login
// var userNameLoginInput = document.getElementById("username")
// var emailLoginInput = document.getElementById("email")
// var passwordLoginInput = document.getElementById("password")


// async function loginData() {
//     var loginUserData = {
//         username: userNameLoginInput.value,
//         email: emailLoginInput.value,
//         password: passwordLoginInput.value,
//     }
//     var data = await fetch(`http://127.0.0.1:8000/api/login/`, {
//         method: "post",
//         credentials:'include',
//         headers: {
//             // 'Authorization': `Bearer ${Token}`,
//             'Content-Type': 'application/json',

//         },
//             body: JSON.stringify(loginUserData)
//     })
//     let res = await data.json()
//     console.log(res);

//     if (data.ok) {
//         // Registration successful, redirect to the home page
//         const accessToken = data.access_token;
//         localStorage.setItem('token', JSON.stringify(accessToken));
//         console.log(accessToken);
//         window.location.href = "http://127.0.0.1:3000/x-hotel-front-end/home.html"; // Replace "/home" with the actual path to your home page
//     } else {
//         // Handle registration error
//         let errorResponse = await data.json();
//         console.error(errorResponse);
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









// // login
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
//         var response = await fetch(`http://127.0.0.1:8000/api/login/`, {
//             method: "post",
//             credentials: 'include',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': `Bearer ${accessToken}`,

//             },
//             body: JSON.stringify(loginUserData)
//         });

//         let res = await response.json();
//         console.log(res);

//         if (response.ok) {
//             console.log('Login successful!');
//             window.location.href = "http://127.0.0.1:3000/x-hotel-front-end/home.html";
//         } else {
//             console.error('Login failed:', res);
//             window.alert("username or password are incorrect")
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//     }
// }






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
