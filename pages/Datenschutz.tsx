// -----------------------------------------------------------------------------
// File: pages/Datenschutz.tsx
// Purpose: Privacy policy – Swiss DSG (Datenschutzgesetz) compliant.
// -----------------------------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Datenschutz() {
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

        <h1 className="text-4xl font-light tracking-wide mb-4">Datenschutzerklärung</h1>
        <p className="text-sm font-light opacity-60 mb-16">
          Gemäss Schweizer Datenschutzgesetz (DSG / nDSG)
        </p>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            1. Verantwortliche Stelle
          </h2>
          <p className="font-light leading-relaxed">
            {CONTACT_INFO.name}<br />
            {CONTACT_INFO.address}<br />
            <a href={`mailto:${CONTACT_INFO.email}`} className="underline underline-offset-4">
              {CONTACT_INFO.email}
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            2. Welche Personendaten werden bearbeitet
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Beim Besuch dieser Website werden automatisch technische Daten erhoben
            (IP-Adresse, Browser, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs).
            Diese Daten werden ausschliesslich zur Sicherstellung des Betriebs der Website
            verwendet und nicht mit anderen Daten verknüpft.
          </p>
          <p className="font-light leading-relaxed text-sm mt-4">
            Wenn Sie über das Buchungssystem (Google Calendar) einen Termin vereinbaren oder
            per E-Mail Kontakt aufnehmen, werden die von Ihnen freiwillig angegebenen Daten
            (Name, E-Mail-Adresse, Telefonnummer, Anliegen) zur Terminorganisation und
            Kommunikation verwendet.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            3. Zweck der Bearbeitung
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Personendaten werden ausschliesslich für folgende Zwecke bearbeitet:
          </p>
          <ul className="mt-3 space-y-2 text-sm font-light list-none">
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Terminvereinbarung und -verwaltung</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Beantwortung von Anfragen</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Durchführung von therapeutischen Behandlungen (inkl. gesetzlich erforderlicher Dokumentation)</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Abrechnung mit Krankenkassen (ZSR-Nr. {CONTACT_INFO.zsr})</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            4. Weitergabe von Daten
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Personendaten werden nicht an Dritte verkauft oder vermietet. Eine Weitergabe
            erfolgt nur, soweit dies gesetzlich erforderlich ist (z.B. Abrechnung über
            Krankenkassen) oder Sie ausdrücklich eingewilligt haben.
          </p>
          <p className="font-light leading-relaxed text-sm mt-4">
            Für die Terminbuchung wird Google Calendar (Google LLC, USA) eingesetzt.
            Dabei gelten die Datenschutzbestimmungen von Google. Mit der Nutzung des
            Buchungslinks stimmen Sie der Bearbeitung durch Google zu.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            5. Cookies
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Diese Website verwendet ausschliesslich technisch notwendige Cookies (z.B.
            zur Speicherung Ihrer Hell-/Dunkel-Modus-Präferenz). Es werden keine
            Tracking- oder Marketing-Cookies eingesetzt. Eine Einwilligung ist hierfür
            nicht erforderlich.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            6. Hosting
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Diese Website wird bei einem Hosting-Anbieter betrieben. Dabei werden
            technische Zugriffsdaten (Server-Logs) gespeichert, die für den Betrieb
            notwendig sind und nach spätestens 30 Tagen gelöscht werden.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            7. Aufbewahrungsdauer
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Personendaten werden nur so lange aufbewahrt, wie es für den jeweiligen
            Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen
            (z.B. 10 Jahre für Buchhaltungsunterlagen gemäss OR Art. 958f).
            Behandlungsdokumentation wird gemäss den berufsrechtlichen Vorgaben aufbewahrt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            8. Ihre Rechte
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Sie haben nach dem Schweizer DSG das Recht auf:
          </p>
          <ul className="mt-3 space-y-2 text-sm font-light">
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Berichtigung unrichtiger Daten</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Löschung Ihrer Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
            <li className="flex gap-3"><span className="w-5 h-[1px] bg-[#174652] mt-3 shrink-0"></span>Widerspruch gegen die Bearbeitung</li>
          </ul>
          <p className="font-light leading-relaxed text-sm mt-4">
            Für die Ausübung Ihrer Rechte wenden Sie sich an:{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="underline underline-offset-4">
              {CONTACT_INFO.email}
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            9. Beschwerderecht
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Bei datenschutzrechtlichen Anliegen haben Sie das Recht, beim Eidgenössischen
            Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) Beschwerde einzureichen:{' '}
            <a
              href="https://www.edoeb.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              www.edoeb.admin.ch
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
