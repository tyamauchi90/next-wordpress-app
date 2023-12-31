import { NextPage } from "next";
import PostService from "../services/PostService";
import PostType from "../types/PostType";

const Home: NextPage<{
  postlist: PostType[]; // 型の指定をする場所に注意！
}> = ({ postlist }) => {
  const post = PostService.getList(); // postListをとってくる
  // const posts = getStaticPostList();

  return (
    <>
      <h1>page</h1>
      <div>
        {postlist?.map((post) => {
          return <p key={post.id}>{post.title}</p>; // 一個ずつ表示させる
        })}
      </div>
    </>
  );
};

export default Home;
