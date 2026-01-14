/**
 * Haptic feedback utility for mobile devices
 * Uses the Vibration API where available, falls back gracefully
 */

export const haptic = {
  // Light tap - for button presses
  light: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },
  
  // Medium tap - for confirmations
  medium: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(25);
    }
  },
  
  // Success pattern - for completed actions
  success: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([10, 50, 20]);
    }
  },
  
  // Error pattern - for errors/warnings
  error: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50]);
    }
  }
};
