export type SearchResponse<T> = {
  content: T[];
  numberOfElements: number;
  page: number;
  totalElements: number;
};

export type Product = {
  id: number;
  label: string;
  description: string;
  creationDate: number;
  owner: {
    id: number;
    nickname: string;
    picture: {
      id: number;
      fileName: string;
    };
  };
  pictures: {
    id: number;
    fileName: string;
  }[];
};
