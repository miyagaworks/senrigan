# 重要事項！！!
## ベストプラクティスな選択の上、なるべくシンプルなコード生成を行うようにして下さい。Claudeは複雑にする傾向が強いので常に意識しておいて下さい。
## Editにアップロードしたファイルでは不十分な場合、ディレクトリ構造（全てのファイル）から必要なファイルをリクエストして下さい。
## ファイル共有が不十分で状況が分からないうちはコードは絶対に書かないでください。2回書くようになりますので、このことは絶対厳守です!!!
## 全ての状況を完璧に把握してから回答を出して下さい。コードをすぐに書き始めないで下さい。

# tree -I 'node_modules|.git|.next|dist|build'

senrigan/
├── api
│   ├── apply.php
│   ├── check-mail-headers.php
│   ├── check-mail-log.php
│   ├── check-recaptcha.php
│   ├── composer.json
│   ├── config_with_key.php
│   ├── config.php
│   ├── contact_phpmailer_full.php
│   ├── contact_phpmailer.php
│   ├── contact_smtp.php
│   ├── contact-debug.php
│   ├── contact-simple.php
│   ├── contact.php
│   ├── debug.log
│   ├── install_phpmailer.sh
│   ├── mail-test-detailed.php
│   ├── server-check.php
│   ├── test-curl.sh
│   ├── test-debug-csp.html
│   ├── test-debug.html
│   ├── test-debug.js
│   ├── test-form.html
│   ├── test-mail.php
│   ├── test-production.html
│   ├── test-react-simulation.html
│   └── test-recaptcha-full.html
├── CLAUDE.md
├── docs
│   └── directory.md
├── ecosystem.config.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── header.mp4
│   └── images
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       ├── apple-touch-icon.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon.ico
│       ├── logo_blue.svg
│       ├── logo_name.svg
│       ├── logo_purple.svg
│       ├── logo_yellow.svg
│       ├── logo.svg
│       ├── logo2.svg
│       └── service.png
├── server.ts
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── careers
│   │   │   ├── ApplicationForm.tsx
│   │   │   ├── Apply.tsx
│   │   │   └── index.tsx
│   │   ├── common
│   │   │   └── Breadcrumb.tsx
│   │   ├── Company.tsx
│   │   ├── Contact.tsx
│   │   ├── effects
│   │   │   ├── AudioVisualizer.tsx
│   │   │   └── GenerativeBackground.tsx
│   │   ├── Footer.tsx
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Navigation.tsx
│   │   ├── Hero
│   │   │   ├── AnimatedHeadline.tsx
│   │   │   ├── FloatingIcons.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   └── VideoBackground.tsx
│   │   ├── Hero.tsx
│   │   ├── Loading.tsx
│   │   ├── news
│   │   │   ├── constants.ts
│   │   │   ├── NewsCard.tsx
│   │   │   ├── NewsCategories.tsx
│   │   │   ├── newsData.ts
│   │   │   ├── NewsSection.tsx
│   │   │   └── types.ts
│   │   ├── News.tsx
│   │   ├── Pricing.tsx
│   │   ├── Privacy.tsx
│   │   ├── Projects
│   │   │   ├── index.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── projectsData.ts
│   │   ├── Section.tsx
│   │   ├── Security.tsx
│   │   ├── Services.tsx
│   │   ├── Sitemap
│   │   │   └── index.tsx
│   │   ├── technology
│   │   │   ├── AI
│   │   │   │   └── index.tsx
│   │   │   ├── Backend
│   │   │   │   └── index.tsx
│   │   │   ├── Cloud
│   │   │   │   └── index.tsx
│   │   │   ├── Frontend
│   │   │   │   └── index.tsx
│   │   │   ├── IoT
│   │   │   │   └── index.tsx
│   │   │   ├── Security
│   │   │   │   └── index.tsx
│   │   │   └── TechnologyHero.tsx
│   │   ├── Technology.tsx
│   │   ├── TechShowcase.tsx
│   │   ├── ValueProposition.tsx
│   │   └── values
│   │       ├── design
│   │       │   ├── index.tsx
│   │       │   └── UIDesignApproach.tsx
│   │       ├── function.tsx
│   │       └── scalability.tsx
│   ├── constants
│   │   └── menuItems.ts
│   ├── hooks
│   │   ├── useInViewOnce.ts
│   │   └── useScroll.ts
│   ├── index.css
│   ├── layouts
│   │   └── RootLayout.tsx
│   ├── main.tsx
│   ├── server
│   │   ├── api
│   │   │   ├── apply.ts
│   │   │   ├── contact.ts
│   │   │   └── index.ts
│   │   ├── config
│   │   │   ├── email.ts
│   │   │   └── index.ts
│   │   ├── config.ts
│   │   ├── services
│   │   │   └── emailService.ts
│   │   └── types
│   │       └── config.ts
│   ├── services
│   │   ├── contactService.ts
│   │   ├── MobileAppDevelopment
│   │   │   └── index.tsx
│   │   ├── ServiceHero.tsx
│   │   ├── UIUXDesign
│   │   │   └── index.tsx
│   │   └── WebDevelopment
│   │       └── index.tsx
│   ├── types
│   │   ├── contact.ts
│   │   └── global.d.ts
│   └── vite-env.d.ts
├── ssh
│   ├── senrigan.key
│   └── SSH接続方法
├── start-production.sh
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts