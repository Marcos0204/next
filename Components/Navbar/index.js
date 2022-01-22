import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <Link
                href='/'
            >
                <a>Home</a>
            </Link>
            <Link
                href='/users'
            >
                <a>Users</a>
            </Link>
            <Link
                href='/posts'
            >
               <a> Posts</a>
            </Link>
            {/* <Link
                href={`/posts/[id]`}
                as={`/posts/${5}`}
            >
               <a> Posts 5</a>
            </Link> */}
        </nav>
    )
}

export default Navbar
