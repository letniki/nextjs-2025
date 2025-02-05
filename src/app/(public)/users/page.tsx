import React from 'react';
import Link from "next/link";


const UsersPage = () => {
    return (
        <ul>
           <li><Link href={'/users/1'}>user 1</Link></li>
            <li><Link href={'/users/2'}>user 2</Link></li>
        </ul>
    );
};

export default UsersPage;