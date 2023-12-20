// Function to log out the user
function logout() {
    // Send a request to the server to invalidate the token
    fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
      headers: {
        // 'Authorization': 'Bearer ' + localStorage.getItem('token'), // Include the token in the headers
        'Content-Type': 'application/json',
      },
      // You can include a body if needed (depends on your server-side implementation)
      // body: JSON.stringify({}),
    })
      if (response.ok) {
        // Redirect or perform other actions after successful logout
        window.location.href = 'http://127.0.0.1:8000/x-hotel-front-end/sign-in.html'; // Redirect to login page, for example
      }
  }
  