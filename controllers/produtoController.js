const produtos= require("../dados/produtos")//importando o modulo da pasta dados
function listarProdutos(req,res){
    return res.json(produtos);
}//essa função responde com a lista de produtos criados q vai ser exibida na rota GET

function cadastrarProduto(req,res){
const { nome, preco }= req.body; //aqui é os dados que vão ser enviados para o servidor atualizando o database criado na pasta dados

const novoProduto ={
    id:produtos.length + 1,
    nome,
    preco,
};//variável com os dados do novo produto cadastrado na rota post

produtos.push(novoProduto);//"novoProduto" agora tb está dentro do array de "produtos"
return res.status(201).json({ mensagem: "Produto cadastrado", novoProduto});//mostra a msg e os dados do novo produto cadastrado
}//function usada na rota POST

function atualizarProduto(req,res){
    const {id}= req.params;//aq ele pega o id que é colocado na url da rota post
    //ex: http://localhost:3002/2 nesse caso o id vai ser 2, só q na variável ele retorna em string ("2") 
    const {nome,preco}=req.body; //dados que foram enviados anteriormente
    const produtoID= produtos.find(produtos => produtos.id === Number(id));//aqui o produto a ser editado é selecionado pelo ID. *o Number foi usado pra converter o id de string pra numero, pq ele vem como string la no req.params
    
    if(!produtoID){
        return res.status(404).json({erro:"Produto não encontrado"})
    }
   
    produtoID.nome= nome;
    produtoID.preco= preco;
    //aq q nós atualizamos e editamos os dados dos objetos la do começo da função

    return res.status(201).json({mensagem:"Produto Atualizado!",produtoID})
}//toda essa função atualizarProduto vai ser usada na rota PUT

function deletarProduto(req, res) {
  const { id } = req.params;
  const index = produtos.findIndex(p => p.id === Number(id));
  
  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }
  
  produtos.splice(index, 1);
  return res.json({ mensagem: "Produto removido" });
}

module.exports = { listarProdutos, cadastrarProduto, atualizarProduto, deletarProduto};