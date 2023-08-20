function meuEscopo() {
  const form = document.querySelector("#form");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const btnCalcular = document.querySelector("#btnCalcular");
  const resultado = document.querySelector("#resultado");
  let imc;
  let pesoNumber;
  let alturaNumber;
  let pesoAtual;
  let alturaAtual;

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

  let primeiraVez = true;
  //exibe resultado
  function displayResult() {
    //se for a primeira vez
    if (primeiraVez) {
      setTimeout(() => {
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
      }, 3450);

      // setTimeout(() => {
      //   resultado.className = "off";
      //   setTimeout(() => {
      //     resultado.style.display = "none";
      //   }, 350);
      // }, 3000);

      //passando a primeira vez
      primeiraVez = false;
    } else {
      resultado.textContent = "Aguarde...";
      setTimeout(() => {
        if (imc < 18.5) {
          resultado.textContent = `Seu imc é: ${imc} (Abaixo do peso)`;
        } else if (imc >= 18.5 && imc <= 24.9) {
          resultado.textContent = `Seu imc é: ${imc} (Peso normal)`;
        } else if (imc >= 25 && imc <= 29.9) {
          resultado.textContent = `Seu imc é: ${imc} (Sobrepeso)`;
        } else if (imc >= 30 && imc <= 34.9) {
          resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 1)`;
        } else if (imc >= 35 && imc <= 39.9) {
          resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 2)`;
        } else {
          resultado.textContent = `Seu imc é: ${imc} (Obesidade grau 3)`;
        }
      }, 3450);
    }
  }

  function calcular() {
    if (checkFields()) {
      pesoNumber = Number(peso.value);
      alturaNumber = Number(altura.value);

      if (alturaNumber > 3) {
        alturaNumber = alturaNumber / 100;
        altura.value = alturaNumber.toString();
      }

      imc = pesoNumber / Math.pow(alturaNumber, 2);
      imc = imc.toFixed(2);

      if (pesoAtual === pesoNumber && alturaAtual === alturaNumber) {
        alert("Já calculado");
        return;
      }

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

    pesoAtual = Number(peso.value);
    alturaAtual = Number(altura.value);
  }

  btnCalcular.addEventListener("click", calcular);
}

meuEscopo();
