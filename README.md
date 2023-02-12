# I18n in a Next.js app

> Looking for a way to streamline collaboration with designers & product managers on content? Tired of making PRs to fix typos in JSON files? Checkout [Recontent.app](https://recontent.app?utm_source=github) to ship localized content faster.

## Installation

```sh
git clone git@github.com:recontentapp/example-nextjs-i18n.git

cd example-nextjs-i18n

yarn

yarn start
```

## Adding translations

Translations are stored in JSON files in the `public/locales` folder. Each piece of content needs to be referenced in all supported locales.

The `t` function is typed to prevent using unknown paths within a locale file. The `en/default.json` file is used as a reference of available paths.

## Adding new languages

1. Update the `locales` array in the `next-i18next.config.js` config file
2. Add a new JSON file in the `public/locales` folder which matches the added locale name
3. You can now switch your app in that locale

## Testing components which rely on translations

You can find an example of such test in `__tests__/index.spec.tsx`.
As `i18next` is not set up in the test environment, make sure to update mocks declared `src/setupTests.ts` if you rely on new functions/logic from `i18next` or `react-i18next`.

## Lazy-loading translations

Translations files tend to grow exponentially as you add new features to your app.
Instead of relying on a single `i18next` [namespace](https://react.i18next.com/guides/multiple-translation-files) which contains all your translations, you can split them in smaller files based on routes (eg. Dashboard) or areas of your app (eg. Admin panel, Public view).
