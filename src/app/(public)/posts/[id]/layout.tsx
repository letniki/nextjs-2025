import {Metadata} from "next";

 export const metadata: Metadata = {
     title: ' metadata'
 }


type Props = { children: React.ReactNode }

const PostLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostLayout;