"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderServiceType = void 0;
const graphql_1 = require("graphql");
exports.ProviderServiceType = new graphql_1.GraphQLObjectType({
    name: "providerservices",
    fields: () => ({
        serviceid: { type: graphql_1.GraphQLID },
        providerid: { type: graphql_1.GraphQLInt },
        cost: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        service: { type: graphql_1.GraphQLString },
        service_type: { type: graphql_1.GraphQLString },
        logo: { type: graphql_1.GraphQLString },
    }),
});
