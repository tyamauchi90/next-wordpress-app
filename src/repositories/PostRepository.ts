//　const
import { WpGraphQlPostConst } from "../constants/WpGraphQlConst";
// repository
import Repository from "./Repository";

class PostRepository {
  static getList() {
    return Repository(WpGraphQlPostConst.list).getWp(); // graphQLのIDEのをコピペ
  }
}

export default PostRepository;
