export function submitData(name, email) {
    const userData = { name, email };  // Prepare the user data
    
    return fetch('http://localhost:3000/users', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (!response) {
            throw new Error('No response received');
        }

        if (!response.ok) {
            return response.json().then(err => { throw err; });
        }

        return response.json();
    })
    .then(data => {
        if (data.id) {  // check if id is present in response
            // Append id to the DOM
            document.body.innerHTML += data.id; 
        }
    })
    .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += error.message;
    });
}
