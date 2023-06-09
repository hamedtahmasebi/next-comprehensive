import Link from 'next/link';

import { Meta } from '@/core/layouts/Meta';
import { Main } from '@/core/templates/Main';

const Blog = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>

    {Array.from(Array(10).keys()).map((elt) => (
      <div
        className="top-[-5px] my-4 w-full rounded-md border-2 border-gray-400 p-2"
        key={elt}
      >
        <Link href={`/blog/blog-${elt}`}>{`Blog - ${elt}`}</Link>
      </div>
    ))}
  </Main>
);

export default Blog;
