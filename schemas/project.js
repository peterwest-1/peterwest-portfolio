export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Mobile Development", value: "mobile" },
          { title: "Web Development", value: "web" },
          { title: "General Development", value: "general" },
        ],
      },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
  ],
};
