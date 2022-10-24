
const btn = document.querySelector('#send')
btn.addEventListener("click", function(e)
{
    e.preventDefault;
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia;
    const fdata = document.getElementById('dataForm');
    const value = fdata.value;
    var res = document.querySelector('#resultado');
        if (value==dataAtual)
        {
                res.innerHTML = "Feliz Aniversário Mãe! 👏🏽🎂💖 <br> <br>"
                var img = document.createElement('img');
                img.setAttribute('id','foto');
                img.setAttribute('src','foto.jpeg')
                document.body.style.backgroundColor = '#5E0000';
                res.appendChild(img);
                img.style.width = '390px';
                img.style.borderRadius = '10px';
                img.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.425)';
        }
        else
        {
        res.innerHTML = "Hoje não é seu aniversário!"
        document.body.style.backgroundColor = '#383F57';
        }
})