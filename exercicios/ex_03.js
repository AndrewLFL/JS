function verificar()
{
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#resultado');
    if (fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else
    {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked)
        {
            genero = 'Homem';
            if(idade >=0 && idade < 3)
            {
                img.setAttribute('src','imagens/bebe.jpg');
            }
            else if(idade >=3 && idade < 13)
            {
                img.setAttribute('src','imagens/crianca-m.jpg');
            }
            else if(idade >=13 && idade < 21)
            {
                img.setAttribute('src','imagens/adolescente-m.jpg');
            }
            else if(idade >=21 && idade < 50)
            {
                img.setAttribute('src','imagens/adulto-m.jpg');
            }
            else if(idade >=50 && idade < 100)
            {
                img.setAttribute('src','imagens/idoso-m.jpg');
            }
        } 
        else if (fsex[1].checked)
        {
            genero = 'Mulher';
            if(idade >=0 && idade < 3)
            {
                img.setAttribute('src','imagens/bebe.jpg');
            }
            else if(idade >=3 && idade < 13)
            {
                img.setAttribute('src','imagens/crianca-f.jpg');
            }
            else if(idade >=13 && idade < 21)
            {
                img.setAttribute('src','imagens/adolescente-f.jpg');
            }
            else if(idade >=21 && idade < 50)
            {
                img.setAttribute('src','imagens/adulto-f.jpg');
            }
            else if(idade >=50 && idade < 100)
            {
                img.setAttribute('src','imagens/idoso-f.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
        res.appendChild(img);
        img.style.width = '500px';
        img.style.borderRadius = '10px';
    }
}