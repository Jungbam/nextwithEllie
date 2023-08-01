import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "user" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "array",
      of: [
        {
          name: "comment",
          title: "Comment",
          type: "document",
          fields: [
            defineField({
              name: "author",
              title: "Author",
              type: "reference",
              to: [{ type: "user" }],
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "comments.0.comment",
      subtitle: "author.name",
      autorUsername: "author.username",
      media: "photo",
    },
    prepare(selection) {
      const { title, autorUsername, subtitle, media } = selection;
      return { title, subtitle: `by ${autorUsername} (${subtitle})`, media };
    },
  },
});
