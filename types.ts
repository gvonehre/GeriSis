// -----------------------------------------------------------------------------
// File: types.ts
// Purpose: Shared TypeScript types for services, booking flow, and editorial content.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

export interface Service {
  id: string;
  title: string;
  duration: string; // Base duration string
  price: number; // Base price
  priceRange?: string; // Display string e.g. "120 – 150"
  description: string;
  longDescription?: string;
  images?: string[]; // URLs
  isReflexology?: boolean; // Flag to handle dynamic first-session logic
}

export interface TimeSlot {
  id: string;
  time: string; // "14:00"
  available: boolean;
}

export interface DayAvailability {
  date: Date;
  slots: TimeSlot[];
}

export type Gender = 'female' | 'male' | 'diverse' | 'prefer-not-to-say';

export interface BookingState {
  step: 1 | 2 | 3 | 4; // 4 is success
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedSlot: string | null; // Time string
  
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isFirstSession: boolean | null;
  age: string;
  gender: Gender | '';

  // Concern
  concern: string;
  painArea: string;
  painIntensity: number; // 0-10
  injuries: string;
  notes: string;
  consent: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  image: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
