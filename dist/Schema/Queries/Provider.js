"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_PROVIDER = void 0;
const graphql_1 = require("graphql");
const Provider_1 = require("../../Entities/Provider");
const Provider_2 = require("../TypeDefs/Provider");
exports.GET_ALL_PROVIDER = {
    type: new graphql_1.GraphQLList(Provider_2.ProviderType),
    resolve() {
        return Provider_1.Provider.find();
    }
};
