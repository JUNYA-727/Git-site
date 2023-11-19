import notion from './notion';
import { Fragment } from 'react';
import {renderBlock} from './renderer'
export async function getServerSideProps(context) {
  const { id } = context.params;

  // ページの詳細情報を取得
  const response = await notion.pages.retrieve({ page_id: id });

  // ページ内のすべてのブロックを取得
  const blocksResponse = await notion.blocks.children.list({ block_id: id });

  const newsItem = {
      id: response.id,
      title: response.properties.Title.title[0].text.content,
      blocks: blocksResponse.results,
  };

  return {
      props: {
          newsItem
      }
  };
}

function NewsDetail({ newsItem }) {
    return (
        <div>
            <h1>{newsItem.title}</h1>
            <section>
              {newsItem.blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))} 
            </section>

        </div>
    );
}
 
export default NewsDetail;