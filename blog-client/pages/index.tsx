import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchArticles, fetchCategories } from "@/http";
import { IArticle, ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";
import qs from "qs";
const inter = Inter({ subsets: ["latin"] });

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}
const Home: NextPage = ({ categories, articles }: IPropTypes) => {
  return (
    <>
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc "],
  };

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
