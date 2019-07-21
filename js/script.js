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
