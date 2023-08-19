function meuEscopo() {
  const form = document.querySelector("#form");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const btnCalcular = document.querySelector("#btnCalcular");
  const resultado = document.querySelector("#resultado");
  let imc;
  let pesoNumber;
  let alturaNumber;

  //removendo evento padrão do form
  form.onsubmit = function (event) {
    event.preventDefault();
  };

  //Checagem dos campos (apenas números);
  function checkFields() {
    if (isNaN(peso.value) || peso.value === "") {
      alert("Digite apenas números e não deixe o campo vazio! (Peso)");
    } else if (isNaN(altura.value) || altura.value === "") {
      alert("Digite apenas números e não deixe o campo vazio! (Altura)");
    } else {
      return true;
    }
  }

  //exibe resultado
  function displayResult() {
    if (imc < 18.5) {
      resultado.textContent = `Seu imc é: ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.textContent = `Seu imc é: ${imc} (Peso normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.textContent = `Seu imc é: ${imc} (Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 1)`;
    } else if (imc >= 35 && 39.9) {
      resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 2)`;
    } else {
      resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 3)`;
    }

    resultado.style.display = "block";
    setTimeout(() => {
      resultado.className = "on";
    }, 100);

    setTimeout(() => {
      resultado.className = "off";
      setTimeout(() => {
        resultado.style.display = "none";
      }, 350);
    }, 3000);
  }

  function calcular() {
    if (checkFields()) {
      pesoNumber = Number(peso.value);
      alturaNumber = Number(altura.value);

      imc = pesoNumber / Math.pow(alturaNumber, 2);
      imc = imc.toFixed(2);

      displayResult();

      peso.disabled = true;
      altura.disabled = true;
      btnCalcular.disabled = true;
      btnCalcular.innerHTML = 'Calculando <img src="./assets/img/loading.gif">';

      setTimeout(() => {
        peso.disabled = false;
        altura.disabled = false;
        btnCalcular.disabled = false;
        btnCalcular.textContent = "Calcular";
      }, 3450);
    }
  }

  btnCalcular.addEventListener("click", calcular);
}

meuEscopo();
