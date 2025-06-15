 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index fa993fe29315df76437941219f2f0b0ef6fcc14f..5ba7c6f32dee95635a03e926def769a2b4875000 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,26 @@
 # TradeX Technologies (Starter Template)
 
-This is the initial boilerplate for your TradeX SaaS platform built with Next.js and Tailwind CSS.
+This is the initial boilerplate for your TradeX SaaS platform built with Next.js and Tailwind CSS.
+
+## Prerequisites
+
+- **Node.js**: version 16.14 or later is recommended to build and run the application.
+
+## Getting Started
+
+Install dependencies and start the development server:
+
+```bash
+npm install
+npm run dev
+```
+
+Open your browser at `http://localhost:3000` to view the app. You should see a sidebar with navigation links, a top bar titled "Dashboard", and a welcome message in the main area.
+
+## Deployment to Vercel
+
+1. [Sign up for Vercel](https://vercel.com) and install the Vercel CLI if desired.
+2. Push this repository to your Git provider (GitHub, GitLab, etc.).
+3. In the Vercel dashboard, import your repository and follow the prompts. Vercel automatically installs dependencies and runs `npm run build`.
+4. After deployment completes, your TradeX instance will be available at the generated Vercel URL.
+
 
EOF
)
