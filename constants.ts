// -----------------------------------------------------------------------------
// File: constants.ts
// Purpose: Content/data constants used across page sections and contact blocks.
// -----------------------------------------------------------------------------

import { Service, Article, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'neuro',
    title: 'Neurosomatische Körperarbeit',
    duration: '60 – 120 Min.',
    price: 120,
    description: 'Tiefenentspannung und Neuausrichtung des Nervensystems durch sanfte Impulse.',
    longDescription: `Aus Erfahrungen lernen wir und besonders die Erfahrungen aus unserer frühen Kindheit prägen uns für das gesamte Leben. Je nachdem, ob diese in Sicherheit oder Unsicherheit gemacht werden konnten, werden sie unterschiedlich im Körper abgespeichert und haben Auswirkungen auf unseren Körper, unsere Empfindungen und unser Erleben bis ins Erwachsenenalter. Das vegetative Nervensystem, welches grundlegende Lebensfunktionen unseres Körpers steuert, spielt hierbei eine entscheidende Rolle für unser körperliches und psychisches Wohlbefinden.

In der neurosomatischen Körperarbeit beobachten wir aufmerksam die Reaktionen deines Körpers. Dadurch verstehen wir, wie und warum sich bestimmte Reaktionen entwickelt haben, ohne dass wir in die zugrunde liegende Geschichte eintauchen müssen. Durch eine würdevolle Begleitung auf Augenhöhe, gezielte Körperübungen und achtsame Berührung wird das Nervensystem in einen optimalen Zustand versetzt, wodurch die natürliche Fähigkeit zur Selbstregulation gestärkt wird. Auf körperlicher Ebene führt dies zu einem gesteigerten Gefühl von Sicherheit und Verbundenheit. Diese positiven Effekte unterstützen uns in herausfordernden Situationen, indem sie uns mehr Stabilität, Zentriertheit und die Fähigkeit zur Abgrenzung verleihen. Dadurch sind wir in der Lage, mit mehr Gelassenheit und Klarheit zu reagieren.

Ziel der Begleitung ist es, die Selbstregulation zu stärken und dadurch Selbstermächtigung zu fördern. Dies ermöglicht es uns, souveräner und selbstbewusster mit den Herausforderungen des Alltags umzugehen und insgesamt ausgeglichener und erfüllter durchs Leben zu gehen.

Dieser Ansatz kommt aus der neurosomatischen Traumaintegration – NSTI® von Stéphanie Maurer und vereint Körperarbeit, Neurowissenschaft, Entwicklungspsychologie und Körperpsychotherapie sowie biodynamische Craniosacral-Therapie.
`,
    benefits: `Die neurosomatische Körperarbeit unterstützt dich unter anderem bei:

• Chronischen Schmerzen und Verspannungen
• Innerer Unruhe
• Stimmungsschwankungen
• Ängsten
• Selbstzweifel
• Schlafstörungen
• Gedankenkarussell
• Gefühl der Einsamkeit / Sinnlosigkeit
`,
    images: [
      // 'https://images.unsplash.com/photo-1598901963450-813d66667971?q=80&w=1200&auto=format&fit=crop', // Back massage
      // 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1200&auto=format&fit=crop', // Gentle touch
      // 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop'  // Natural light
      '/20230509_GVE_057.jpg',
      '/20230509_GVE_062.jpg'
    ]
  },
  {
    id: 'reflex',
    title: 'Fussreflexzonen-Therapie',
    duration: '60 – 90 Min.',
    price: 120, // Base price
    priceRange: '120 – 150',
    isReflexology: true,
    description: 'Aktivierung der Selbstheilungskräfte durch gezielte Druckmassage an den Füssen.',
    longDescription: ` Die Fußreflexzonenmassage ist ein ganzheitlicher Therapieansatz, der auf Jahrtausende altem Wissen basiert. In den Füßen spiegelt sich der gesamte menschliche Körper wider, was bedeutet, dass jedes Organ und System im Fuß repräsentiert ist. Die gezielte Berührung der Füße hat eine starke Wirkung auf das vegetative Nervensystem und führt zu tiefer Entspannung und innerer Ruhe.   
    
    Durch verschiedene Techniken wie Streichungen, Druck und Haltepositionen wird auf die Organe, das Lymphsystem, die Muskeln und das gesamte Körpersystem eingewirkt. Diese Behandlung fördert das innere Gleichgewicht und aktiviert die Selbstheilungskräfte des Körpers. Dadurch können sowohl akute Beschwerden als auch chronische Erkrankungen gezielt behandelt werden.
    
    Die Fußreflexzonenmassage nutzt die Reflexzonen der Füße, um den Körper ganzheitlich zu unterstützen und Heilungsprozesse anzuregen. Sie stellt nicht nur das körperliche Wohlbefinden wieder her, sondern trägt auch zur emotionalen und mentalen Ausgeglichenheit bei, indem sie eine tiefe, wohltuende Entspannung ermöglicht.
    `,
    benefits:`Die Fussreflexzonenmassage unterstützt den Körper unter anderem bei:
​
    • Schmerzen und Verspannungen
    • Verdauungsbeschwerden
    • Schlafstörungen
    • Kreislauf- / Durchblutungsstörungen
    • Kopfschmerzen / Migräne
    • Blasenentzündungen
    • Erkältungen
    • Menstruationsbeschwerden / Zyklusstörungen
    • Allergien
    • Erschöpfungszuständen
    • Unruhe / Stress
    `,
    images: [
      // 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop', // Feet/Relax
      // 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop', // Massage
      // 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop'  // Spa vibe
      '/20230509_GVE_031.jpg',
      '/20230509_GVE_011.jpg'
      
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
