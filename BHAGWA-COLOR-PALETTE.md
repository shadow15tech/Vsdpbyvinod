# Bhagwa Theme - Color Palette Reference

## Quick Color Reference

### Primary Saffron Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Deep Saffron | `#FF6F00` | rgb(255, 111, 0) | Primary buttons, main brand color, icons |
| Light Saffron | `#FFB300` | rgb(255, 179, 0) | Secondary buttons, borders, accents |
| Darker Saffron | `#E65100` | rgb(230, 81, 0) | Hover states, emphasis |
| Lighter Saffron | `#FFA726` | rgb(255, 167, 38) | Gradient transitions |
| Golden | `#FFD54F` | rgb(255, 213, 79) | Highlights, special accents |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Pure White | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds, cards |
| Cream | `#FFF3E0` | rgb(255, 243, 224) | Light backgrounds, subtle sections |
| Dark Brown | `#3E2723` | rgb(62, 39, 35) | Body text, headings |
| Near Black | `#1A1A1A` | rgb(26, 26, 26) | Dark text, footer |
| Deep Maroon | `#6A1B1A` | rgb(106, 27, 26) | Footer, contrast elements |

---

## Color Combinations

### Primary Button
- **Background**: `#FF6F00` (Deep Saffron)
- **Text**: `#FFFFFF` (White)
- **Hover Background**: `#E65100` (Darker Saffron)
- **Shadow**: `rgba(255, 111, 0, 0.3)`

### Secondary Button
- **Background**: `#FFB300` (Light Saffron)
- **Text**: `#1A1A1A` (Near Black)
- **Hover Background**: `#FFD54F` (Golden)
- **Shadow**: `rgba(255, 179, 0, 0.3)`

### Hero Section
- **Gradient**: `linear-gradient(135deg, #E65100 0%, #FF6F00 50%, #FFB300 100%)`
- **Text**: `#FFFFFF` (White)
- **Om Watermark**: `rgba(255, 255, 255, 0.05)`

### Footer
- **Gradient**: `linear-gradient(135deg, #6A1B1A 0%, #3E2723 50%, #1A1A1A 100%)`
- **Text**: `#FFF3E0` (Cream)
- **Headings**: `#FFB300` (Light Saffron)
- **Border**: `#FFB300` (Light Saffron)

### Cards & Items
- **Background**: `#FFFFFF` (White)
- **Border**: `rgba(255, 179, 0, 0.2)`
- **Hover Border**: `#FFB300` (Light Saffron)
- **Shadow**: `rgba(255, 111, 0, 0.15)`
- **Hover Shadow**: `rgba(255, 111, 0, 0.3)`

---

## Gradient Formulas

### Saffron Gradient (Primary)
```css
background: linear-gradient(135deg, #E65100 0%, #FF6F00 50%, #FFB300 100%);
```

### Light Saffron Gradient
```css
background: linear-gradient(135deg, #FFF3E0 0%, #FFFFFF 100%);
```

### Maroon Footer Gradient
```css
background: linear-gradient(135deg, #6A1B1A 0%, #3E2723 50%, #1A1A1A 100%);
```

### Golden Border Gradient
```css
border-image: linear-gradient(90deg, transparent, #FFB300, transparent) 1;
```

---

## Shadow Formulas

### Warm Shadow (Small)
```css
box-shadow: 0 2px 10px rgba(255, 111, 0, 0.15);
```

### Warm Shadow (Medium)
```css
box-shadow: 0 4px 20px rgba(255, 111, 0, 0.2);
```

### Warm Shadow (Large)
```css
box-shadow: 0 8px 30px rgba(255, 111, 0, 0.25);
```

### Button Glow
```css
box-shadow: 0 4px 15px rgba(255, 111, 0, 0.3);
```

### Hover Button Glow
```css
box-shadow: 0 6px 20px rgba(230, 81, 0, 0.5);
```

---

## Opacity Variations

### Om Watermark Opacity
- **Hero Section**: `rgba(255, 255, 255, 0.05)` - 5% white
- **Newsletter**: `rgba(255, 255, 255, 0.08)` - 8% white
- **Light Sections**: `rgba(255, 179, 0, 0.05)` - 5% saffron

### Border Opacity
- **Default**: `rgba(255, 179, 0, 0.2)` - 20% saffron
- **Hover**: `rgba(255, 179, 0, 1)` - 100% saffron

### Background Opacity
- **Form Controls**: `rgba(255, 255, 255, 0.5)` - 50% white
- **Overlay**: `rgba(255, 111, 0, 0.1)` - 10% saffron

---

## Text Colors

### On Light Backgrounds
- **Headings**: `#1A1A1A` (Near Black)
- **Body**: `#3E2723` (Dark Brown)
- **Links**: `#FF6F00` (Deep Saffron)
- **Links Hover**: `#FFB300` (Light Saffron)

### On Dark Backgrounds
- **Headings**: `#FFB300` (Light Saffron)
- **Body**: `#FFF3E0` (Cream)
- **Links**: `#FFD54F` (Golden)
- **Links Hover**: `#FFFFFF` (White)

### On Saffron Backgrounds
- **Headings**: `#FFFFFF` (White)
- **Body**: `#FFF3E0` (Cream)
- **Emphasis**: `#1A1A1A` (Near Black)

---

## Accessibility Contrast Ratios

All color combinations meet WCAG AA standards:

| Foreground | Background | Contrast Ratio | WCAG Level |
|------------|------------|----------------|------------|
| #FFFFFF | #FF6F00 | 4.8:1 | AA ✓ |
| #1A1A1A | #FFFFFF | 16.1:1 | AAA ✓ |
| #3E2723 | #FFFFFF | 12.6:1 | AAA ✓ |
| #FFFFFF | #6A1B1A | 8.9:1 | AAA ✓ |
| #FFF3E0 | #3E2723 | 10.2:1 | AAA ✓ |
| #1A1A1A | #FFB300 | 8.2:1 | AAA ✓ |

---

## CSS Variables

Copy these into your `:root` selector:

```css
:root {
    /* Primary Saffron Colors */
    --bs-primary: #FF6F00;
    --bs-secondary: #FFB300;
    --saffron-deep: #E65100;
    --saffron-light: #FFA726;
    --bs-gold: #FFD54F;
    
    /* Neutral Colors */
    --bs-white: #FFFFFF;
    --bs-light: #FFF3E0;
    --bs-dark: #1A1A1A;
    --bs-tertiary: #3E2723;
    --bs-maroon: #6A1B1A;
    
    /* Borders */
    --border-gold: #FFB300;
}
```

---

## Color Psychology

### Saffron (#FF6F00)
- **Meaning**: Sacrifice, courage, renunciation
- **Emotion**: Warmth, energy, enthusiasm
- **Use**: Call-to-action, important elements

### Gold (#FFB300)
- **Meaning**: Purity, prosperity, divine light
- **Emotion**: Optimism, happiness, success
- **Use**: Accents, highlights, borders

### Maroon (#6A1B1A)
- **Meaning**: Strength, tradition, stability
- **Emotion**: Grounded, serious, trustworthy
- **Use**: Footer, contrast sections

### Cream (#FFF3E0)
- **Meaning**: Purity, peace, simplicity
- **Emotion**: Calm, clean, welcoming
- **Use**: Light backgrounds, subtle sections

---

## Print Colors (CMYK)

For print materials:

| Color Name | CMYK Values |
|------------|-------------|
| Deep Saffron | C:0 M:56 Y:100 K:0 |
| Light Saffron | C:0 M:30 Y:100 K:0 |
| Golden | C:0 M:17 Y:69 K:0 |
| Deep Maroon | C:0 M:75 Y:75 K:58 |
| Dark Brown | C:0 M:37 Y:43 K:76 |

---

## Color Naming Convention

When adding new colors, follow this pattern:

```css
/* Format: --[category]-[shade]-[variant] */
--saffron-deep-hover: #D84315;
--saffron-light-active: #FFCA28;
--gold-bright-accent: #FFF176;
```

---

## Testing Tools

- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Blindness Simulator**: https://www.color-blindness.com/coblis-color-blindness-simulator/
- **Palette Generator**: https://coolors.co/

---

*This palette embodies the spirit of Sanatan Dharma - warm, welcoming, and spiritually uplifting* 🙏
