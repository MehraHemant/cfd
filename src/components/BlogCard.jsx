'use client'
import Image from 'next/image';
import Link from 'next/link';

export function BlogCard({ id, title, imgSrc, publishedAt }) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-100 p-4 group hover:box-content hover:shadow-xl shadow-secondary hover:border-primary hover:border-4 transition-all duration-300">
      <Image src={imgSrc} priority className="aspect-square w-full object-cover rounded-md group-hover:scale-105 transition-all duration-300" alt={title} width={300} height={200} />
      <div className="h-full flex-col flex px-2 gap-4">
      <h2 className="text-xl/snug font-didact font-semibold">{title}</h2>
      <Link href={`/blog/${id}`} className='text-lg text-primary font-semibold'>Read More ...</Link>
        <p className="text-md font-didact">{new Date(publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
      </div>
    </div>
  );
}
