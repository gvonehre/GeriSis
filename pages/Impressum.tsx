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
    <div className="min-h-screen text-[#174652] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/iStock-1564622193.jpg')" }}>
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
            Verantwortlich für den Inhalt dieser Seite:
          </h2>
          <p className="font-light leading-relaxed">
            {CONTACT_INFO.name}<br />
            {CONTACT_INFO.address}
          </p>
          <p className="font-light leading-relaxed">
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

        {/* <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Berufsbezeichnung & Zulassung
          </h2>
          <p className="font-light leading-relaxed">
            Dipl. Fussreflexzonen-Therapeutin (HPS Ebikon)<br />
            Neurosomatische Traumaintegration NSTI® Practitioner i.A.<br />
            ZSR-Nummer: {CONTACT_INFO.zsr}
          </p>
        </section> */}

        {/* <section className="mb-12">
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
        </section> */}

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Urheberrecht:
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Die Inhalte auf unserer Website, einschließlich Texte, Bilder, Grafiken, Logos und Videos, sind urheberrechtlich geschützt und gehören entweder uns oder den jeweiligen Urheberrechtsinhabern. Eine Vervielfältigung, Bearbeitung, Verbreitung oder jede andere Art der Nutzung dieser Inhalte bedarf unserer oder der Zustimmung des jeweiligen Urheberrechtsinhabers. Wer ohne Zustimmung der jeweiligen Urheberrechtsinhaber eine Urheberrechtsverletzung begeht, kann sich strafbar machen und unter Umständen Schadenersatzansprüche geltend machen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Allgemeiner Haftungsausschluss:
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Alle Angaben unseres Internetangebotes wurden sorgfältig geprüft. Wir bemühen uns, unser Informationsangebot aktuell, inhaltlich richtig und vollständig anzubieten. Trotzdem kann das Auftreten von Fehlern nicht völlig ausgeschlossen werden, womit wir keine Garantie für Vollständigkeit, Richtigkeit und Aktualität von Informationen auch journalistisch-redaktioneller Art übernehmen können. Wir übernehmen keine Haftung für Schäden materieller oder ideeller Art, die durch die Nutzung der Inhalte auf unserer Website entstehen. Sie sind allein verantwortlich für Ihre Handlungen im Zusammenhang mit der Nutzung der Inhalte und müssen sicherstellen, dass Sie alle geltenden Gesetze und Bestimmungen einhalten. Der Herausgeber kann nach eigenem Ermessen und ohne Ankündigung Texte verändern oder löschen und ist nicht verpflichtet, Inhalte dieser Website zu aktualisieren. Der Herausgeber übernimmt auch keine Verantwortung oder Haftung für den Inhalt und die Verfügbarkeit von Websites Dritter, die über externe Links von dieser Website aus erreicht werden können. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich. Der Herausgeber distanziert sich daher ausdrücklich von allen fremden Inhalten, die möglicherweise straf- oder haftungsrechtlich relevant sind oder gegen die guten Sitten verstossen.
          </p>
        </section>

{/*         <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Webdesign & Umsetzung
          </h2>
          <p className="font-light leading-relaxed text-sm">
            PHD — P. Heiniger Design, Andermatt<br />
            <a href="mailto:design@pascalheiniger.ch" className="underline underline-offset-4">
              design@pascalheiniger.ch
            </a>
          </p>
        </section> */}

        <p className="text-xs opacity-40 tracking-widest mt-16">
          ©2024 von bewegte stille.  Webdesign by Gina De Rosa.
        </p>
  {/*       <p className="text-xs opacity-40 uppercase tracking-widest mt-16">
          Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long' })}
        </p> */}
      </div>
    </div>
  );
}
