// -----------------------------------------------------------------------------
// File: services/bookingService.ts
// Purpose: Mock booking data and submission helpers for the booking modal flow.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import { BookingState, DayAvailability, TimeSlot } from '../types';

// -----------------------------------------------------------------------------
// Section: Date helpers
// -----------------------------------------------------------------------------

/**
 * Returns a new date shifted by a given number of days.
 * @param date Base date.
 * @param days Number of days to add.
 */
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// -----------------------------------------------------------------------------
// Section: Mock availability API
// -----------------------------------------------------------------------------

/**
 * Generates mock daily slot availability for the next 21 days.
 * @returns Promise resolving to day availability entries.
 * Side effects: uses pseudo-random generation to simulate real booking occupancy.
 */
export const getAvailableSlots = (): Promise<DayAvailability[]> => {
  return new Promise((resolve) => {
    // Simulate network delay for that "loading" feel.
    setTimeout(() => {
      const today = new Date();
      const availability: DayAvailability[] = [];

      for (let i = 0; i < 21; i++) {
        const currentDate = addDays(today, i);
        const dayOfWeek = currentDate.getDay();

        // Skip Sundays (0) for a realistic weekly schedule.
        if (dayOfWeek === 0) continue;

        const slots: TimeSlot[] = [];
        const startHour = 9;
        const endHour = 17;

        for (let hour = startHour; hour < endHour; hour++) {
          if (Math.random() > 0.4) {
            slots.push({
              id: `${currentDate.toISOString()}-${hour}`,
              time: `${hour}:00`,
              available: true,
            });
          }
          if (Math.random() > 0.7) {
            slots.push({
              id: `${currentDate.toISOString()}-${hour}-30`,
              time: `${hour}:30`,
              available: true,
            });
          }
        }

        slots.sort(
          (firstSlot, secondSlot) =>
            parseInt(firstSlot.time.replace(':', ''), 10) -
            parseInt(secondSlot.time.replace(':', ''), 10)
        );

        if (slots.length > 0) {
          availability.push({
            date: currentDate,
            slots,
          });
        }
      }

      resolve(availability);
    }, 600);
  });
};

// -----------------------------------------------------------------------------
// Section: Mock booking submission API
// -----------------------------------------------------------------------------

/**
 * Simulates a booking submission and returns a generated confirmation id.
 * @param payload Full booking payload from modal state.
 * @returns Promise with success flag and generated id.
 * Side effects: logs payload to console for local demo debugging.
 */
export const submitBooking = async (
  payload: BookingState
): Promise<{ success: boolean; id: string }> => {
  console.log('--- BOOKING SUBMISSION PAYLOAD ---');
  console.log(JSON.stringify(payload, null, 2));
  console.log('----------------------------------');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, id: Math.random().toString(36).substr(2, 9) });
    }, 1500);
  });
};
