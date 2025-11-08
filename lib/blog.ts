import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

// Simple cache to avoid duplicate file reads
const postCache = new Map<string, BlogPost | null>();

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

// Validate slug to prevent path traversal
function isValidSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || '',
          tags: data.tags || [],
          excerpt: data.excerpt || '',
          content,
        } as BlogPost;
      });

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Check cache first
  if (postCache.has(slug)) {
    return postCache.get(slug) || null;
  }

  try {
    // Validate slug to prevent path traversal
    if (!isValidSlug(slug)) {
      console.error(`[blog] Invalid slug format: "${slug}"`);
      postCache.set(slug, null);
      return null;
    }

    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      postCache.set(slug, null);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post: BlogPost = {
      slug,
      title: data.title || '',
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content,
    };

    // Cache the result
    postCache.set(slug, post);
    return post;
  } catch (error) {
    console.error('Error reading blog post:', error);
    postCache.set(slug, null);
    return null;
  }
}
