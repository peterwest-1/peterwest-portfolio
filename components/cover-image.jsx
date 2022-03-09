import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ title, slug, image: source, path }) {
  const image = source ? (
    <div
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        priority
        layout="responsive"
        width={2000}
        height={600}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(600).width(2000).url()}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${path}/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
