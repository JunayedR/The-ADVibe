function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('submit_form.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        alert('Form submitted successfully!');

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
}

function contactJunayed() {
    window.open('https://wa.me/6294018321', '_blank');
}

function contactAbhilash() {
    window.open('https://wa.me/6261893846', '_blank');
}

function showTime() {
    var options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    var currentTime = new Date().toLocaleString('en-IN', options);
    document.getElementById('currentTime').innerHTML = currentTime;
}

showTime();
setInterval(showTime, 1000);
