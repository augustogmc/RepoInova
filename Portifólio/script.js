function abrir_menu() {
  let barra_menu_aberto = document.getElementById("barra-menu")

  if (barra_menu_aberto.style.width == "0px") {
    barra_menu_aberto.style.width = "180px"
  } else {
    barra_menu_aberto.style.width = "0px"
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}
