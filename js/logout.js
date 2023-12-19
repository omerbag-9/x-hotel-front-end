// Function to log out the user
function logout() {
    // Send a request to the server to invalidate the token
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'), // Include the token in the headers
        'Content-Type': 'application/json',
      },
      // You can include a body if needed (depends on your server-side implementation)
      // body: JSON.stringify({}),
    })
    .then(response => {
      if (response.ok) {
        // Remove the token from local storage or wherever it's stored
        localStorage.removeItem('token');
        
        // Redirect or perform other actions after successful logout
        window.location.href = '/login'; // Redirect to login page, for example
      } else {
        // Handle errors, such as displaying an error message
        console.error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  }
  