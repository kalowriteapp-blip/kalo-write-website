# Website Assets Directory

This directory contains all the static assets for the KaloWrite website.

## Folder Structure

```
public/assets/
├── images/
│   ├── logo/
│   │   ├── logo.svg (main logo)
│   │   ├── logo.png (PNG version if needed)
│   │   └── logo-dark.svg (dark theme version)
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── apple-touch-icon.png
│   ├── hero/
│   │   ├── hero-bg.jpg
│   │   └── hero-pattern.svg
│   ├── features/
│   │   ├── ai-detection.svg
│   │   ├── humanization.svg
│   │   └── content-analysis.svg
│   └── ui/
│       ├── buttons/
│       ├── cards/
│       └── patterns/
├── fonts/
│   ├── dm-sans/
│   └── custom-fonts/
└── docs/
    ├── brand-guidelines.md
    └── asset-specifications.md
```

## Usage Instructions

1. **Logo Files**: Place your logo files in `images/logo/`
2. **Icons**: Add favicon and UI icons to `images/icons/`
3. **Images**: Organize feature images and backgrounds in respective folders
4. **Fonts**: Store custom fonts in `fonts/` directory

## File Naming Convention

- Use kebab-case for file names (e.g., `hero-background.jpg`)
- Include dimensions in filename for icons (e.g., `favicon-32x32.png`)
- Use descriptive names that indicate purpose (e.g., `ai-detection-icon.svg`)

## Optimization Guidelines

- Images should be optimized for web (compressed, appropriate format)
- SVG files should be cleaned and optimized
- Use appropriate formats: SVG for icons, PNG for logos with transparency, JPG for photos
