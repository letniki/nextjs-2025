import Link from "next/link";

const CommentsPage = () => {
    return (
        <ul>
            <li><Link href={'/comments/1'}>comment 1</Link></li>
            <li><Link href={'/comments/2'}>comment 2</Link></li>
        </ul>
    );
};

export default CommentsPage;