const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'nome_do_banco_de_dados';

async function createTrainingFilesCollection() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Criação da coleção "trainingFiles"
    const trainingFilesCollection = db.collection('trainingFiles');

    console.log('Coleção "trainingFiles" criada com sucesso!');

    // Exemplo de documento de ficha de treino
    const trainingFile = {
      type: 'Arquivo 1',
      exercise: 'Exercício 1',
      sets: 3,
      repetitions: 10,
      exerciseImage: 'caminho/imagem1.jpg'
    };

    // Inserir o documento de ficha de treino na coleção
    await trainingFilesCollection.insertOne(trainingFile);

    console.log('Documento de ficha de treino inserido com sucesso!');
  } catch (err) {
    console.error('Erro ao criar coleção ou inserir documento:', err);
  } finally {
    client.close();
  }
}

createTrainingFilesCollection();