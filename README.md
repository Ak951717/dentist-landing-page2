# Professional Dentist Landing Page

A high-converting, SEO-optimized, production-ready landing page for a US dental clinic built with Next.js 14+, Tailwind CSS, and Framer Motion.

![Hero Preview](./public/images/hero.png)

## Tech Stack (Strict Adherence)

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: Tailwind CSS + Shadcn/ui conventions (custom implementation)
- **Animation**: Framer Motion
- **Form Validation**: Zod + React Hook Form
- **Icons**: Lucide React
- **SEO**: Metadata, JSON-LD Schema, Sitemap, Robots.txt

## Features

- **Responsive Design**: Mobile-first, works perfectly on all devices.
- **Conversion Focused**: Clear CTAs, Trust Signals, Sticky Navigation.
- **SEO Optimized**: Includes meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD) for LocalBusiness.
- **Performance**: Optimized images, code splitting, and fast hydration.
- **Client Form Validation**: Real-time feedback using Zod schemas.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components/ui`: Reusable UI components (Button, Input, Card, etc.).
- `src/components/sections`: Page sections (Hero, Features, Testimonials, Location, AppointmentForm).
- `src/components/layout`: Header and Footer components.
- `src/lib`: Utility functions and helpers.
- `public`: Static assets (images, icons).

## SEO Configuration

- **Metadata**: Configured in `src/app/layout.tsx`. Update the title and description there.
- **Schema**: JSON-LD script embedded in `src/app/layout.tsx` for structured data.
- **Sitemap**: Generated automatically at `/sitemap.xml`.
- **Robots**: Configured at `/robots.txt`.

## Customization

- **Colors**: Edit `src/app/globals.css` and `tailwind.config.ts` to change the primary brand color.
- **Content**: Update the text in `src/components/sections/*.tsx` files.
- **Form Handling**: Connect the `onSubmit` handler in `src/components/sections/appointment-form.tsx` to your backend API.

## License

MIT
