import BlogsList from "./BlogsList";

async function getBlogs() {
    const res = await fetch('http://localhost:3000/blog/api', { cache: 'force-cache' })
    const blogs = await res.json()
   
    return blogs
  }

export default  async function Blogs() {
    const blogs = await getBlogs()
    return (
        <>
            <BlogsList posts={blogs} />
        </>
    );
}