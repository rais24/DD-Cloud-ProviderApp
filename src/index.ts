import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import {schema } from "./Schema";
import {DataSource} from 'typeorm';
import { ProviderServices } from './Entities/ProviderService';
import { Provider } from './Entities/Provider';
const path = require('path');

const main = async() => {
    
    const AppDataSource = new DataSource({
        type: "mysql",
        host: "myqs-db.cs3cgaoj1mag.us-west-2.rds.amazonaws.com",
        port: 3306,
        username: "admin",
        password: "K8UHYegC2detvThk",
        database: "cloudservices",
        logging: true,
        synchronize : false, 
        entities: [Provider,ProviderServices]
    });

    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql",graphqlHTTP({
        schema,
        graphiql : true
    }));

    app.use(express.static('public'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname,'public','index.html'));   
    });

    let port = process.env.PORT || 8080

    app.listen(port, () => {
        console.log("SERVER RUNNING ON PORT "+port);
    })
};

main().catch((err) => {
    console.log(err);
})