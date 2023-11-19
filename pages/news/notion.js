import { Client } from '@notionhq/client';

// NotionのIntegrationトークン
const NOTION_API_KEY = process.env.NOTION_API_KEY;

// Notionのクライアントを初期化
const notion = new Client({
  auth: NOTION_API_KEY,
});

export { notion };