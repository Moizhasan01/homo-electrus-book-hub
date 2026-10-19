import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "@/lib/site";
import { SubscribeForm } from "@/components/site/SubscribeForm";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Rabih Ballout` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="px-5 py-32 text-center"><p className="font-display text-2xl text-gold-bright">Article not found</p><Link to="/blog" className="mt-6 inline-block text-gold underline">Back to the blog</Link></div>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <article>
      <img src={post.image} alt="" className="h-[45vh] w-full object-cover" />
      <div className="section-light">
        <div className="mx-auto max-w-2xl px-5 py-20">
          <p className="eyebrow !text-sepia">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <h1 className="mt-4 text-4xl text-ink md:text-5xl">{post.title}</h1>
          <div className="gold-rule mt-6 w-32" />
          <div className="mt-10 space-y-6 text-xl leading-relaxed">{post.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-5 py-16">
        <div className="border border-gold/40 p-8">
          <p className="font-display text-xl text-gold-bright">Enjoyed this essay?</p>
          <p className="mt-2 text-parchment/80">Get new writing and the free story, “The Story Behind Homo Electrus”.</p>
          <div className="mt-5"><SubscribeForm source="blog" compact cta="Subscribe" /></div>
        </div>
        <Link to="/blog" className="mt-10 inline-block font-sans text-sm uppercase tracking-widest text-gold hover:text-gold-bright">← All articles</Link>
      </div>
    </article>
  );
}
