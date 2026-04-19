// Datos de empresas (lo que antes tenías en TypeScript)
const companies = {
  "antrozoologia": {
    id: "antrozoologia",
    name: "Antrozoología",
    logo: "Imagenes/Antrozoologia.png",
    phrase: "Curso: Conociendo a tu gato.",
  },
  "food-for-joe": {
    id: "food-for-joe",
    name: "Food for Joe",
    logo: "Imagenes/FFJ.png",
    phrase: "Alimentos naturales para michis.",
  },
  "natulim": {
    id: "natulim",
    name: "Natulim",
    logo: "Imagenes/Natulim.png",
    phrase:
      "Tierra de Sommieres (limpiador de pipí y vómitos), detergente y fregasuelos.",
  },
  "my-vet-nutritionist": {
    id: "my-vet-nutritionist",
    name: "My Vet Nutritionist",
    logo: "Imagenes/MyVet.svg",
    phrase: "Asesoría de nutrición especializada con la veterinaria Sara Martín.",
  },
  "patitas-and-co": {
    id: "patitas-and-co",
    name: "Patitas&co",
    logo: "Imagenes/Patitas.png",
    phrase: "10 latas de milo y lola.",
  },
  "terra-market": {
    id: "terra-market",
    name: "Terra Market",
    logo: "Imagenes/Terra.png",
    phrase: "Balletas de limpieza de celulosa, nueces de lavado y aceite esencial de lavanda.",
  },
  "tractive": {
    id: "tractive",
    name: "Tractive",
    logo: "Imagenes/Tractive.png",
    phrase: "2 GPS con suscripciones para un año.",
  },
  "pets-and-vets": {
    id: "pets-and-vets",
    name: "Pets&Vets",
    logo: "Imagenes/PetsVets.svg",
    phrase: "Consulta de etología felina.",
  },
    "mi-hu": {
    id: "mi-hu",
    name: "mi&hu",
      logo: "Imagenes/Logo.jpg",
    phrase: "El manual purrfecto para michis & humanos.",
  }, 
    "consumo": {
      id: "consumo",
      name: "Consumo Cuidado",
      logo: "Imagenes/Consumo.jpg",
      phrase: "Bolsa de tela, semillas de calabaza, germinado de brócoli y papel de limpieza reciclado.",
    },
}

function openCompanyModal(companyId) {
  const company = companies[companyId]
  if (!company) return

  const modal = document.getElementById("company-modal")
  const nameEl = document.getElementById("modal-company-name")
  const logoEl = document.getElementById("modal-company-logo")
  const phraseEl = document.getElementById("modal-company-phrase")

  nameEl.textContent = company.name
  logoEl.src = company.logo
  logoEl.alt = company.name
  phraseEl.textContent = company.phrase

  modal.classList.remove("hidden")
  document.body.style.overflow = "hidden" // bloquear scroll
}

function closeModal() {
  const modal = document.getElementById("company-modal")
  modal.classList.add("hidden")
  document.body.style.overflow = "auto"
}

function onModalBackdropClick(event) {
  // cierra sólo si se hace click en el fondo, no en el contenido
  if (event.target.id === "company-modal") {
    closeModal()
  }
}

// Opcional: cerrar con ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})
