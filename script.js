// Game logic
var character = document.getElementById("character");
var container = document.getElementById("game-container");

function moveCharacter(event) {
    var step = 10;
    var newX = parseInt(character.style.left) || 0;
    var newY = parseInt(character.style.top) || 0;

    if (event.type === "keydown") {
        var key = event.keyCode;

        switch (key) {
            case 37: // Left arrow key
                newX -= step;
                break;
            case 39: // Right arrow key
                newX += step;
                break;
            case 38: // Up arrow key
                newY -= step;
                break;
            case 40: // Down arrow key
                newY += step;
                break;
        }
    } else if (event.type === "touchmove") {
        var touch = event.touches[0];
        newX = touch.clientX - container.offsetLeft - character.offsetWidth / 2;
        newY = touch.clientY - container.offsetTop - character.offsetHeight / 2;
    }

    character.style.left = newX + "px";
    character.style.top = newY + "px";
}

// Event listeners
document.addEventListener("keydown", moveCharacter);
container.addEventListener("touchmove", moveCharacter);
