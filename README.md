# Bootstrap Storybook

A small React component playground: buttons, cards, a dropdown, and CSS spacing examples.
JavaScript, React, and styled-components keep the examples easy to follow.

[Open the published Storybook](https://ayonious.github.io/bootstrap-storybook/)

## Getting started

Use Node.js 26 (`nvm use`) and Yarn Classic 1.22.

```bash
yarn install
yarn docs
```

Storybook opens at http://localhost:9001. Edit a component or its colocated
`*.stories.js` / `*.stories.jsx` file to see changes immediately.
Use `.jsx` for files containing JSX.

## What's included

- Storybook 10 with Vite for development and static builds.
- Controls, actions, backgrounds, viewport tools, and generated component docs.
- A docs code panel showing how to use each story.
- Accessibility checks in the Accessibility panel.
- Vitest tests in Storybook, with Chromium interaction tests for the button and dropdown.

Stories use simple CSF object exports and `args`. Add a `play` function when a
story needs to exercise behavior. Import test helpers and action spies from
`storybook/test`; see the button story for an example.

## Tests

```bash
yarn test                  # Existing component tests, using jsdom
yarn test:watch            # Watch component tests
yarn playwright install chromium  # Once, for browser tests
yarn test:stories          # Render every story and run interactions in Chromium
yarn test:all              # Unit and browser tests
```

You can also run story tests from Storybook's testing widget. Accessibility
findings are reported as todos so the original learning examples can be improved
incrementally; they do not currently fail CI. Set `a11y.test` to `'error'` in
`.storybook/preview.js` when you want them to block builds.

## Build and publish

```bash
yarn docs:build            # Or yarn build
```

The generated site goes into the ignored `storybook-static/` directory.
CI runs unit tests, browser tests, and the static build. Pushes to `master`
publish the built site through GitHub Pages Actions. Configure the repository's
Pages source as **GitHub Actions**. Generated site files do not need committing.
