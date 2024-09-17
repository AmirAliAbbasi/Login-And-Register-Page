
window.onload = function() {
    document.body.classList.add("fade-in");
};


document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault(); 

    
    document.body.classList.add("fade-out");

    
    setTimeout(function() {
        window.location.href = "login.html";
    }, 700); 
});


document.addEventListener("DOMContentLoaded", function() {
    

    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        
        if (password.length < 8) {
            showNotification("Password must be at least 8 characters!", false); 
        } 
        
        else if (password !== confirmPassword) {
            showNotification("Passwords do not match!", false); 
        } 
        
        else {
            showNotification("Registration Successful!", true);  

            
            setTimeout(function() {
                window.location.href = "login.html";
            }, 3000);  
        }
    });

    
    function showNotification(message, isSuccess) {
        const notification = document.querySelector('.notification');
        notification.textContent = message;

        
        if (isSuccess) {
            notification.classList.add('success');
        } else {
            notification.classList.remove('success');
        }

        notification.classList.add('show');

        
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }
});
