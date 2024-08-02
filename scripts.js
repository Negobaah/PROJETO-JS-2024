let formulario = document.querySelector(".formulario");
let formularioT = document.querySelector(".formularioT");

function aparecerFormulario() {
    formulario.style.left = "0%";
}

function desaparecerFormulario() {
    formulario.style.left = "-100%";
}

function aparecerFormularioT() {
    formularioT.style.left = "00%";
}

function desaparecerFormularioT() {
    formularioT.style.left = "-100%";
}

// Mostrar o botão quando o usuário rolar 100px para baixo
window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  // Rolar suavemente até o topo quando o botão for clicado
  document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  