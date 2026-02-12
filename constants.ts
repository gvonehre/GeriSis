// -----------------------------------------------------------------------------
// File: constants.ts
// Purpose: Content/data constants used across page sections and contact blocks.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import { Service, Article, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'reflex',
    title: 'Fussreflexzonen-Therapie',
    duration: '60 – 75 Min.',
    price: 120, // Base price
    priceRange: '120 – 150',
    isReflexology: true,
    description: 'Aktivierung der Selbstheilungskräfte durch gezielte Druckmassage an den Füssen.',
    longDescription: 'Die Fussreflexzonen-Therapie basiert auf der Vorstellung, dass der Fuss ein verkleinertes Abbild des gesamten Menschen ist. Durch gezielte Druckimpulse am Fuss können korrespondierende Körperbereiche und Organe stimuliert und harmonisiert werden. \n\nDie Erstbehandlung beinhaltet eine ausführliche Anamnese und dauert ca. 75 Minuten. Folgebehandlungen dienen der gezielten Therapie und dauern in der Regel 60 Minuten.',
    images: [
      'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop', // Feet/Relax
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop', // Massage
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop'  // Spa vibe
    ]
  },
  {
    id: 'neuro',
    title: 'Neurosomatische Körperarbeit',
    duration: '60 Min.',
    price: 120,
    description: 'Tiefenentspannung und Neuausrichtung des Nervensystems durch sanfte Impulse.',
    longDescription: 'Die Neurosomatische Integration® ist eine sanfte, aber tiefgreifende Methode zur Regulation des Nervensystems. Durch achtsame Berührung und gezielte Impulse wird dem Körper geholfen, Stressmuster loszulassen und in einen Zustand der Sicherheit und Entspannung zurückzufinden. Besonders geeignet bei chronischen Schmerzen, Erschöpfung und innerer Unruhe.',
    images: [
      'https://images.unsplash.com/photo-1598901963450-813d66667971?q=80&w=1200&auto=format&fit=crop', // Back massage
      'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1200&auto=format&fit=crop', // Gentle touch
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop'  // Natural light
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Die Stille im Körper finden',
    excerpt: 'Warum wahre Entspannung mehr ist als nur das Ausruhen auf dem Sofa.',
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=1200&auto=format&fit=crop',
    content: `
      <p class="mb-4">In unserer heutigen, schnelllebigen Welt ist "Entspannung" oft ein weiterer Punkt auf der To-Do-Liste. Wir "machen" Yoga, wir "meditieren", wir "ruhen uns aus". Doch wahre Stille im Körper ist kein Tun, sondern ein Lassen.</p>
      <p class="mb-4">Wenn das Nervensystem ständig im Alarmzustand ist (Sympathikus), können wir selbst auf dem Sofa liegend innerlich unter Hochspannung stehen. Die Neurosomatische Körperarbeit setzt genau hier an: Wir laden den Körper ein, die Sicherheit wiederzuentdecken, die notwendig ist, um wirklich loszulassen.</p>
      <h3 class="text-xl font-serif text-sage-800 dark:text-sage-200 mt-6 mb-3">Der Weg nach Innen</h3>
      <p class="mb-4">Es geht darum, die feinen Signale des Körpers wieder wahrzunehmen. Wo halte ich fest? Wo fliesst der Atem frei? In der Behandlung schaffen wir einen Raum, in dem diese Beobachtungen wertfrei geschehen dürfen. Das ist der Beginn von nachhaltiger Veränderung.</p>
    `
  },
  {
    id: '2',
    title: 'Reflexzonen als Spiegel',
    excerpt: 'Wie unsere Füsse Aufschluss über unser inneres Gleichgewicht geben.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop',
    content: `
      <p class="mb-4">Unsere Füsse tragen uns durch das Leben, doch schenken wir ihnen oft erst Beachtung, wenn sie schmerzen. Dabei sind sie ein faszinierendes Spiegelbild unseres gesamten Organismus.</p>
      <p class="mb-4">Die Reflexzonentherapie geht davon aus, dass jeder Bereich des Fusses mit einem Organ oder einer Körperpartie in Verbindung steht. Auffälligkeiten am Fuss – sei es eine Verhärtung, eine Rötung oder eine Schmerzempfindlichkeit – können Hinweise auf Ungleichgewichte im zugehörigen Organ sein.</p>
      <h3 class="text-xl font-serif text-sage-800 dark:text-sage-200 mt-6 mb-3">Mehr als nur Massage</h3>
      <p class="mb-4">Die Behandlung ist weit mehr als eine lokale Massage. Durch die gezielte Stimulation der Reflexzonen setzen wir Impulse, die die Durchblutung fördern, den Lymphfluss anregen und das vegetative Nervensystem harmonisieren. Es ist ein Dialog mit dem Körper über die Füsse.</p>
    `
  },
  {
    id: '3',
    title: 'Neurosomatik verstehen',
    excerpt: 'Der sanfte Dialog zwischen Nervensystem und Muskeltonus.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    content: `
      <p class="mb-4">Unser Körper speichert Erfahrungen. Stress, Traumata und emotionale Belastungen hinterlassen Spuren in unserem Gewebe und in der Grundspannung unserer Muskulatur. Die Neurosomatik betrachtet diese Zusammenhänge ganzheitlich.</p>
      <p class="mb-4">Anders als rein mechanische Therapieformen, die versuchen, eine Verspannung "wegzudrücken", fragt die neurosomatische Arbeit: "Warum hält der Körper hier fest?" Oft ist die Spannung eine Schutzfunktion.</p>
      <h3 class="text-xl font-serif text-sage-800 dark:text-sage-200 mt-6 mb-3">Sanftheit als Schlüssel</h3>
      <p class="mb-4">Indem wir dem Körper mit Sicherheit und sanften Impulsen begegnen, signalisieren wir dem Nervensystem, dass die Gefahr vorüber ist. Der Schutzpanzer darf schmelzen. Dies ermöglicht oft tiefgreifendere und langanhaltendere Lösungen als forcierte Eingriffe.</p>
    `
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Sind Sie Krankenkassen anerkannt?',
    answer: 'Ja, ich bin beim EMR registriert. Meine ZSR-Nummer lautet O772664. Bitte klären Sie vorab mit Ihrer Zusatzversicherung, ob die Kosten übernommen werden.'
  },
  {
    question: 'Was muss ich zur Behandlung mitbringen?',
    answer: 'Bequeme Kleidung ist von Vorteil. Handtücher und alles Weitere stelle ich zur Verfügung.'
  },
  {
    question: 'Wie läuft die Bezahlung ab?',
    answer: 'Die Bezahlung erfolgt direkt vor Ort via Twint oder in Bar. Sie erhalten den Rückforderungsbeleg anschliessend bequem per E-Mail.'
  },
  {
    question: 'Was passiert, wenn ich den Termin nicht wahrnehmen kann?',
    answer: 'Bitte sagen Sie Termine mindestens 24 Stunden im Voraus ab, damit ich die Zeit nicht verrechnen muss.'
  }
];

export const CONTACT_INFO = {
  name: 'Géraldine von Ehrenberg',
  address: 'Bleicherstrasse 19, 6003 Luzern',
  email: 'hello@bewegtestille.ch',
  phone: '+41 77 497 95 00',
  zsr: 'O772664'
};
