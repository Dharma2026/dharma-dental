import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'doctor',
  title: 'Doctors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., DDS, DMD, BDS, Orthodontist',
      placeholder: 'DDS',
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'General Dentistry', value: 'general' },
          { title: 'Orthodontics', value: 'orthodontics' },
          { title: 'Periodontics', value: 'periodontics' },
          { title: 'Endodontics', value: 'endodontics' },
          { title: 'Prosthodontics', value: 'prosthodontics' },
          { title: 'Oral Surgery', value: 'oral-surgery' },
          { title: 'Pediatric Dentistry', value: 'pediatric' },
          { title: 'Cosmetic Dentistry', value: 'cosmetic' },
          { title: 'Implantology', value: 'implantology' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
      ],
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'Brief description for author bylines (100-150 characters)',
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Degrees, certifications, and credentials',
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Number of years practicing',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'object',
      fields: [
        {
          name: 'acceptingNewPatients',
          title: 'Accepting New Patients',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'schedule',
          title: 'Schedule',
          type: 'text',
          rows: 2,
          description: 'e.g., Mon-Fri 9AM-5PM',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Doctor',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which doctors appear (lower numbers first)',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        ...selection,
        title,
        subtitle: subtitle || 'Doctor',
      };
    },
  },
  orderings: [
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});