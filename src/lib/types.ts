export type Product = {
  // id: string;
  name: string;
  description: string;
  price: number;
};

export type Customer = {
  id: string;
  name: string;
  context: string;
  number: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
