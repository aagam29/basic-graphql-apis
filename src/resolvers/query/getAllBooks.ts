import { BOOKS } from "../../constants/constants";

export const getAllBooks = {
  Query: {
    getAllBooks: async () => BOOKS,
  }
} 
