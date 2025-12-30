let crianca = "";
let respostaCerta = "";
const synth = window.speechSynthesis;

function falar(texto) {
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 0.95;
  fala.pitch = crianca === "alicia" ? 1.3 : 1.0;
  synth.speak(fala);
}

function iniciar(nome) {
  crianca = nome;
  document.getElementById("start").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  if (nome === "micael") {
    document.body.style.backgroundImage = "url('assets/fortnite-bg.jpg')";
    document.getElementById("titulo").innerText = "🎮 Tábuada do Micael";
    falar("Olá Micael! Vamos aprender a tabuada!");
    novaConta();
  } else {
    document.body.style.backgroundImage = "url('assets/barbie-bg.jpg')";
    document.getElementById("titulo").innerText = "💖 B A BA da Alícia";
    falar("Olá Alícia! Vamos aprender o B A BA!");
    novaSilaba();
  }
}

function novaConta() {
  let a = Math.floor(Math.random() * 5) + 1;
  let b = Math.floor(Math.random() * 5) + 1;
  respostaCerta = a * b;
  document.getElementById("pergunta").innerText = `${a} x ${b} = ?`;
}

function novaSilaba() {
  const silabas = ["BA", "BE", "BI", "BO", "BU"];
  respostaCerta = silabas[Math.floor(Math.random() * silabas.length)];
  document.getElementById("pergunta").innerText = `Digite: ${respostaCerta}`;
}

function verificar() {
  const resposta = document.getElementById("resposta").value.toUpperCase();
  const feedback = document.getElementById("feedback");

  if (resposta == respostaCerta) {
    feedback.innerText = "😊✨";
    falar(`Muito bem, ${crianca === "micael" ? "Micael" : "Alícia"}!`);
    crianca === "micael" ? novaConta() : novaSilaba();
  } else {
    feedback.innerText = "😢";
    falar(`Não tem problema, ${crianca === "micael" ? "Micael" : "Alícia"}, vamos tentar de novo.`);
  }

  document.getElementById("resposta").value = "";
}