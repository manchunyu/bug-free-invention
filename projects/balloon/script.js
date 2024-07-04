const balloon = document.getElementById('balloon');

balloon.focus();

balloon.addEventListener('keydown', event => {
    if (event.key == 'ArrowUp'){
        console.log('up');
        balloon.style.fontSize = `${parseInt(balloon.style.fontSize) * 1.1}px`;
    } else if (event.key == 'ArrowDown'){
        console.log('down');
        balloon.style.fontSize = `${parseInt(balloon.style.fontSize) / 1.1}px`;
    }
});