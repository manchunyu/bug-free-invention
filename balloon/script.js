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
    event.stopPropagation();
}
balloon.addEventListener('keydown', blowBalloon);

