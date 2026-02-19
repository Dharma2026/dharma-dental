// app/contact/page.tsx
import { Metadata } from 'next';
import ContactClient from '@/components/contact/Contactclient';

export const metadata: Metadata = {
  title: 'Contact Us | Dharma Dental',
  description: 'Get in touch with Dharma Dental. Book an appointment, find our clinics, or reach out for any dental care queries.',
  openGraph: {
    title: 'Contact Us | Dharma Dental',
    description: 'Book an appointment or find a Dharma Dental clinic near you.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}