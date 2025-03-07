//使ってない
import PostForm from "./PostForm";
import PostList from "./PostList";

//https://github.com/safak/next-social/blob/completed/src

interface UserData {
  id: string;
  username: string | null;
  image: string | null;
}

interface LeftSidebarProps {
  currentLoginUserData: UserData | null;
}

export default function ReviewList() {
  return (
    <div className="bg-white shadow-md rounded mt-4 w-full flex ">
      <PostForm />
    </div>
  );
}
