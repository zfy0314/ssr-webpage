# SSR project webpage

A self-contained, static research webpage for **Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents**. Its centered paper header, resource buttons, and figure-led layout are inspired by DeepEyesV2. The HTML and styles were written for this project.

## Preview

Open `index.html` in a browser. All scripts, fonts, images, and the paper PDF are included locally; no installation or build is required.

For a local HTTP preview, run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Publish on GitHub Pages

These steps use a project repository named `ssr-webpage` under `zfy0314`. Its published address will be **https://zfy0314.github.io/ssr-webpage**. If you choose a different repository name, replace `ssr-webpage` in the address with that name.

1. Sign in to GitHub as **zfy0314**, then open [New repository](https://github.com/new).
2. Set the owner to **zfy0314** and the repository name to **ssr-webpage**. Choose **Public**, turn on **Add README**, then select **Create repository**. Public repositories support GitHub Pages on GitHub Free.
3. Open this `ssr-webpage` folder in Finder. Press **Command + Shift + .** to reveal the hidden `.nojekyll` file.
4. On the repository’s **Code** page, choose **Add file → Upload files**. Drag in the contents of this folder: `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, and the whole `assets` folder. Upload the folder’s contents, not the outer `ssr-webpage` folder or the ZIP archive. Keep the structure inside `assets` intact.
5. Enter a commit message such as **Add SSR project webpage**, choose to commit directly to **main**, and commit the changes. After upload, `index.html` and `assets/` should be visible at the repository’s top level. ([GitHub’s upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).)
6. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
7. Wait for the **pages build and deployment** workflow in the **Actions** tab to finish successfully. GitHub says publishing can take up to 10 minutes. Return to **Settings → Pages → Visit site**, or open **https://zfy0314.github.io/ssr-webpage**.
8. Check the GIF, the library hover/tap reveals, the results table, and the Paper button. Later updates use the same **Upload files → Commit changes** process; GitHub Pages republishes the files automatically.

The prepared package fits within GitHub’s browser upload limits (100 files per upload and 25 MiB per file). Uploading publishes the included `assets/paper.pdf` as the Paper button’s destination.

[GitHub’s site creation instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Alternatively, place these contents in the repository’s `docs/` directory and choose **/docs** as the publishing folder. Relative asset links support both a project site (`username.github.io/repository/`) and a root site. Do not choose `/ssr-webpage` as a branch publishing folder; GitHub offers only the repository root and `/docs` for this mode.

[GitHub’s publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit

- `index.html`: authors, affiliations, abstract, method, four results tables, analysis, and both algorithms.
- `styles.css`: typography, spacing, colors, and responsive layout.
- `script.js`: local equation rendering, the teaser animation control, and the library’s animated hover/tap reveals. Keyboard focus reveals an entry, Enter/Space toggles it, and Escape closes it. Reduced-motion preferences disable the transitions.
- `assets/ssr-overview.gif`: the supplied teaser, copied without modification.
- `assets/ssr-icon.svg`: the selected gold parallel-selection icon, used in the SSR wordmark and as the browser-tab icon.
- `assets/ssr-overview-still.png`: a still from the teaser for the pause control and reduced-motion preference.
- `assets/paper.pdf`: a snapshot of the current complete manuscript, linked from the Paper button. Replace this file when the paper changes, or replace the button URL with the public arXiv PDF URL after release.
- `assets/method-overview.png`, `library-size.png`, and `selection-distribution.png`: high-resolution exports of the manuscript figures.
- `assets/katex/`: KaTeX 0.16.22 with local fonts and its MIT license. No third-party network request is required to render the page.

The visible page adapts the main scientific content, the six exact reasoning candidates from the appendix, and the two pseudocode algorithms. It has no references, BibTeX section, acceptance claim, placeholder resource links, or other appendix material. The downloadable paper remains the full manuscript. The first results table focuses on trained 2B/4B agents; the PDF contains the broader baseline comparison. Parenthetical changes in the training-objective table reproduce the draft’s relative percentages (not percentage-point differences).

Algorithm statements were converted directly from the current manuscript: both retain 32 numbered lines, the output-validity checks, multiline SGLang calls, and the current GRPO minibatch update. Explanatory text around the algorithms is collapsed by default; click the section headings to expand it. The algorithms themselves remain visible. Equations inside the algorithm use editable `data-tex` attributes; other equations use `$...$` or `$$...$$` delimiters. Keep the visible fallback text synchronized if changing a `data-tex` expression.

This folder is ready to publish, but has not been uploaded or deployed.
