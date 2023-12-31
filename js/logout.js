// Function to log out the user
async function logout() {
  try {
    // Send a request to the server to invalidate the token
    const response = await fetch('https://xhotel3.onrender.com/api/logout/', {
      method: 'POST',
      headers: {
        // 'Authorization': 'Bearer ' + localStorage.getItem('token'), // Include the token in the headers
        'Content-Type': 'application/json',
      },
      // You can include a body if needed (depends on your server-side implementation)
      // body: JSON.stringify({}),
    });

    if (response.ok) {
      // Redirect or perform other actions after successful logout
      window.location.href = 'https://omerbag-9.github.io/x-hotel-front-end/index.html'; // Redirect to the login page, for example
    } else {
      // Handle non-ok responses (e.g., show an error message)
      console.error('Logout failed. HTTP status:', response.status);
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error during logout:', error);
  }
}
