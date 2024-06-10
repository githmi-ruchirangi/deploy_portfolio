import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";

interface Props {
    image: string;
    title: string;
    date: string;
    link: string;
}

const BlogCard = ({ date, image, title, link }: Props) => {
    return (
        <div className="bg-gray-900 max-w-sm w-full mx-auto rounded-lg overflow-hidden shadow-md">
            <Link href={link}>
                <div className="block relative w-full h-64 cursor-pointer">
                    <Image 
                        src={image} 
                        alt="blog" 
                        layout="fill" 
                        objectFit="cover" 
                        className="object-cover"
                    />
                </div>
            </Link>

            <div className="p-4">
                <div className="mt-4 mb-4 px-3 py-1 bg-gray-800 w-fit flex items-center space-x-2 rounded-lg">
                    <CalendarIcon className="w-4 h-4 text-yellow-400" />
                    <p className="text-white text-sm opacity-85">{date}</p>
                </div>
                <Link href={link}>
                    <h2 className="text-lg opacity-85 hover:text-yellow-400 transition-all duration-200 cursor-pointer text-white font-semibold underline">
                        {title}
                    </h2>
                </Link>
                <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center space-x-3">
                        <ChatBubbleLeftRightIcon className="w-5 h-5 text-yellow-400" />
                        {/* <p className="text-sm text-white opacity-85 ">{comment} Comments</p> */}
                    </div>
                    <Link href={link}>
                        <button className="text-sm hover:text-yellow-500 transition-all duration-150 text-white font-semibold underline">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
