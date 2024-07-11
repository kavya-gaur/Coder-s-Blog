import { IArticle } from "@/types";
import { serialize } from "next-mdx-remote/serialize";
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };

  return debounced;
};

// export const serializeMarkdown = async (item: IArticle) => {
//   const body = await serialize(item.attributes.body as string);

//   console.log("sajhasduasj", body);

//   return {
//     ...item,
//     attributes: {
//       ...item.attributes,
//       body,
//     },
//   };
// };
