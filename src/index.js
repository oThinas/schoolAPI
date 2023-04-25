import express from 'express';

export const app = express();
app.use(express.json());

app.get('/', (__, response) => response.status(200).send({ message: 'SchoolAPI.' }));
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
