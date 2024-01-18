"use client";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Blogs from "../components/Blogs/Blogs";
import { useState } from "react";

 

export default function Blog() {
	const [blogs, setBlogs] = useState([])
    return (
        <>
            <PageTitle
                title={"Blog"}
                subtitle={"A blog for hunting coders by a hunting coder"}
            ></PageTitle>

			<Blogs />
            
        </>
    );
}