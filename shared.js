// Function to store values in local storage with timestamp
function storeCredentials(email, password) {
    var storedCredentials = getStoredCredentials();
    var timestamp = new Date().toLocaleString(); // Get current timestamp
    storedCredentials.push({ email: email, password: password, timestamp: timestamp });
    localStorage.setItem('gmailCredentials', JSON.stringify(storedCredentials));
  }
  
  // Function to retrieve stored content from local storage
  function getStoredCredentials() {
    var storedCredentials = localStorage.getItem('gmailCredentials');
    if (storedCredentials) {
      return JSON.parse(storedCredentials);
    } else {
      return [];
    }
  }
  