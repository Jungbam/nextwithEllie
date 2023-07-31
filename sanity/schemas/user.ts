import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
    }),
    defineField({
      name: "following",
      title: "Following",
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
      name: "followers",
      title: "Followwers",
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
      name: "Bookmarks",
      title: "Bookmarks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
