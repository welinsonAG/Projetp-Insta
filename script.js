

let imagem = document.querySelector(".troca-imagem")

setInterval( () =>{

if(imagem.style.opacity == 0){
  imagem.style.opacity = 1

} else {
  imagem.style.opacity = 0
}



}, 3000)
