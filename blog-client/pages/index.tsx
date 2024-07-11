import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchArticles, fetchCategories } from "@/http";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "@/types";
import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";
import qs from "qs";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { debounce } from "@/utils";
const inter = Inter({ subsets: ["latin"] });

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
}
const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  const { page, pageCount } = articles.pagination;
  const router = useRouter();
  const handleSearch = (query: string) => {
    router.push(`/?search=${query}`);
    return;
  };
  return (
    <>
      <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const options: IQueryOptions = {
    populate: ["author.avatar"],
    sort: ["id:desc "],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 1,
    },
  };

  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    };
  }

  const queryString = qs.stringify(options);
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
export default Home;
