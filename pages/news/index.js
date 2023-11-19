import { useEffect, useState } from 'react';
import Link from 'next/link';
import notion  from '../../components/notion/notion';

export default function BlogPage({ posts }) {
  return (
    <div>
      <h1>ブログ</h1>
      <ul>
        {posts.map((post) => (
    <li key={post.id}>
        <Link href="/news/[id]" as={`/news/${post.id}`}>
        {post.title}
        </Link>

    </li>
    ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // NotionデータベースのID
  const databaseId = process.env.NOTION_DATABASE_ID;

  // Notionデータベースから記事を取得
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const posts = response.results.map((page) => ({
    id: page.id,
    slug: page.properties?.Slug?.rich_text[0].text.content || 'Untitled',
    title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
  }));

  return {
    props: {
      posts,
    },
  };
}
