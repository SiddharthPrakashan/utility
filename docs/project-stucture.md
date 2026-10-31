utility/
│
├── .env
├── .env.example
├── .gitignore
├── .prettierignore
├── .prettierrc
│
├── .vscode/
│ ├── extensions.json
│ └── settings.json
│
├── components.json
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
│
├── index.html → /
│
├── about/
│ └── index.html → /about/
│
├── privacy-policy/
│ └── index.html → /privacy-policy/
│
├── terms/
│ └── index.html → /terms/
│
├── contact/
│ └── index.html → /contact/
│
├── ig-followers-check/
│ └── index.html → /ig-followers-check/
│
├── json-formatter/
│ └── index.html → /json-formatter/
│
├── image-compressor/
│ └── index.html → /image-compressor/
│
├── public/
│ ├── ads.txt
│ ├── robots.txt
│ ├── sitemap.xml
│ ├── favicon.ico
│ │
│ ├── ig-followers-check/
│ │ ├── manifest.json
│ │ ├── sw.js
│ │ └── icons/
│ │ ├── icon-192.png
│ │ ├── icon-512.png
│ │ └── maskable-512.png
│ │
│ ├── json-formatter/
│ │ ├── manifest.json
│ │ ├── sw.js
│ │ └── icons/
│ │ ├── icon-192.png
│ │ ├── icon-512.png
│ │ └── maskable-512.png
│ │
│ └── image-compressor/
│ ├── manifest.json
│ ├── sw.js
│ └── icons/
│ ├── icon-192.png
│ ├── icon-512.png
│ └── maskable-512.png
│
└── src/
│
├── vite-env.d.ts
│
├── shared/
│ │
│ ├── components/
│ │ ├── Layout.tsx
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── LegalPage.tsx
│ │ ├── AdSlot.tsx
│ │ ├── SEO.tsx
│ │ ├── PWARegistration.tsx
│ │ │
│ │ └── ui/
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── input.tsx
│ │ ├── textarea.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── navigation-menu.tsx
│ │ ├── sheet.tsx
│ │ └── separator.tsx
│ │
│ ├── config/
│ │ ├── site.ts
│ │ ├── tools.ts
│ │ └── navigation.ts
│ │
│ ├── hooks/
│ │ ├── useAdBlockCheck.ts
│ │ └── useMediaQuery.ts
│ │
│ ├── lib/
│ │ ├── utils.ts
│ │ ├── agGrid.ts
│ │ └── registerSW.ts
│ │
│ └── styles/
│ └── globals.css
│
└── apps/
│
├── site/
│ ├── main.tsx
│ ├── App.tsx
│ └── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ ├── PrivacyPolicy.tsx
│ ├── Terms.tsx
│ └── Contact.tsx
│
├── ig-followers-check/
│ ├── main.tsx
│ ├── App.tsx
│ ├── components/
│ │ ├── FileUploader.tsx
│ │ ├── UnfollowList.tsx
│ │ └── ResultsSummary.tsx
│ ├── hooks/
│ ├── utils/
│ │ └── instagramParser.ts
│ └── types.ts
│
├── json-formatter/
│ ├── main.tsx
│ ├── App.tsx
│ ├── components/
│ │ ├── JsonEditor.tsx
│ │ └── JsonOutput.tsx
│ ├── hooks/
│ ├── utils/
│ │ └── jsonParser.ts
│ └── types.ts
│
└── image-compressor/
├── main.tsx
├── App.tsx
├── components/
│ ├── ImageUploader.tsx
│ ├── CompressionSettings.tsx
│ └── ImagePreview.tsx
├── hooks/
├── utils/
│ └── imageProcessor.ts
└── types.ts
