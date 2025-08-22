import type { H3Event } from 'h3';
import { serverQueryContent } from '#content/server';
import { Feed } from 'feed';

interface ContentType {
  _path: string;
  _dir: string;
  _draft: boolean;
  _partial: boolean;
  _locale: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _type: 'markdown' | 'yaml';
  _id: string;
  _file: string;
  _stem: string;
  _extension: 'md' | 'yml';
}

const { NUXT_SITE_URL: siteUrl, NUXT_SITE_NAME: siteName, NUXT_SITE_DESC: siteDesc, NUXT_AUTHOR_NAME: authorName } = import.meta.env;

export async function generateFeed(event: H3Event) {
  const siteCopyRight = `© ${new Date().getFullYear()} تمام حقوق این مستندات فارسی تایپ اسکریپت محفوظ است. بازنشر مطالب تنها با ذکر منبع و لینک به سایت مجاز می‌باشد.`;
  // updated: new Date(),

  const feed = new Feed({
    title: siteName,
    description: siteDesc,
    id: `${siteUrl}/`,
    link: siteUrl,
    language: 'fa-IR',
    image: `${siteUrl}/logo.png`,
    favicon: '/favicon.ico',
    copyright: siteCopyRight,
    generator: siteName,
    feedLinks: {
      json: `${siteUrl}/feed.json`,
      rss: `${siteUrl}/rss.xml`,
      atom: `${siteUrl}/atom.xml`,
    },
    author: {
      name: authorName,
    },
  });

  // Use queryCollection with event as first argument for server context
  let posts: ContentType[] = [];

  const data = await serverQueryContent<ContentType>(event).find();
  if (!data.length) {
    console.error('Error fetching posts for feed');
    posts = [];
  } else {
    data.pop();
    posts = data;
  }

  // Add posts to feed
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (!post._partial) {
      feed.addItem({
        title: post.title || '',
        id: siteUrl + post._path,
        link: siteUrl + post._path,
        description: post.description || '',
        author: [{
          name: authorName || '',
        }],
        date: post.updatedAt ? new Date(post.updatedAt ?? null) : new Date(post.createdAt ?? null),
        published: post.createdAt ? new Date(post.createdAt ?? null) : new Date(),
      });
    }
  }

  return feed;
}
