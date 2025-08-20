const frases = [
    "Seja você mesmo",
    "Brilhe todos os dias",
    "Sua beleza, nosso cuidado",
    "Estilo que combina com você"
  ];

  let indice = 0;
  const elemento = document.getElementById("frase");

  function trocarFrase() {
    elemento.textContent = frases[indice];
    indice = (indice + 1) % frases.length; // volta ao início
  }

  // Troca a frase a cada 3 segundos
  trocarFrase(); // mostra a primeira imediatamente
  setInterval(trocarFrase, 3000);
