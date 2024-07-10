import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IArticle } from "../types";
interface IPropType {
  article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">
      <Link href="#" className="w-3/4">
        <span className="text-2xl  text-white p-6 font-bold after:content-[''] after:bg-blue-500 after:block after:w-16 after:h-1 after:rounded-md after:mt-2 after:ml-6 cursor-pointer">
          {article.attributes.Title}
        </span>
      </Link>
      <Image src="/gitbook.svg" alt="gitbook" width={140} height={140} />
    </div>
  );
};

export default BlogCardWithImage;
