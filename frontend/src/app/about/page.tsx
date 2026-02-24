// app/about/page.tsx
import { Metadata } from 'next';
import AboutClient from '@/components/about/Aboutclient';

export const metadata: Metadata = {
  title: 'About Us | Dharma Dental',
  description:
    'Learn about Dharma Dental — our story, our mission, the values that guide us, and the expert team behind every smile we craft.',
  openGraph: {
    title: 'About Us | Dharma Dental',
    description: 'Our story, our mission, and the team behind every smile.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}