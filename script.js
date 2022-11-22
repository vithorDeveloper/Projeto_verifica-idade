
function clicou(){

    var ano = document.querySelector("#anos")
    var femi = document.querySelector("#fem")
    var mask = document.querySelector("#masc")
    var msgs = document.querySelector("#msg")

    // pega a data ano do computador e calcula e converte com o ano que recebe da caixa de texo
    var dat = new Date()
    var anu = dat.getFullYear()
    var texto = Number(ano.value)           
    var num = anu - texto

    // verifica se o campo é maior da que o ano atual ou se eta vazio
   if(texto.length == 0 || texto > anu){
       alert("[ERROR] Verifique o ano informado")
    }
        
    // verifica se é mulher, responsavel por mostrar a mensagem
        if(femi.checked){
            msgs.innerText = `É uma mulher de ${num} anos`
            var img = document.createElement("img")
            
            // verifica a idade usando o valor recibido ja calculado de "num"
                if(num > 0 && num <= 14){
                    msgs.appendChild(img)
                    img.setAttribute('src', 'menina.jpg')
                }
                else if(num > 14 && num <= 20){
                    msgs.appendChild(img)
                    img.setAttribute('src', 'garota.jpg')
                }
                else if(num > 20 && num <= 45){
                    msgs.appendChild(img)
                    img.setAttribute('src', 'mulher.jpg')
                }
                else{
                    msgs.appendChild(img)
                    img.setAttribute('src', 'velha.jpg')
                }    
        }

        if(mask.checked){
            msgs.innerText = `É um homem de ${num} anos`
            var img = document.createElement("img") //cria a tag

                if(num > 0 && num <= 14){
                    msgs.appendChild(img) //mostra a tag
                    img.setAttribute('src', 'crianca.jpg') //e diz oq vai ser mostrado na tag
                }
                else if(num > 14 && num <= 20){
                    msgs.appendChild(img)
                    img.setAttribute('src', 'garoto.jpg')
                }
                else if(num > 20 && num <= 45){
                    msgs.appendChild(img)
                    img.setAttribute('src', 'adulto.jpg')
                }
                else{
                    msgs.appendChild(img)
                    img.setAttribute('src', 'senhor.jpg')
                }
        }
        msgs.style.textAlign = "center"
        
}