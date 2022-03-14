import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function ProjectPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          path="projects"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/projects/${slug}`}>
          <a className="font-bold hover:underline">{title}</a>
        </Link>
      </h3>
      <span className="inline-flex items-center justify-center px-2 py-1 text-sm uppercase font-bold leading-none text-white bg-black rounded">{category}</span>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
