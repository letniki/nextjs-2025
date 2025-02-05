import React from 'react';
type Props ={
    params: {id: string}
}
const CommentPage = async ({params}: Props) => {
    const {id} = await params;
    return (
        <div>
            comment page {id}
        </div>
    );
};

export default CommentPage;