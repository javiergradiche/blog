import { getPosts } from "@/app/get-posts";

export async function GET() {
  const posts = await getPosts();
  const max = 100; // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Javier Gradiche</title>
    <subtitle>Essays</subtitle>
    <link href="https://javiergradiche.com/atom" rel="self"/>
    <link href="https://javiergradiche.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://javiergradiche.com/</id>
    <author>
      <name>Javier Gradiche</name>
      <email>javiergradiche@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/);
      if (!dateMatch) return "";
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://javiergradiche.com/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
