'use client';

import { useState } from 'react';
import IslamicPattern from './IslamicPattern';
import Container from './Container';
import SectionHeading from './content/SectionHeading';
import { FAQ_ITEMS } from '@/lib/faq-data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-surface">
      <IslamicPattern className="opacity-100" opacity={0.04} />
      <Container width="narrow" className="relative py-14 sm:py-20">
        <SectionHeading title="الأسئلة الشائعة عن القبلة" />

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white dark:bg-transparent">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-base font-semibold text-text transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:px-6"
                >
                  <span>{item.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-text-secondary sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
