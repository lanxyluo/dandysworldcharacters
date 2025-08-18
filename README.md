# Dandy's World Characters

A modern character showcase website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark theme with modern UI design
- 🃏 Character cards with rarity-based borders
- ⭐ Star rating system
- 📱 Responsive design for all devices
- 🔍 Character details modal
- 🎭 Main characters with rainbow borders
- 📊 Character statistics dashboard

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── CharacterCard.tsx    # Individual character card
│   └── CharacterModal.tsx   # Character details modal
├── data/               # Static data
│   └── characters.ts   # Character data
├── types/              # TypeScript type definitions
│   └── character.ts    # Character interface
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Character Data Structure

Each character has the following properties:

- `id`: Unique identifier
- `name`: Character name
- `rarity`: Either 'main' or 'common'
- `avatar`: Image URL
- `stars`: Rating from 1-5
- `description`: Character description
- `attributes`: Character stats (strength, speed, intelligence, charisma)

## Customization

### Adding New Characters

Edit `src/data/characters.ts` to add new characters following the existing format.

### Styling

The project uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`.

### Theme Colors

- Background: `#0a0a0a` (dark-bg)
- Card Background: `#1a1a1a` (card-bg)
- Border: `#333333` (border-gray)

## License

This project is open source and available under the MIT License.
