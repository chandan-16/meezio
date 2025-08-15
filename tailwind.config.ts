import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // Matches your .dark variant
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //     card: "var(--card)",
    //     "card-foreground": "var(--card-foreground)",
    //     popover: "var(--popover)",
    //     "popover-foreground": "var(--popover-foreground)",
    //     primary: "var(--primary)",
    //     "primary-foreground": "var(--primary-foreground)",
    //     secondary: "var(--secondary)",
    //     "secondary-foreground": "var(--secondary-foreground)",
    //     muted: "var(--muted)",
    //     "muted-foreground": "var(--muted-foreground)",
    //     accent: "var(--accent)",
    //     "accent-foreground": "var(--accent-foreground)",
    //     destructive: "var(--destructive)",
    //     border: "var(--border)",
    //     input: "var(--input)",
    //     ring: "var(--ring)",
    //     // Sidebar & chart colors from your globals.css
    //     sidebar: "var(--sidebar)",
    //     "sidebar-foreground": "var(--sidebar-foreground)",
    //     "sidebar-primary": "var(--sidebar-primary)",
    //     "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
    //     "sidebar-accent": "var(--sidebar-accent)",
    //     "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
    //     "sidebar-border": "var(--sidebar-border)",
    //     "sidebar-ring": "var(--sidebar-ring)",
    //     "chart-1": "var(--chart-1)",
    //     "chart-2": "var(--chart-2)",
    //     "chart-3": "var(--chart-3)",
    //     "chart-4": "var(--chart-4)",
    //     "chart-5": "var(--chart-5)",
    //   },
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config