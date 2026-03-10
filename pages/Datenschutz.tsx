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
    <div className="min-h-screen text-[#174652] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/iStock-1564622193.jpg')" }}>
      <div className="max-w-2xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-16 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Zurück
        </Link>

        <h1 className="text-4xl font-light tracking-wide mb-4">Datenschutz</h1>

{/*         <section className="mb-12">
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
        </section> */}

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Allgemeiner Hinweis
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Bearbeitung von Personendaten
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten. Ihre personenbezogenen Daten geben wir ausschliesslich an Personen oder Bereichen weiter, die diese zur Erfüllung der vertraglichen und gesetzlichen Pflichten benötigen. Diese sind über die geltenden Datenschutzregeln informiert und verpflichtet diese einzuhalten.
Soweit ihre Daten physisch gesammelt und bearbeitet werden, werden diese in einem abschliessbaren, unbefugten Drittpersonen nicht zugänglichen Raum oder Schrank aufbewahrt. Elektronische Daten werden gesichert aufbewahrt (Firewall, Passwort, etc.)Wo nicht kantonale oder andere gesetzlichen Regelungen anders bestimmen, werde ihre persönlichen Daten zehn Jahre nach ihrer letzten Konsultation gelöscht.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Datenschutzerklärung von Cookies
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Diese Website verwendet Cookies, um bestimmte Funktionen bereitzustellen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und eine Analyse der Nutzung unserer Website ermöglichen. Sie können das Speichern von Cookies in den Einstellungen Ihres Browsers deaktivieren. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Datenschutzerklärung für Kontaktformular
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Wenn Sie über unser Kontaktformular mit uns in Verbindung treten, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage verwendet. Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Datenschutzerklärung für Instagramm und Facebook
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Unsere Website kann Funktionen von Instagram und Facebook integrieren, z.B. das Anzeigen von Inhalten oder das Teilen von Inhalten auf Instagram und oder Facebook. Durch die Nutzung dieser Funktionen können Daten an Instagram bzw. Facebook übertragen werden. Wir haben keinen Einfluss auf den Umfang der Daten, die Instagram oder Facebook erhebt und verarbeitet.  Wenn Sie keine Zuordnung dieser Daten zu Ihrem Instagramm- oder Facebook-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei der Plattform aus. Interaktionen, insbesondere das Nutzen einer Kommentarfunktion oder das Anklicken eines „Like“- oder „Teilen“-Buttons werden ebenfalls an instagramm und Facebook weitergegeben. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
          </p>
          <p className="font-light leading-relaxed text-sm">
            Instagram:{" "}
            <a href="http://instagram.com/about/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600">
              http://instagram.com/about/legal/privacy/
            </a>
          </p>
          <p className="font-light leading-relaxed text-sm">
            Facebook:{" "}
            <a href="https://de-de.facebook.com/about/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600">
              https://de-de.facebook.com/about/privacy.
            </a>
          </p>

        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Nutzung von Google Maps-Funktion
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Unsere Website kann Funktionen von Google Maps integrieren, z.B. das Anzeigen von Karten oder das Berechnen von Routen. Durch die Nutzung dieser Funktionen können Daten an Google übertragen werden. Wir haben keinen Einfluss auf den Umfang der Daten, die Google erhebt und verarbeitet. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Google.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Datensicherheit
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Manipulation oder unberechtigtem Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium uppercase tracking-widest mb-4 opacity-60">
            Auskunftsrecht
          </h2>
          <p className="font-light leading-relaxed text-sm">
            Sie haben das Recht, jederzeit und unentgeltlich Auskunft oder eine Kopie über die von uns gespeicherten personenbezogenen Daten zu erhalten. Bei Bedarf können Sie auch eine Berichtigung, Sperrung oder Löschung dieser Daten verlangen. Wenn Sie von diesem Auskunftsrecht Gebrauch machen möchten, können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden.
          </p>
        </section>
      </div>
    </div>
  );
}
