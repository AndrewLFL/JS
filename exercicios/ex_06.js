let num = document.getElementById('txtn');
let lista = document.getElementById('vet');
let res = document.getElementById('res');
let vetor = [];

function isNumero(n)
{
    if(Number(n)>=1 && Number(n)<=100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function inLista(n,v)
{
    if(v.indexOf(Number(n)) != -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function adicionar()
{
    if(isNumero(num.value) && !inLista(num.value, vetor))
    {
        vetor.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
    }
    else
    {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}

function finalizar()
{
    if(vetor.length == 0)
    {
        window.alert('Insira valores para analisar!');
    }
    else
    {
        let total = vetor.length;
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;
        for(let i = 0;i < vetor.length;i++)
        {
            if (maior<vetor[i])
            {
                maior=vetor[i];
            }
            if (menor>vetor[i])
            {
                menor=vetor[i];
            }
            soma += vetor[i];
        }
        media=soma/total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>${maior} é o maior número cadastrado.</p>`;
        res.innerHTML += `<p>${menor} é o menor número cadastrado.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}`;
        res.innerHTML += `<p>A média dos valores é ${media}`;
    }
}