import { serverQueryContent } from '#content/server';
import { defineEventHandler } from 'h3';

interface Doc {
  _id: string;
  _path: string;
  _extension: string;
  _file?: string;
  _content?: string;
  createdAt: string;
  updatedAt: string;
}

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  return docs
    .filter((doc: Doc) => doc._extension !== 'yaml' && doc._extension !== 'yml')
    .map((doc: Doc) => asSitemapUrl({
      loc: doc._path,
      lastmod: new Date(doc.updatedAt || doc.createdAt),
    }));
});
