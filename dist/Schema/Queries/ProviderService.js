"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_SERVICE = exports.GET_SERVICE_BY_SERVICE_ID = exports.GET_SERVICE_BY_PROVIDER_ID = void 0;
const graphql_1 = require("graphql");
const ProviderService_1 = require("../../Entities/ProviderService");
const ProviderService_2 = require("../TypeDefs/ProviderService");
exports.GET_SERVICE_BY_PROVIDER_ID = {
    type: new graphql_1.GraphQLList(ProviderService_2.ProviderServiceType),
    args: {
        provider_id: { type: graphql_1.GraphQLInt }
    },
    resolve(parent, args) {
        const { provider_id } = args;
        return ProviderService_1.ProviderServices.find({ where: { providerid: provider_id } });
    }
};
exports.GET_SERVICE_BY_SERVICE_ID = {
    type: new graphql_1.GraphQLList(ProviderService_2.ProviderServiceType),
    args: {
        service_id: { type: graphql_1.GraphQLInt }
    },
    resolve(parent, args) {
        const { service_id } = args;
        return ProviderService_1.ProviderServices.find({ where: { serviceid: service_id } });
    }
};
exports.SEARCH_SERVICE = {
    type: new graphql_1.GraphQLList(ProviderService_2.ProviderServiceType),
    args: {
        search_text: { type: graphql_1.GraphQLString },
        provider_id: { type: graphql_1.GraphQLInt }
    },
    resolve(parent, args) {
        const { search_text, provider_id } = args;
        return ProviderService_1.ProviderServices.createQueryBuilder()
            .where("providerid = :provider_id and (service like :search_text OR service_type like :search_text OR description like :search_text )", { provider_id: provider_id, search_text: `%${search_text}%` })
            .getMany();
    }
};
