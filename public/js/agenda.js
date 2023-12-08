const localStoragekey = "to-do-list-gn";

function validadIfNewtask() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let inputValue = document.getElementById("idinputlista").value;
  let dateValue = document.getElementById("iddatelista").value;

  let exists = values.find(
    (x) => x.name === inputValue && x.date === dateValue
  );
  return exists ? true : false;
}

function formatarData(data) {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function novaadicao() {
  let input = document.getElementById("idinputlista");
  let dateInput = document.getElementById("iddatelista");
  input.style.border = "";
  dateInput.style.border = "";

  if (!input.value || !dateInput.value) {
    if (!input.value) {
      input.style.border = "1px solid red";
    }
    if (!dateInput.value) {
      dateInput.style.border = "1px solid red";
    }
    alert("Preencha todos os campos na sua lista");
  } else if (validadIfNewtask()) {
    alert("Já existe uma agenda com essa descrição e data");
  } else {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    values.push({
      name: input.value,
      date: dateInput.value,
    });

    localStorage.setItem(localStoragekey, JSON.stringify(values));
    showValues();
    input.value = "";
    dateInput.value = "";
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let lista = document.getElementById("to-do-list");
  lista.innerHTML = "";

  for (let i = 0; i < values.length; i++) {
    const dataFormatada = formatarData(values[i]["date"]);
    lista.innerHTML += `<li>${values[i]["name"]} ${dataFormatada}<button id='btn-ok' onclick='removeItem("${values[i]["name"]}")'><i class="fa-solid fa-check" style="color: rgb(0, 0, 0);"></i></button></li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findIndex((x) => x.name === data);
  values.splice(index, 1);
  localStorage.setItem(localStoragekey, JSON.stringify(values));
  showValues();
}

showValues();
