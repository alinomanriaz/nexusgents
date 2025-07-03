"use client"

import React, { useState, FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

interface Category {
  _id: string
  categoryname: string
}

interface BlogItemProps {
  featuredImage: string
  title: string
  description: string
  categories: Category[]
  authorName: string
  slug: string
  authorImage: string
  date: string | Date
  role?: string
}

const BlogItem: FC<BlogItemProps> = ({
  featuredImage,
  title,
  description,
  categories,
  authorName,
  slug,
  authorImage,
  date,
}) => {
  // Ensure we have a Date object
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const formattedDate = format(dateObj, 'MMM dd, yy')

  const [isLoading, setIsLoading] = useState(true)

  // Next.js Image onLoadingComplete callback signature
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="max-w-[300px] rounded-xl mx-auto ring-1 ring-slate-200/10">
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="bg-slate-700/10 shadow-lg h-[380px] relative w-full flex flex-col justify-between px-2 pt-2 rounded-xl">
            <div>
              <div className="relative">
                <Image
                  src={featuredImage}
                  alt={title}
                  width={400}
                  height={300}
                  className={`object-cover w-full h-48 rounded-xl transition-all duration-300 ${
                    isLoading ? 'blur-sm' : 'blur-0'
                  }`}
                  onLoadingComplete={handleImageLoad}
                />
              </div>

              <div className="flex flex-col justify-between space-y-1 m-2">
                <span className="text-xs">
                  <span className="capitalize text-sm p-1 bg-gradient rounded-xl text-white font-sm pr-4 px-2">
                    {categories.map((category) => (
                      <span key={category._id} className="ml-2">
                        {category.categoryname}
                      </span>
                    ))}
                  </span>
                </span>
                <h1 className="text-lg font-semibold line-clamp-2 leading-6 pt-2 text-ellipsis">
                  {title}
                </h1>
                <p className="w-full text-neutral-400 dark:text-gray-500 text-sm line-clamp-2 text-ellipsis">
                  {description}
                </p>
              </div>
            </div>
            <div className="border-slate-300 dark:border-gray-800 text-neutral-400 px-1 dark:text-gray-500 border-t-2 text-sm">
              <div className="flex h-full py-1 space-x-2 justify-start items-center">
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="text-sm">
                  by {authorName} — {formattedDate}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogItem
