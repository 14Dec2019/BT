window.onload = function() {
    // Check if the correct PIN was already entered
    if(localStorage.getItem('pinEntered') === 'true') {
        document.getElementById("pinLock").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
};

function enterPin(value) {
    document.getElementById("pinInput").value += value;
}

function clearPin() {
    document.getElementById("pinInput").value = '';
}

function checkPIN() {
    var correctPIN = "1412"; // Set your desired PIN here
    var enteredPIN = document.getElementById("pinInput").value;

    if(enteredPIN === correctPIN) {
        document.getElementById("pinLock").style.display = "none";
        document.getElementById("content").style.display = "block";
        // Save the fact that the correct PIN was entered
        localStorage.setItem('pinEntered', 'true');
    } else {
        alert("Incorrect PIN. Please try again.");
        clearPin(); // Clear the input field
    }
}

// JavaScript to add functionality to buttons
document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('heart').style.display = 'block'; // Show the content
  document.getElementById('prompt').style.display = 'none';   // Hide the prompt
});

document.getElementById('noBtn').addEventListener('click', function() {
  alert('Sorry i think you pressed this button by mistake try again'); // Show a message
});


