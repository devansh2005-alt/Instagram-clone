let buttons = document.querySelectorAll(".like-btn");

buttons.forEach(function(button) {
    let count =0;
    let span = button.nextElementSibling.querySelector("span");

    button.addEventListener("click", function() {
        if (count === 0) {
            count = 1;
            span.innerText = count;
            button.style.color = "red";
         
        } else {
            count = 0;
            span.innerText = count;
            button.style.color = "black"
        }
    });
});