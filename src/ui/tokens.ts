export const ui = {
  // 🎨 Couleurs (inspirées de ta maquette)
  colors: {
    // Neutres (Default)
    neutral: {
      main: "#1F2937",      // slate-800
      second: "#475569",    // slate-600
      soft: "#E2E8F0",      // slate-200
      softFg: "#64748B",    // slate-500
      muted: "#94A3B8"      // slate-400
    },

    // Primary (bleu)
    primary: {
      main: "#2563EB",      // blue-600
      soft: "#DBEAFE",      // blue-100
      softFg: "#3B82F6",    // blue-500
      border: "#93C5FD"     // blue-300
    },

    // Success (vert)
    success: {
      main: "#059669",      // emerald-600
      soft: "#D1FAE5",      // emerald-100
      softFg: "#34D399",    // emerald-400
      border: "#6EE7B7"     // emerald-300
    },

    // Warning (orange)
    warning: {
      main: "#F59E0B",      // amber-500
      soft: "#FEF3C7",      // amber-100
      softFg: "#F59E0B",    // amber-500
      border: "#FCD34D"     // amber-300
    },

    // Danger (rouge)
    danger: {
      main: "#DC2626",      // red-600
      soft: "#FEE2E2",      // red-100
      softFg: "#EF4444",    // red-500
      border: "#FCA5A5"     // red-300
    },

    // Backgrounds
    background: {
      main: "#F8FAFC",      // slate-50
      secondary: "#F1F5F9", // slate-100
      border: "#E2E8F0",    // slate-200
      inverse: "#0F172A"    // slate-900
    }
  },

  // 🔲 Radius (simple, réutilisable)
  radius: {
    sm: 10,
    md: 14,
    lg: 18,
    xl: 20
  },

  // 📏 Spacing (pour rester cohérent)
  spacing: {
    xs: 6,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
  }
} as const;

export type UIColorTokens = typeof ui;

