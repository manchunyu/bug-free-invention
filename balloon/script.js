const balloon = document.getElementById('balloon');

balloon.focus();

const blowBalloon = (event) => {
    if (event.key == 'ArrowUp'){   
        balloon.style.fontSize = `${parseInt(balloon.style.fontSize) * 1.1}px`;
    } else if (event.key == 'ArrowDown'){
        balloon.style.fontSize = `${parseInt(balloon.style.fontSize) / 1.1}px`;
    }

    if (parseInt(balloon.style.fontSize) > 1000) {
        balloon.textContent = "💥";
        balloon.removeEventListener('keydown', blowBalloon);
    }
}
balloon.addEventListener('keydown', blowBalloon);

// Review this
let arrow_keys_handler = function(e) {
    switch(e.code){
        case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": 
            case "Space": e.preventDefault(); break;
        default: break; // do not block other keys
    }
};
window.addEventListener("keydown", arrow_keys_handler, false);

