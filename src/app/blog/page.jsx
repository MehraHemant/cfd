export const revalidate = 0;

import { BlogCard } from '@/components';
import { createBucketClient } from '@cosmicjs/sdk';
import Image from 'next/image';
export default async function Page() {
  const cosmic = createBucketClient({
    bucketSlug: process.env.NEXT_PUBLIC_COSMICJS_BUCKET_SLUG,
    readKey: process.env.NEXT_PUBLIC_COSMICJS_READ_KEY,
  });

  const response = await cosmic.objects.find({ type: 'blogs' }).limit(10).props('id,slug,title,metadata,type,published_at').depth(1).sort('-1');

  const blogs = response.objects || [];
  return (
    <>
      <div className="relative w-full">
        <Image src="/images/blog.webp" className="w-full aspect-[16/4] max-lg:aspect-[16/8] object-cover" width={1500} height={1500} alt="logo" />
        <div className="absolute left-12 bottom-1/3">
          <h2 className='text-6xl max-lg:text-4xl font-semibold text-white'>Blogs</h2>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto gap-2 grid max-2xl:px-2 my-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, idx) => (
            <BlogCard key={blog?.id} title={blog?.title} publishedAt={blog?.published_at} content={blog?.metadata?.content} id={blog?.id} imgSrc={blog?.metadata?.src?.url} />
          ))}
      </div>
    </>
  );
}
