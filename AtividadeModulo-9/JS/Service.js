import { Criarlista, ListaDeTarefas } from "./Dom.js";
import { ConfigDeletarUsuario } from "./Dom.js";

export const API = "https://crudcrud.com/api/a075be3ae8544b18b0256cbeaae8dcdd/usuarios";




// carrega os usuarios dentro do servidor
export function CarregarUsuarios (){
     fetch(API)
        .then(Response => Response.json())
        .then((ListaDeUsuarios) =>  Criarlista(ListaDeUsuarios))
        }

        
     
 export function AdicionarNovoUsuario(){

const ValoNome = document.getElementById("NomeValor").value;
const ValoEmail = document.getElementById("EmailValor").value;// precisa esta junto do adicionar Usuario ,pq ele precisa capiturar o elemento na hora do click e nao quando carrega a pagina.

  fetch(API,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({
            Nome:ValoNome,
            Email:ValoEmail})
    })
    .then(Response =>Response.json())
   .then((ListaDeUsuarios) =>  CarregarUsuarios());
}
        
 export function DeletarUsuario(id){

    fetch(`${API}/${id}`,{
        method:"DELETE"
    }).then (()=>  CarregarUsuarios());
}