'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function BlogCard({ id, title, imgSrc, publishedAt }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${id}`);
  };
  return (
    <div onClick={handleClick} className="flex w-full group flex-col gap-3 rounded-lg bg-gray-100 p-4 shadow-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
      <Image src={imgSrc} priority className="w-full rounded-md object-cover transition-all duration-300 aspect-[5/3]" alt={title} width={300} height={200} />
      <div className="flex h-full flex-col px-2 transition-all duration-300">
        <p className="line-clamp-2 h-12 overflow-hidden text-lg/snug font-didact font-medium group-hover:underline">
          {title}
        </p>
        <p className="mt-2 text-right font-didact text-sm/snug text-gray-500">
          {'Published On : ' + new Date(publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
