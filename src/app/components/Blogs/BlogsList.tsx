'use client'
import Image from "next/image";
import Link from "next/link";

export default function BlogsList(props:any) {
    return (
        <>
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {props.posts && props.posts.map((blog: any) => (
                <article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
					<Image
							src={blog.image}
							alt={blog.title}
							className=""
							width={384}
							height={125}
							loading="lazy"
						/>
                    <div className="flex items-center gap-x-4 text-xs">
						<time className="text-gray-500">
							{blog.date}
						</time>
                        {blog.category && blog.category.map((cat: any) => (
                            <Link key={cat} href="/" className="elative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{cat}</Link> 
                        ))}
						
					</div>
					<div className="group relative">
                        
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link  href={`/blog/${blog.slug}`} >
								<span className="absolute inset-0"></span>
								{blog.title}
							</Link>
						</h3>
						<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
							{blog.body}
						</p>
					</div>
					<div className="relative mt-8 flex items-center gap-x-4">
						<Image
							src={blog.author.image}
							alt={blog.title}
							className="rounded-full"
							width={40}
							height={40}
							loading="lazy"
						/>

						<div className="text-sm leading-6">
							<p className="font-semibold text-gray-900">
								<a href="#">
									<span className="absolute inset-0"></span>
									{blog.author.name}
								</a>
							</p>
							<p className="text-gray-600">
                            {blog.author.positions}
							</p>
						</div>
					</div>
				</article>
			 ))}	
			</div>
            
        </>
    );
}