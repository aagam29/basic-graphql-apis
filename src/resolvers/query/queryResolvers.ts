// IF YOU ARE USING PRISMA THIS IS HOW YOU WILL NEED TO WRITE ALL YOUR RESOLVERS.

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const queryResolvers = {
  Query: {

    user: async (parent, { id }, context) => {
      const response = await prisma.users.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          contacts: {
            include: {
              contact_label: {
                include: {
                  labels: true
                }
              }
            }
          }
        },
      });
      return response;
    },

    contact_label: async (parent, { contact_id, label_id }, context) => {
      const response = await prisma.contact_label.findUnique({
        where: {
          contact_id_label_id: {
            contact_id,
            label_id,
          }
        },
        include: {
          contacts: true,
          labels: true
        },
      });
      return response;
    },

    contact: async (parent, { id }, context) => {
      const response = await prisma.contacts.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          contact_label: true,
          users: true
        },
      });
      return response;
    },

    label: async (parent, { id }, context) => {
      const response = await prisma.labels.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          contact_label: true,
        },
      });
      return response;
    },

    allUsers: async (parent, args, context) => {
      const response = await prisma.users.findMany({
        include: {
          contacts: {
            include: {
              contact_label: {
                include: {
                  labels: true
                }
              }
            }
          },
        },
      });
      return response;
    },

    allContactLabels: async (parent, args, context) => {
      const response = await prisma.contact_label.findMany({
        include: {
          contacts: {
            include: {
              users: true
            }
          },
          labels: true
        },
      });
      return response;
    },

    allContacts: async (parent, args, context) => {
      const response = await prisma.contacts.findMany({
        include: {
          contact_label: {
            include: {
              labels: true
            }
          },
          users: true
        },
      });
      return response;
    },

    allLabels: async (parent, args, context) => {
      const response = await prisma.labels.findMany({
        include: {
          contact_label: true,
        },
      });
      return response;
    },
  },
};
