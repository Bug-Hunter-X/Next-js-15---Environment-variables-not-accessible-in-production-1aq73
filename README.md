# Next.js 15 - Environment variables not accessible in production

This repository demonstrates a bug in Next.js 15 where environment variables are not accessible in production builds when accessed directly in page components. The issue only manifests in the production environment and works correctly in development.

## Steps to reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev` (The about page will show correctly)
4. Build the application: `npm run build`
5. Run the production server: `npm run start` (The about page will throw an error)

## Solution

The solution involves using the `next/env` package, which correctly loads environment variables in both development and production environments. Update the about.js file as shown in the aboutSolution.js file.