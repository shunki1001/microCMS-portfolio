import { client } from "../../libs/client";
import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import { Container } from "@mui/material";
import styles from "../../components/blogPage.module.css";
import { headingsList } from "../../libs/headings-list";
import { Heading } from "../../components/Heading";

type Props = {
  blog: {
    title: string;
    publishedAt: string;
    content: string;
    body: any;
    tableOfContentsArray: [];
  };
};

export default function BlogId(props: Props) {
  const { blog } = props;
  return (
    <Container maxWidth="lg">
      <main>
        <h1 style={{ marginTop: 0, paddingTop: "1em" }}>{blog.title}</h1>
        <p style={{ textAlign: "right" }}>
          更新日：{blog.publishedAt.split("T")[0]}
        </p>
        <Heading headingsList={blog.tableOfContentsArray} />
        <div className={styles.container}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </div>
      </main>
    </Container>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map(
    (content: { id: string }) => `/blogs/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  // https://blog.microcms.io/syntax-highlighting-on-server-side/
  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  // 目次
  const tableOfContentsArray = headingsList(data.content);
  return {
    props: {
      blog: {
        ...data,
        body: $.html(),
        tableOfContentsArray: tableOfContentsArray,
      },
    },
  };
};
