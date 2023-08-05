import useSWR from "swr";
//  const
import { WpGraphQlPostConst } from "@/constants/WpGraphQlConst";
// type
import PostType from "@/types/PostType";
// service
import PostService from "@/services/PostService";

const usePostListSwr = (staticPostlist: PostType[]) => {
  const { data: postList } = useSWR(
    WpGraphQlPostConst.list,
    PostService.getList,
    { fallbackData: staticPostlist }
  );
  return postList;
};

export default usePostListSwr;
