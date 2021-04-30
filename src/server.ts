//console.log('Hola al dashboard admin Eserp');

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/index';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import expressPlayGround from 'graphql-playground-middleware-express';

const app = express();

app.use('*');

app.use(compression());

const servidor = new ApolloServer ({
    schema,
    introspection: true
})

servidor.applyMiddleware({app});

app.get('/', expressPlayGround({
   endpoint: '/graphql'
}))

const httpServer = createServer(app);

const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    },
() => console.log(`Servidor Apollo Admin Online Listo http://localhost:${PORT}/graphql`)
);
