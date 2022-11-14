var btn = document.getElementById('btn')
btn.addEventListener('click', verificar)
function verificar() {
    var date  = new Date()
    var year  = date.getFullYear()
    var fyear = document.getElementById('txtano')
    var res   = document.getElementById('res')
    if (fyear.value.length == 0 || fyear.value > year) {
        alert('verifique o ano inserido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        //res.innerHTML = `idade ${age}`
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'homem'
            if (age >= 0 && age < 4) {
                img.setAttribute('src', 'bebem.png')
            } else if (age < 11) {
                img.setAttribute('src', 'criançam.png')
            } else if (age < 29) {
                img.setAttribute('src', 'jovemm.png') 
            } else if (age < 50) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
               
        } else if (fsex[1].checked) {
            gender = 'mulher'
            if (age >= 0 && age < 4) {
                img.setAttribute('src', 'bebef.png')
            } else if (age < 11) {
                img.setAttribute('src', 'criançaf.png')
            } else if (age < 29) {
                img.setAttribute('src', 'jovemf.png') 
            } else if (age < 50) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        } else if (fsex[2].checked) {
            gender = 'Não-binário'
            
        } else if (fsex[3].checked) {
            gender = 'outros'
            
        }

          
        res.style.textAlign = 'center'    
        res.innerHTML = `gênero <strong>${gender}</strong> com <strong>${age}</strong> de idade`
        res.appendChild(img)
    }
}