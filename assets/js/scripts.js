let timeDisplay = document.querySelector(".timeDisplay")

function time(){
  let dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(time, 1000);

