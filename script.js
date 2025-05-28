const divPadre = document.querySelector(".container");
const button = document.querySelector(".button");

// Initial grids
for (let i = 0; i < 16; i++) {
  for (let index = 0; index < 16; index++) {
    const div = document.createElement("div");
    div.classList.add("estilo");
    divPadre.appendChild(div);
  }
}

let side = 0;

let opacityNumber = 1;

// Randomly generated RGB color
function changeColor() {
  let numeros = [];
  let i = 1;
  while (i < 4) {
    let random = 256;
    while (random > 255) {
      random = Math.floor(Math.random() * 1000);
    }
    i++;
    numeros.push(random);
  }
  return numeros;
}

function opacity(div) {
  if (opacityNumber > 0) {
  div.style.opacity = opacityNumber.toString(); // aplica la opacidad actual
  console.log(`Opacidad aplicada: ${opacityNumber}`);
  opacityNumber -= 0.02; // disminuye para el próximo uso
  } else {
    opacityNumber = '';
  }
}

// Render squares according to user input
function drawSquares(side) {
  while (divPadre.firstChild) {
    divPadre.removeChild(divPadre.firstChild);
  }

  const squareSize = 960 / side;

  for (let i = 0; i < side; i++) {
    for (let index = 0; index < side; index++) {
      const div = document.createElement("div");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.classList.add("estilo");

      div.addEventListener("mouseover", () => {
        const valores = changeColor();
        div.style.setProperty(
          "--backgroundColor",
          `rgb(${valores[0]}, ${valores[1]}, ${valores[2]})`
        );
        opacity(div);
      });

      divPadre.appendChild(div);
    }
  }

}

// Event listeners
button.addEventListener("click", () => {
  side = parseInt(prompt("¿Set the amount of squares per"));
  if (side < 101) {
    drawSquares(side);
  } else {
    alert("the maximum amount allowed is 100. Please choose again.");
  }
});

const div = document.querySelectorAll(".estilo");

div.forEach((item) => {
  let valores = changeColor();
  item.addEventListener("mouseover", () => {
    item.style.setProperty(
      "--backgroundColor",
      `rgb(${valores[0]}, ${valores[1]}, ${valores[2]})`
    );
    opacity(item);
  });
});
