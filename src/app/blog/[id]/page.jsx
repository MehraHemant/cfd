'use client';
import { BlogCard } from '@/components';
import { createBucketClient } from '@cosmicjs/sdk';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const cosmic = createBucketClient({
      bucketSlug: process.env.NEXT_PUBLIC_COSMICJS_BUCKET_SLUG,
      readKey: process.env.NEXT_PUBLIC_COSMICJS_READ_KEY,
    });

    async function fetchData() {
      try {
        const response = await cosmic.objects.findOne({ id: id }).props('id,slug,title,metadata,published_at').depth(1);
        setData(response.object);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    async function fetchRecent() {
      try {
        const response = await cosmic.objects.find({ type: 'blogs' }).limit(5).props('id,slug,title,metadata,type,published_at').depth(1).sort('-1');
        setRecent(response.objects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (id) {
      fetchRecent();
      fetchData();
    }
  }, [id]);

  if (!data || !recent) return <div className="h-svh" />;

  return (
    <div className="mx-auto my-10 grid max-w-screen-xl grid-cols-7 gap-5 max-2xl:flex max-2xl:flex-col max-2xl:px-2">
      <div className="col-span-5 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Image className="aspect-[5/3] w-full object-cover xl:aspect-[7/3]" src={data.metadata.src.url} alt={data.title} width={2000} height={2000} priority />
          <p className="text-right text-sm text-gray-500">
            Published on {new Date(data.published_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.metadata.content }} className="*:list-inside *:list-disc *:[&>ul]:ps-8" />
      </div>
      <hr className="2xl:hidden" />
      <div className="col-span-2 flex flex-col gap-4">
        <h2 className="text-xl/snug font-semibold">Recent Blogs</h2>
        <hr className="max-2xl:hidden" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:flex 2xl:flex-col">
          {recent &&
            recent.map((blog, idx) =>
              blog.id !== id ? (
                <div key={idx} className="h-full">
                  <BlogCard id={blog.id} title={blog.title} imgSrc={blog.metadata.src.url} publishedAt={blog.published_at} />
                </div>
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}
