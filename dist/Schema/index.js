"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Provider_1 = require("./Queries/Provider");
const ProviderService_1 = require("./Queries/ProviderService");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllProviders: Provider_1.GET_ALL_PROVIDER,
        getServiceByProviderId: ProviderService_1.GET_SERVICE_BY_PROVIDER_ID,
        getServiceByServiceId: ProviderService_1.GET_SERVICE_BY_SERVICE_ID,
        searchService: ProviderService_1.SEARCH_SERVICE
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery
});
