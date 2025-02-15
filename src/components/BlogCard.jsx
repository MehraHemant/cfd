'use client'
import Image from 'next/image';
import Link from 'next/link';

export function BlogCard({ id, title, imgSrc, publishedAt }) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-100 hover:box-content p-4 hover:shadow-xl shadow-primary transition-all duration-300">
      <Image src={imgSrc} priority className="aspect-square w-full object-cover rounded-md transition-all duration-300" alt={title} width={300} height={200} />
      <div className="h-full flex-col flex px-2 transition-all duration-300 gap-4">
      <h2 className="text-xl/snug font-didact font-semibold cursor-default">{title}</h2>
      <Link href={`/blog/${id}`} className='text-lg text-primary font-semibold'>Read More ...</Link>
        <p className="text-md font-didact">{new Date(publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
      </div>
    </div>
  );
}
