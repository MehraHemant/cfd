import { BlogCard } from '@/components';
import { createBucketClient } from '@cosmicjs/sdk';
export default async function Page() {
  const cosmic = createBucketClient({
    bucketSlug: 'cfd-production',
    readKey: 'wK1z1cMsX2l4xBGGJ7VeXrlhiJKcAVYexYQvGpc7n7FD9d18tD',
  });

  const response = await cosmic.objects.find({ type: 'blogs' }).limit(10).props('id,slug,title,metadata,type,published_at').depth(1).sort('-1');

  const blogs = response.objects || [];
  return (
    <div className="mx-40 grid grid-cols-3">
      <div className="col-span-3 grid grid-cols-3 gap-5 p-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} publishedAt={blog.published_at} content={blog.metadata.content} id={blog.id} imgSrc={blog.metadata.src.url} />
        ))}
      </div>
    </div>
  );
}
