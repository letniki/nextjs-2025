import Link from "next/link";

const PostsPage = () => {
    return (
        <ul>
            <li><Link href={'/posts/1'}>post 1</Link></li>
            <li><Link href={'/posts/2'}>post 2</Link></li>
        </ul>
    );
};

export default PostsPage;