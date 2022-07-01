"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const Schema_1 = require("./Schema");
const typeorm_1 = require("typeorm");
const ProviderService_1 = require("./Entities/ProviderService");
const Provider_1 = require("./Entities/Provider");
const path = require('path');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const AppDataSource = new typeorm_1.DataSource({
        type: "mysql",
        host: "myqs-db.cs3cgaoj1mag.us-west-2.rds.amazonaws.com",
        port: 3306,
        username: "admin",
        password: "K8UHYegC2detvThk",
        database: "cloudservices",
        logging: true,
        synchronize: false,
        entities: [Provider_1.Provider, ProviderService_1.ProviderServices]
    });
    AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true
    }));
    app.use(express_1.default.static('public'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
    let port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log("SERVER RUNNING ON PORT " + port);
    });
});
main().catch((err) => {
    console.log(err);
});
