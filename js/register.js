
// // register
// var userNameJoinInput = document.getElementById("username")
// var firstNameJoinInput = document.getElementById("first_name")
// var lastNameJoinInput = document.getElementById("last_name")
// var countryJoinInput = document.getElementById("country")
// var zipJoinInput = document.getElementById("zip")
// var emailJoinInput = document.getElementById("email")
// var passwordJoinInput = document.getElementById("password")
// var hobbiesJoinInput = document.getElementById("hobbies")

// async function joinData() {
//     var joinUserData = {
//         username: userNameJoinInput.value,
//         first_name:firstNameJoinInput.value,
//         last_name:lastNameJoinInput.value,
//         country:countryJoinInput.value,
//         zip:zipJoinInput.value,
//         email: emailJoinInput.value,
//         password: passwordJoinInput.value,
//         hobbies:hobbiesJoinInput.value
//     }
//     var data = await fetch(`http://127.0.0.1:8000/api/register/`, {
//         method: "post",
//         credentials:'include',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(joinUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }









// var userNameJoinInput = document.getElementById("username");
// var firstNameJoinInput = document.getElementById("first_name");
// var lastNameJoinInput = document.getElementById("last_name");
// var countryJoinInput = document.getElementById("country");
// var zipJoinInput = document.getElementById("zip");
// var emailJoinInput = document.getElementById("email");
// var passwordJoinInput = document.getElementById("password");
// var hobbiesJoinInput = document.getElementById("hobbies");

// async function joinData() {
//     var joinUserData = {
//         username: userNameJoinInput.value,
//         first_name: firstNameJoinInput.value,
//         last_name: lastNameJoinInput.value,
//         country: countryJoinInput.value,
//         zip: zipJoinInput.value,
//         email: emailJoinInput.value,
//         password: passwordJoinInput.value,
//         hobbies: hobbiesJoinInput.value,
//     };

//     try {
//         var data = await fetch(`http://127.0.0.1:8000/api/register/`, {
//             method: "post",
//             credentials: "include",
//             headers: {
//                 'Content-Type': 'application/json',
//             }, 
//             body: JSON.stringify(joinUserData),
//         });
        
//         if (data.ok) {
//             // Registration successful, redirect to the home page
//             window.location.href = "http://127.0.0.1:3000/x-hotel-front-end/sign-in.html"; // Replace "/home" with the actual path to your home page
//         } else {
//             // Handle registration error
//             let errorResponse = await data.json();
//             console.error(errorResponse);
//         }
//     } catch (error) {
//         console.error("Error during registration:", error);
//     }
// }











var userNameJoinInput = document.getElementById("username");
var firstNameJoinInput = document.getElementById("first_name");
var lastNameJoinInput = document.getElementById("last_name");
var countryJoinInput = document.getElementById("country");
var zipJoinInput = document.getElementById("zip");
var emailJoinInput = document.getElementById("email");
var passwordJoinInput = document.getElementById("password");
var hobbiesJoinInput = document.getElementById("hobbies");




async function joinData() {
    var joinUserData = {
        username: userNameJoinInput.value,
        first_name: firstNameJoinInput.value,
        last_name: lastNameJoinInput.value,
        country: countryJoinInput.value,
        zip: zipJoinInput.value,
        email: emailJoinInput.value,
        password: passwordJoinInput.value,
        hobbies: hobbiesJoinInput.value,
    };

    try {
        var data = await fetch(`https://xhotel3.onrender.com/api/register/`, {
            method: "post",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(joinUserData),
        });

        if (data.ok) {
            // Registration successful, redirect to the home page
            window.alert("confirm your email")
        } else {
            // Handle registration error
            let errorResponse = await data.json();
            
            if (errorResponse.username && errorResponse.username.includes('user with this username already exists.')) {
                // Username already exists, show alert
                window.alert("This username already exists. Please choose a different username.");
            } else {
                // Handle other registration errors
                console.error(errorResponse);
            }
        }
    } catch (error) {
        console.error("Error during registration:", error);
        window.alert("An error occurred during registration. Please try again.");
    }
}
