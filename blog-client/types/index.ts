export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  slug: string;
}
export interface IResourceMeta {
  pagination: IPagination;
}
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}
export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}
export interface IAuthor {
  data: {
    attributes: {
      firstName: string;
      lastName: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}
export interface IArticleAttribute {
  Title: string;
  body: string;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
}

export type TDirection = 1 | -1;
