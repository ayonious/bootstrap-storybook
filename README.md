# Bootstrap Storybook

A collection of React components with Storybook documentation.

## Development

```bash
# Install dependencies
yarn install

# Start Storybook development server
yarn docs

# Run tests
yarn test

# Build static Storybook
yarn docs:build
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

### Test and Build Workflow
- Triggers on push and pull requests to main/master branches
- Runs unit tests
- Builds Storybook
- Uploads build artifacts

### Deployment Workflow
- Triggers on push to main/master branches
- Deploys Storybook to GitHub Pages
- Accessible at: https://[username].github.io/bootstrap-storybook/

## Setup GitHub Pages

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment":
   - Source: GitHub Actions
4. The site will be available at `https://[username].github.io/bootstrap-storybook/`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

# My components collection

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ayonious/bootstrap-storybook/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/ayonious/bootstrap-storybook/tree/master)

## 🎁 See Deployed

https://ayonious.github.io/bootstrap-storybook

## 🎓 Things that I learnt in this project

1. Setupp story book
2. Deploy with Github pages

## 🏃‍♂️ Local Running instruction

```
yarn
yarn docs
```

## 🚀 Deploy instruction

```
yarn
yarn docs:build
```

This will edit the contents in docs/ folder which is served by Github
