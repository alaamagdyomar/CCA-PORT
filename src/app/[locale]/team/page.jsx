// /src/app/[locale]/team/page.tsx
'use client';
import { useTranslations } from 'next-intl';

export default function TeamPage() {
  const t = useTranslations('team');

  const teamMembers = [
    { name: 'Alaa Magdy', role: 'Founder & CEO' },
    { name: 'Nour Hassan', role: 'Logistics Manager' },
    { name: 'Maya Ibrahim', role: 'E-Commerce Lead' },
    { name: 'Omar Khaled', role: 'Frontend Developer' },
    { name: 'Rana El Sayed', role: 'Customer Experience Specialist' }
  ];

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">{t('title')}</h1>
      <p className="mt-4 text-center text-gray-600">{t('description')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-center">
            <div className="text-xl font-semibold text-black">{member.name}</div>
            <div className="text-sm text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
