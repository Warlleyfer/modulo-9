import { CarregarUsuarios } from "./Service.js";
import { AdicionarNovoUsuario } from "./Service.js";
import { ConfigDeletarUsuario } from "./Dom.js";
import { DeletarUsuario } from "./Service.js";
CarregarUsuarios()

document.getElementById("Botao").addEventListener("click", ()=> {
   AdicionarNovoUsuario()
    CarregarUsuarios()
})

ConfigDeletarUsuario(DeletarUsuario);