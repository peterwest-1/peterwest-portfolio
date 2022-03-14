import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroProject({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}) {

  
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          path="projects"
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/projects/[slug]`} as={`/projects/${slug}`}>
              <a className="font-bold hover:underline">{title}</a>
            </Link>
          </h3>
          <span className="inline-flex items-center justify-center px-2 py-1 text-sm uppercase font-bold leading-none text-white bg-black rounded">{category}</span>
          <div className="mb-4 md:mb-0 text-lg font-sem">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
