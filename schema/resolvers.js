const resolvers = {
    Query: {
        test: ( parent, args, context, info ) => {
            return 'GraphQL Schema is Working';
        }
    }
};

module.exports = resolvers;