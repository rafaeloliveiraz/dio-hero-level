// Variaveis
let characterName = "BigBig";
let characterXp = 0;
let nivel = "";
let nivelMaximo = 10100;
let incremento = 100;

function checarNivel() {
  //Verifica Nivel
  if (characterXp === 1000) {
    nivel = "Ferro";
  } else if (characterXp === 2000) {
    nivel = "Bronze";
  } else if (characterXp === 5000) {
    nivel = "Prata";
  } else if (characterXp === 7000) {
    nivel = "Ouro";
  } else if (characterXp === 8000) {
    nivel = "Platina";
  } else if (characterXp === 9000) {
    nivel = "Ascendente";
  } else if (characterXp === 10000) {
    nivel = "Imortal";
  } else if (characterXp > 10000) {
    nivel = "Radiante";
  }

  // Aviso de nível
  let aviso =
    "Parabéns! O personagem " +
    characterName +
    " tem " +
    characterXp +
    "XP e chegou no nível: " +
    nivel +
    "!";
  console.log(aviso);
}

function mostrarNivel() {
  console.log("O personagem tem apenas " + characterXp + "xp.");
  console.log("Upando...");
}

while (characterXp <= nivelMaximo) {
  mostrarNivel();
  if (
    characterXp === 1000 ||
    characterXp === 2000 ||
    characterXp === 5000 ||
    characterXp === 7000 ||
    characterXp === 8000 ||
    characterXp === 9000 ||
    characterXp === 10000 ||
    characterXp > 10000
  ) {
    checarNivel();
  }
  characterXp += incremento;
}
