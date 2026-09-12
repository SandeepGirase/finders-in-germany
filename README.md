# Finders In Germany

A static, multi-page website guiding international students from choosing a
German university through to finding a part-time job — built as plain
HTML/CSS/JS so it can be hosted for free on GitHub Pages.

## Structure

```
.
├── index.html            Home
├── universities.html      Choosing & applying to a university
├── pre-arrival.html       Visa, blocked account, insurance, flights
├── accommodation.html     Dorms, WGs, private rentals
├── documentation.html     Anmeldung, Tax ID, Social Security, bank account
├── jobs.html               Part-time work rules & job search
├── about.html
├── contact.html
├── css/style.css
├── js/script.js
└── .nojekyll
```

No build step, no framework, no dependencies beyond one Google Fonts link —
edit the HTML files directly.

## 1. Put it on GitHub

1. Create a new **public** repository on GitHub.
   - If you want the site at `https://<your-username>.github.io/` (root
     domain, no path), name the repo exactly `<your-username>.github.io`.
   - Any other repo name works too — the site will live at
     `https://<your-username>.github.io/<repo-name>/`.
2. Push these files to the repository's default branch (usually `main`):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then **Save**.
4. Wait a minute or two, then refresh the page — GitHub will show you the
   live URL (either `https://<your-username>.github.io/` or
   `https://<your-username>.github.io/<repo-name>/`).

That's the whole hosting bill: **$0/month**, with free HTTPS included.

## 3. Get a free custom domain (optional)

You don't need to buy a domain — GitHub's own `github.io` subdomain works
fine and is already free. If you'd like something closer to
`findersingermany.<something>`, two free routes work well with GitHub Pages:

**Option A — `is-a.dev` (recommended, actively maintained)**
A community project that gives developers a free `yourname.is-a.dev`
subdomain via a short pull request:
1. Fork the repo at `github.com/is-a-dev/register`.
2. Add a JSON file for `findersingermany.is-a.dev` pointing a `CNAME` record
   at `<your-username>.github.io`.
3. Open a pull request; once merged (usually within a few days), the domain
   is live.
4. In your repo's **Settings → Pages → Custom domain**, enter
   `findersingermany.is-a.dev` and save. Add a `CNAME` file (just the domain,
   one line) to the repo root if GitHub doesn't create it automatically.

**Option B — a cheap real `.de` or `.com` domain later**
Free subdomain services are great for launching, but if the project grows,
a registrar-bought domain (roughly $5–15/year, `.de` domains fit the theme
well) still points to GitHub Pages the same way: add an `A`/`ALIAS` record
for the apex domain (or a `CNAME` for a subdomain like `www`) pointing to
GitHub, then repeat the "Custom domain" step above.

Avoid "free .tk/.ml/.ga" domain generators — several of the older ones
(Freenom in particular) have stopped issuing new registrations and are
unreliable for a real project.

## 4. Make the contact form actually send email

The contact form in `contact.html` is static — GitHub Pages can't run
server code. To make it work without your own backend:
- Sign up for a free tier of **Formspree** or **Getform**, then point the
  form's `action` attribute at the endpoint they give you.
- Or replace the form with a simple `mailto:hello@yourdomain.com` link.

## 5. Editing content

Every page repeats the same header/nav and footer markup (GitHub Pages
serves plain files, so there's no shared template by default). When you
update a fact — prices, deadlines, visa rules — update it in every page it
appears on. If the site grows, consider moving to Jekyll (which GitHub
Pages supports natively with `_includes` for shared header/footer) or a
static site generator like Eleventy.

## Content disclaimer

Rules, fees, and thresholds mentioned in the guide (blocked account
minimums, Minijob thresholds, working-hour limits, application deadlines)
change periodically. Treat every specific number in this site as a
starting point to verify with the relevant German authority, embassy, or
your university's International Office — not as legal or immigration
advice.
