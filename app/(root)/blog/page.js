import BlogCard from '@/components/blog/BlogCard';
import React from 'react'

const page = () => {
    const blogs = [
        {
            "title": "Create Blog Post Using Next.js 14, MDX and TailwindCSS",
            "category": "UX Design",
            "description": "Learn how to create a blog post using Next.js 14 with the new App Router, MDX, and TailwindCSS.",
            "slug": "create-blog-post-nextjs-mdx-tailwindcss"
        },
        {
            "title": "How to Customize MDX Code Blocks in Next.js 14: Syntax Highlighting",
            "category": "UX Design",
            "description": "Learn how to customize code blocks in Next.js 14 MDX by adding custom styling, syntax highlighting, and a copy-to-clipboard button.",
            "slug": "customize-mdx-code-blocks-nextjs"
        },
        {
            "title": "Next.JS : Server Components vs. Client Components",
            "category": "Dev",
            "description": "What is the difference between Server and Client Components in Next.js?",
            "slug": "server-vs-client-components-nextjs"
        }
    ];

    return (
        <div className="md:w-4/5 md:px-0 px-4 mx-auto pt-12">
            {/* Main Heading */}
            <h1 className="md:text-5xl text-3xl font-semibold leading-relaxed">
                Insights, Tips & <span className="dark:text-primary text-primary">Frontend Trends</span>
            </h1>

            {/* Subheading */}
            <p className="font-light lg:w-2/3 mt-3">
                Explore expert advice, case studies, and the latest innovations in web development and design. Stay ahead with our curated resources for creators and developers.
            </p>

            {/* Blogs */}
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {blogs.map((blog)=>(
                    <BlogCard key={blog.title} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default page