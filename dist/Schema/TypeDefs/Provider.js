"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderType = void 0;
const graphql_1 = require("graphql");
exports.ProviderType = new graphql_1.GraphQLObjectType({
    name: "provider",
    fields: () => ({
        providerid: { type: graphql_1.GraphQLID },
        providername: { type: graphql_1.GraphQLString }
    }),
});
