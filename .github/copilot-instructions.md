# Repository Instructions

## Project Scope

This repository is a collection of independent HTML and CSS learning exercises. Each exercise is normally self-contained in its own directory and is not part of a package, framework, or monorepo build.

The current project is `freecodecamp/newspaper-article/`:

- `index.html` contains the document structure and links the stylesheet.
- `styles.css` contains all page presentation and layout rules.

## Build, Test, and Validation

There is no package manifest, build system, test suite, or configured linter in this repository.

- Preview a project locally from its directory, for example:

  ```sh
  cd freecodecamp/newspaper-article
  python3 -m http.server 8000
  ```

  Then open `http://localhost:8000`.

- There is no separate single-test command because these exercises have no automated tests.
- Validate changes by loading the page in a browser and checking desktop and narrow viewport layouts. Use browser developer tools to confirm that linked CSS and fonts load.

## Architecture and Conventions

- Keep each exercise independent: do not introduce shared build files or imports across project directories.
- For browser exercises, preserve the common `index.html` / `styles.css` pairing.
- Keep HTML and CSS focused on the exercise rather than adding JavaScript unless the exercise explicitly requires it.
- Project directory names use descriptive, hyphenated names; preserve established names when editing an existing exercise.
- The newspaper page uses a semantic `<main>` container for the article and class names that describe content roles, such as `.name`, `.headline`, `.sub-headline`, `.author`, and `.text`.
- Use CSS rules on the existing content classes rather than introducing selectors tied to incidental DOM structure.
- External font loading is declared in `index.html`; stylesheet rules can reference the loaded `"Open Sans"` family or a local serif fallback.
- When a change affects presentation, preserve the existing centered newspaper-paper layout and verify that it remains usable at mobile widths.
