import PageTitle from "../components/PageTitle";
import BlogsList from "../components/Blogs/BlogsList";

async function getBlogs() {
    const res = await fetch('http://localhost:3000/blog/api', { cache: 'force-cache' })
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

            <BlogsList posts={blogs} />
            
        </>
    );
}