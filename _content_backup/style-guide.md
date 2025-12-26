# Style Guide: Personal Tech Blog

## 1. Color Palette

### Dark Mode (Default)
| Element | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `Void Slate` | `#0B0E14` | Main page background. Deep, matte dark. |
| **Surface** | `Midnight` | `#151B28` | Cards, sidebars, code block backgrounds. |
| **Border** | `Iron` | `#2D3748` | Subtle borders to separate sections. |
| **Heading Text** | `Starlight` | `#F8FAFC` | H1-H6. High visibility. |
| **Body Text** | `Mist` | `#E2E8F0` | Main content. Soft contrast. |
| **Muted Text** | `Ash` | `#94A3B8` | Dates, captions, footer text. |

### Light Mode (Toggle)
| Element | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `Paper` | `#FFFFFF` | Clean, crisp white. |
| **Surface** | `Vapor` | `#F1F5F9` | Offset background for cards. |
| **Text** | `Ink` | `#0F172A` | High readability dark slate. |

### Tech Accents (Brand Identity)
| Color Name | Hex Code | Vibe | Usage |
| :--- | :--- | :--- | :--- |
| **Electric Cyan**| `#22D3EE` | "Future/React" | Primary buttons, links, active states. |
| **Terminal Green**| `#4ADE80` | "Success/Node" | Success messages, "Copied!" tooltips. |
| **Debug Orange** | `#FB923C` | "Warning/Rust" | Callouts, important notes. |
| **Syntax Purple**| `#C084FC` | "Creative/CSS" | Hover effects, gradients. |

---

## 2. Typography

* **Headings:** `Inter` or `Plus Jakarta Sans` (Clean, geometric, authoritative).
* **Body:** `Merriweather` or `Inter` (High readability).
* **Code:** `JetBrains Mono` or `Fira Code` (Ligatures are essential for tech blogs).

---

## 3. Implementation (CSS Variables)

Copy this into your `src/styles/global.css`:

```css
:root {
  /* Default to Dark Mode */
  --bg-primary: #0B0E14;
  --bg-secondary: #151B28;
  --bg-code: #000000; /* Pitch black for code blocks pops well */
  
  --text-main: #E2E8F0;
  --text-muted: #94A3B8;
  --text-heading: #F8FAFC;
  
  --border-subtle: #1E293B;
  
  /* Brand Colors */
  --accent-primary: #22D3EE; /* Electric Cyan */
  --accent-glow: rgba(34, 211, 238, 0.15); /* For hover states */
  --code-selection: #1e293b;
}

/* Light Mode Override (Applied via class="light" on <html> or <body>) */
.light {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-code: #1E293B; /* Dark code blocks even in light mode looks pro */
  
  --text-main: #334155;
  --text-muted: #64748B;
  --text-heading: #0F172A;
  
  --border-subtle: #E2E8F0;
  
  --accent-primary: #0891B2; /* Slightly darker cyan for contrast on white */
}

/* Base Styles */
body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  color: var(--text-heading);
  letter-spacing: -0.025em;
}

a {
  color: var(--accent-primary);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Tech Blog Specific: Code Blocks */
pre {
  background-color: var(--bg-code);
  border: 1px solid var(--border-subtle);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
}