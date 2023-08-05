import { NextPage } from "next";
import PostService from "../services/PostService";
import PostType from "../types/PostType";

const Home: NextPage<{
  posts: PostType[]; // 型の指定をする場所に注意！
}> = ({ posts }) => {
  async function getStaticPostList(): Promise<any> {
    const posts = await PostService.getList(); // postListをとってくる
    // const posts = getStaticPostList();
    return posts;
  }

  return (
    <>
      <h1>page</h1>
      <div>
        {posts?.map((post) => {
          return <p key={post.id}>{post.title}</p>; // 一個ずつ表示させる
        })}
      </div>
    </>
  );
};

export default Home;
