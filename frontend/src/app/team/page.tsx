// app/Team/page.tsx
import { Metadata } from 'next';
import TeamClient from '@/components/team/Teamclient';

export const metadata: Metadata = {
  title: 'Team Us | Dharma Dental',
  description:
    'Learn Team Dharma Dental — our story, our mission, the values that guide us, and the expert team behind every smile we craft.',
  openGraph: {
    title: 'Team Us | Dharma Dental',
    description: 'Our story, our mission, and the team behind every smile.',
    type: 'website',
  },
};

export default function TeamPage() {
  return <TeamClient />;
}