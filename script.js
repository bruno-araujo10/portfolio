const titulo = document.querySelector('h1');
let isPurple = false;

const aparecer = () => {
  if (!isPurple) {
    titulo.style.color = '#7A1CBD';
    isPurple = true;
  }
}

const desaparecer = () => {
  if (isPurple) {
    titulo.style.color = 'white';
    isPurple = false;
  }
}

setInterval(() => {
  aparecer();
  setTimeout(desaparecer, 500);
}, 1000);