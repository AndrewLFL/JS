function contar ()
{
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    var res = document.getElementById('res');
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 )
    {
        window.alert('ERRO! Faltam dados');
    }
    else
    {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i<f)
        {
            for (let j=i;j<=f;j+=p)
            {
                res.innerHTML += ` ${j} `;
            }
        }
        else
        {
            for (let j=i;j>=f;j-=p)
            {
                res.innerHTML += ` ${j} `;
            }
        }
    }

}