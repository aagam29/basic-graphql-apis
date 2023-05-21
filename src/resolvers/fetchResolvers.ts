import { queryResolvers } from './query/queryResolvers';
import { mutationResolvers } from './mutation/mutationResolvers';

export const resolvers = [
  queryResolvers,
  mutationResolvers
];