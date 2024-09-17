window.onload = function() {
    document.body.classList.add("fade-in");
};


document.getElementById("register-link").addEventListener("click", function(event) {
    event.preventDefault(); 


    document.body.classList.add("fade-out");


    setTimeout(function() {
        window.location.href = "register.html";
    }, 700); 
});




document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        showSuccessNotification(); 
        setTimeout(function() {
            window.location.href = "dashboard.html"; 
        }, 3000);
    } else {
        showErrorNotification();
    }
});


function showErrorNotification() {
    const notification = document.getElementById("notification-error");
    notification.classList.add("show"); 


    setTimeout(function() {
        notification.classList.remove("show");
    }, 3000); 
}


function showSuccessNotification() {
    const notification = document.getElementById("notification-success");
    notification.classList.add("show"); 


    setTimeout(function() {
        notification.classList.remove("show");
    }, 3000); 
}
