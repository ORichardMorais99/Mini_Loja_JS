const itens = [
    {
        id: 0,
        nome: 'camiseta 1',
        img: 'camiseta1.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'camiseta 2',
        img: 'camiseta2.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'camiseta 3',
        img: 'camiseta3.jpg',
        quantidade: 0
    }
]

iniciarlizarLoja = () => {
    var containerProdutos = document.getElementById('produtos')
    itens.map((val) => {
        containerProdutos.innerHTML += `

        <div class = "produto-single">
            <img src = "`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key= "`+val.id+`" href="#">Adicionar ao carrinho!</a>
        </div>
        
        `
    })
}

iniciarlizarLoja();

atualizarCarrinho = () => {    
var containerCarrinho = document.getElementById('carrinho')
containerCarrinho.innerHTML = '';
itens.map((val) => {
    if(val.quantidade > 0){
    containerCarrinho.innerHTML += `

    <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
    <hr>
    
    `;
    }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0;  i <  links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}
