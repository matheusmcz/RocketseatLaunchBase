const formDelete = document.querySelector("#form-delete")
formDelete.addEventListener("submit", function (event) {
  const confirmation = confirm("Deseja Deletar Membro?")

  if (!confirmation) {
    event.preventDefault()
  }
})
