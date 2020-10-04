import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

//Plugin para o express entender json
app.use(express.json());

app.use(routes);

//MÉTODOS HTTP:
//GET: BUSCAR OU LISTAR UMA INFORMAÇÃO /SEMPRE USADA NA REQUISIÇÃO
//POST: CRIAR ALGUMA NOVA INFORMAÇÃO
//PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE
//DELETE: DELETAR UMA INFORMAÇÃO EXISTENTE

//corpo da requisição (Request Body): Dados para criação ou atualização para um registro
//Route Params - identificar qual recurso eu quero atualizar ou deletar
//Query Params - Paginação, filtros, ordenação

/** 
app.post('/', (request, response)=> {
    return response.json({message: "Hello World!"})
})*/

//exemplo de rota http://localhost300
//exemplo de recurso /users

//porta localhost:3333
app.listen(3333);