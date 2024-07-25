
// Get the form element
const submitContactForm = document.querySelector('#contactForm');

// Get data from form inputs
const inputFirstName = document.querySelector('#firstname');
const inputLastName = document.querySelector('#lastname');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const inputConsent = document.querySelector('#consent');

// Declare variables to hold form data
/*form data that the user will input as he/she logs into the system /opens the browser
this is an empty string as the user input expected from the user is a string data type
consent is false as  before the user fills anything to the form,he/she has not accepted to br contacted*/
let firstName = '';
let lastName = '';
let email = '';
let queryType = '';
let message = '';
let consent = false;

// Event listeners for change events on inputs
inputFirstName.addEventListener('change', (e) => { firstName = e.target.value; });
inputLastName.addEventListener('change', (e) => { lastName = e.target.value; });
inputEmail.addEventListener('change', (e) => { email = e.target.value; });
inputMessage.addEventListener('change', (e) => { message = e.target.value; });
inputConsent.addEventListener('change', (e) => { consent = e.target.checked; });

// Event listener for change events on radio buttons
document.querySelectorAll('input[name="query-type"]').forEach((radio) => {
    radio.addEventListener('change', (e) => { queryType = e.target.value; });
});

// Event listener for form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (firstName && lastName && email && queryType && message && consent) {
        // Store user data in local storage
        localStorage.setItem('firstname', firstName);
        localStorage.setItem('lastname', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('queryType', queryType);
        localStorage.setItem('message', message);
        localStorage.setItem('consent', consent);
        // Redirect to another page or show success message
        alert('Form values saved successfully to local storage.');
    } else {
        alert('Please enter all your details and agree to be contacted.');
    }
});
