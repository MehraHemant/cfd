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
      bucketSlug: 'cfd-production',
      readKey: 'wK1z1cMsX2l4xBGGJ7VeXrlhiJKcAVYexYQvGpc7n7FD9d18tD',
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
    if (id) {fetchRecent(); fetchData();};
  }, [id]);

  if (!data || !recent) return <div className='h-svh'/>

  return (
    <div className="mx-40 my-10 grid grid-cols-7 gap-5">
      <div className="col-span-5 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Image className="aspect-[5/2] w-full object-cover" src={data.metadata.src.url} alt={data.title} width={2000} height={2000} priority />
          <p className="text-right italic">Published on {new Date(data.published_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
        </div>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.metadata.content }} className='px-3'/>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Recent Blogs</h2>
        {recent &&
          recent.map((blog, idx) =>
            blog.id !== id ? <BlogCard key={idx} id={blog.id} title={blog.title} imgSrc={blog.metadata.src.url} publishedAt={blog.published_at} /> : null
          )}
      </div>
    </div>
  );
}
