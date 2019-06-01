# Tailwind Plugins for WordPress

Currently this plugin just creates the rules for WordPress
generated classes. Perhaps, it could create components for
comments and forms in the future.

## Installation

```sh
# NPM
npm i -D tailwindcss-wordpress

# Yarn
yarn -D tailwindcss-wordpress
```

## Usage

```js
const { wordpressUtilities } = require('tailwindcss-wordpress');

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    wordpressUtilities,
  ],
};
```

## Plugins

### Utilities 

These styles are based on the styles that were included in Sage
9. The following classes are generated:

* `.alignnone`
* `.aligncenter`
* `.alignright`
* `.alignleft`
* `.wp-caption` (`img`)
* `.wp-caption-text`
* `.screen-reader-text` (`:focus`, `:active`)
