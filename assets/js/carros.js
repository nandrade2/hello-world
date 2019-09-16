//selecionando no documento o elemento que possui a class foto
let foto = document.querySelector("#foto-maior");

//selecionando TODOS os elementos que possuem a class .img-Thumb
let imgThumb = document.querySelectorAll(".img-thumb"); 

// nata-muller-andrade url friendly
//camelCase - lowerCamelCase
//nataMullerAndrade

//hcode-treinamento-ltda (url friendly)
//hcodeTreinamentosLtda

//vamos criar uma arrow function
// função mais simples
/*()=>{


}
function soma(a,b){
    return a+b;
} 

let soma = (a)=>{a+b}
*/

imgThumb.forEach((elemento)=>{

    elemento.addEventListener("click",(evento)=>{
        //Template String - Utiliza CRASE `
        let caminho = `assets/images/galeria/carros${elemento.dataset.id}.webp`;
        foto.setAttribute('src', caminho);
        console.log(elemento.dataset.id);

    });
});