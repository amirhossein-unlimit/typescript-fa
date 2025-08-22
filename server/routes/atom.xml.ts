import type { H3Event } from 'h3';
import { generateFeed } from '../utils/feedGenerator';

export default defineEventHandler(async (event: H3Event) => {
  const feed = await generateFeed(event);
  const atomString = feed.atom1();

  event.node.res.setHeader('Content-Type', 'application/atom+xml; charset=utf-8');
  event.node.res.setHeader('Cache-Control', 'max-age=3600'); // Cache for 1 hour
  return atomString;
});
