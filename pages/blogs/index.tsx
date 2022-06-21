import type { NextPage, GetStaticProps } from "next";
import { client } from "../../libs/client";
import Link from "next/link";
import { Button } from "@mui/material";

type Props = {
  blogs: Array<{
    id: string;
    title: string;
  }>;
};

const Blogs: NextPage<Props> = (props) => {
  const { blogs } = props;
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <Button>
                <a>{blog.title}</a>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context) => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
