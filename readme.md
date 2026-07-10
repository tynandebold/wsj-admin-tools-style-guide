# WSJ Admin Tools Style Guide

## Setup

#### Build the static site

```sh
$ npm run build
```

The generated site is written to `dist/`. It can be hosted by any static host,
including GitHub Pages; no application server is required.

## Deploy to GitHub Pages

The included workflow deploys every push to the default branch. In the
repository's **Settings → Pages**, set **Source** to **GitHub Actions** once.
The deployment URL will be shown in the workflow run.

## Using the theme
To use the theme in your project:

1. Link to the stylesheet
```css
<link rel="stylesheet" href="https://YOUR-ORG.github.io/YOUR-REPOSITORY/css/wsj-admin-tools-theme.1.0.0.min.css" />
```
2. Add the fonts:
```css
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700"/>
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono"/>
```
3. Reference the GitHub Pages deployment of the style guide and build out your app as needed.

4. Have fun.
