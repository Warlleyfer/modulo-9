export const ListaDeTarefas=document.getElementById("ListaDeTarefas") //exporta a UL
export function Criarlista(ListaDeUsuarios){

ListaDeTarefas.innerHTML =""

       ListaDeUsuarios.forEach(Usuario => {
                    const item = document.createElement("li");//aqui cria o elemento li
                    item.innerHTML = `${Usuario.Nome} ${Usuario.Email} <button id="${Usuario._id}" class="deletar">X</button>`;
                
                    ListaDeTarefas.appendChild(item);
                });
            }
    
        export function ConfigDeletarUsuario(DeletarUsuario){
 ListaDeTarefas.addEventListener("click", (event) => {
if(event.target.classList.contains("deletar")){
const id =event.target.id;
DeletarUsuario(id); 
}

});}
         
    
