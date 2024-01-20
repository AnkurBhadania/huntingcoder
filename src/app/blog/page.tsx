import PageTitle from "../components/PageTitle";
import BlogsList from "../components/Blogs/BlogsList";
import Loading from "../components/Loading";
import { Suspense } from 'react';

async function getBlogs() {
    const API_URL = process.env.API_URL;
    const res = await fetch(`${API_URL}blog/api`, { cache: 'force-cache' })
    const blogs = await res.json()

    return blogs
}

export default async function Blog() {
	const blogs = await getBlogs()
    return (
        <>
            <PageTitle
                title={"Blog"}
                subtitle={"A blog for hunting coders by a hunting coder"}
            ></PageTitle>
            <Suspense fallback={<Loading />}>
                 <BlogsList posts={blogs} />
            </Suspense>
           
            
        </>
    );
}