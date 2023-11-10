import { Client } from "@notionhq/client";
const notion = new Client({
    auth: process.env.NOTION_API,
})

export const getDatabase = async(databaseId)=>{

};
export const getPage = async(pageId)=>{
    const response = await notion.pages.retrieve({page_id:pageId});
    return response;
};

export const getBlocks = async(blockId)=>{

};