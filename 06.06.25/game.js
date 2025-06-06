const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');

// Ajusta o canvas para o tamanho da janela
function ajustarTela() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', ajustarTela);
ajustarTela();

// Carrega imagens
const fundo = new Image();
fundo.src = 'assets/fundo.jpg';

const po = new Image();
po.src = 'assets/thuthu.png';

const tigresa = new Image();
tigresa.src = 'assets/tigresa.png';

const shifu = new Image();
shifu.src = 'assets/shifu.png';

// Tamanho do Po
const poLargura =600;
const poAltura = 900;

// Posição inicial do Po
let poX = 100;
let poY = 100;

// Teclas pressionadas
let teclas = {};

window.addEventListener('keydown', (e) => {
  teclas[e.key] = true;
});
window.addEventListener('keyup', (e) => {
  teclas[e.key] = false;
});

function atualizar() {
  if (teclas['ArrowUp']) poY -= 3;
  if (teclas['ArrowDown']) poY += 3;
  if (teclas['ArrowLeft']) poX -= 3;
  if (teclas['ArrowRight']) poX += 3;
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(po, poX, poY, poLargura, poAltura);         // Personagem aumentado
  ctx.drawImage(tigresa, 0, 0, 0, 0);                 // NPC Tigresa
  ctx.drawImage(shifu, 0, 0, 0, 0);                   // NPC Shifu
}

function loop() {
  atualizar();
  desenhar();
  requestAnimationFrame(loop);
}

fundo.onload = () => {
  loop();
};
