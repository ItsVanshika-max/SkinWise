# SkinWise

SkinWise is a lightweight skincare routine companion made with plain HTML, CSS, and JavaScript. It lets you add ingredients or sample products, review common ingredient pairings, explore a simple AM/PM routine rhythm, and save a skin profile in your browser.

## Run it

Open `index.html` in a browser. No package installation, build step, or server is required.

## Publish with GitHub Pages

1. Upload the project files to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your main branch and the `/ (root)` folder, then save.
4. Open the published URL after GitHub Pages finishes deploying.

The site is fully static. Routine and profile data are saved locally in the current browser using `localStorage`; they are not uploaded to a server.

## Files

```text
index.html      Page structure
styles.css      Responsive styles
app.js          Routine analysis and interface behavior
```

## Notes

- The ingredient checks are general educational guidance, not medical advice or a diagnosis.
- Ingredient compatibility depends on product formulation and individual skin. Follow product labels and consult a qualified dermatologist about persistent irritation or prescription treatments.
- Do not upload `node_modules`, build output, or `.env` files. `.gitignore` excludes these generated or private files.
