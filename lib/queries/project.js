//PROJECT
const projectFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  category,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const projectIndexQuery = `
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectIndexMobileQuery = `
*[_type == "project"  && category == 'mobile'] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectIndexFrontendQuery = `
*[_type == "project"  && category == 'frontend'] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectIndexBackendQuery = `
*[_type == "project"  && category == 'backend'] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`;

export const projectMobileQuery = `
{
  "project": *[_type == "project" && slug.current == $slug && catergory == 'mobile'] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug && catergory == 'mobile'] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`;

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;
