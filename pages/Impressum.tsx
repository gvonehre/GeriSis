// -----------------------------------------------------------------------------
// File: pages/Impressum.tsx
// Purpose: Impressum (legal notice) page – Swiss law compliant.
// -----------------------------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Impressum() {
  return (
    <div className="min-h-screen bg-[#F6E6D2] text-[#174652]">
      <div className="max-w-2xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-16 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Zurück
        </Link>

        <h1 className="text-4xl font-light tracking-wide mb-16">Impressum</h1>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Betreiberin dieser Website
          </h2>
          <p className="text-lg font-light leading-relaxed">
            {CONTACT_INFO.name}<br />
            {CONTACT_INFO.address}
          </p>
          <p className="mt-4 font-light leading-relaxed">
            E-Mail:{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="underline underline-offset-4">
              {CONTACT_INFO.email}
            </a>
            <br />
            Telefon:{' '}
            <a href={`tel:${CONTACT_INFO.phone}`} className="underline underline-offset-4">
              {CONTACT_INFO.phone}
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Berufsbezeichnung & Zulassung
          </h2>
          <p className="font-light leading-relaxed">
            Dipl. Fussreflexzonen-Therapeutin (HPS Ebikon)<br />
            Neurosomatische Traumaintegration NSTI® Practitioner i.A.<br />
            ZSR-Nummer: {CONTACT_INFO.zsr}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Haftungsausschluss
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Die Autorin übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit
            und Aktualität der auf dieser Website bereitgestellten Inhalte. Haftungsansprüche
            gegen die Autorin wegen Schäden materieller oder immaterieller Art, die aus dem
            Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen
            entstanden sind, werden ausgeschlossen, sofern kein nachweislich vorsätzliches oder
            grob fahrlässiges Verschulden vorliegt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Urheberrecht
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Die Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
            der Autorin.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Webdesign & Umsetzung
          </h2>
          <p className="font-light leading-relaxed text-sm">
            PHD — P. Heiniger Design, Andermatt<br />
            <a href="mailto:design@pascalheiniger.ch" className="underline underline-offset-4">
              design@pascalheiniger.ch
            </a>
          </p>
        </section>

        <p className="text-xs opacity-40 uppercase tracking-widest mt-16">
          Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long' })}
        </p>
      </div>
    </div>
  );
}
