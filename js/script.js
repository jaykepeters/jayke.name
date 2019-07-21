// Force the user to read part 1 first
function waitForUser() {
    setTimeout(
        function() { 
            trigger.disabled = false;
            timer.style.display = "none";
        }
    , 11000);
}

function revealObfuscatedText(trigger, id) {
    targetElement = document.getElementById(id);

    // Unobfuscate the text
    targetElement.style.textShadow = "none";
    targetElement.style.color = "white";

    // Disable the button
    trigger.disabled = true;

    // Show Part 2
    part2.style.display = "block";
}
