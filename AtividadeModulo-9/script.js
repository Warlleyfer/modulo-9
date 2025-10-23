const lista = document.getElementById("listaDeUsuarios");
const btnAdd = document.getElementById("add");

// Carregar usuários do servidor ao abrir a página
fetch("https://crudcrud.com/api/2faf6ead09bc4069adc710ae3972dc8c/users")
    .then(Response => Response.json())
    .then((listaDeUsuarios) => {
        listaDeUsuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.innerHTML = `<b>NOME:</b> ${usuario.user} <b>E-mail:</b> ${usuario.email}  <button class="deletar" data-id="${usuario._id}">X</button>`;

            // Adicionar evento de deletar mantendo a classe "deletar"
            const btnDeletar = li.querySelector(".deletar");
            btnDeletar.addEventListener("click", (e) => {
                const IDusuario = e.target.dataset.id;

                fetch(`https://crudcrud.com/api/2faf6ead09bc4069adc710ae3972dc8c/users/${IDusuario}`, {
                    method: 'DELETE',
                })
                .then(Response => {
                    if (Response.ok) {
                        alert("Usuário deletado");
                        li.remove();
                    } else {
                        alert('Erro ao deletar');
                    }
                })
                .catch(err => console.error(err));
            });

            lista.appendChild(li);
        });
    })
    .catch(err => console.error("Erro ao buscar usuários:", err));

// Adicionar novo usuário
btnAdd.addEventListener("click", () => {
    const Novousuario = document.getElementById("username").value;
    const EmailUsuario = document.getElementById("Emailusuario").value;

    if (!Novousuario || !EmailUsuario) {
        alert("Preencha todos os campos");
        return;
    }

    const dados = { user: Novousuario, email: EmailUsuario };

    fetch("https://crudcrud.com/api/2faf6ead09bc4069adc710ae3972dc8c/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(Response => Response.json())
    .then((usuario) => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.user} - ${usuario.email}  <button class="deletar" data-id="${usuario._id}">X</button>`;

        // Evento de deletar mantendo a classe "deletar"
        const btnDeletar = li.querySelector(".deletar");
        btnDeletar.addEventListener("click", (e) => {
            const IDusuario = e.target.dataset.id;

            fetch(`https://crudcrud.com/api/2faf6ead09bc4069adc710ae3972dc8c/users/${IDusuario}`, {
                method: 'DELETE',
            })
            .then(Response => {
                if (Response.ok) {
                    alert("Usuário deletado");
                    li.remove();
                } else {
                    alert('Erro ao deletar');
                }
            })
            .catch(err => console.error(err));
        });

        lista.appendChild(li);

        // Limpar inputs
        document.getElementById("username").value = "";
        document.getElementById("Emailusuario").value = "";
    })
    .catch(err => console.error("Erro ao adicionar usuário:", err));
});
