# Tailwind Plugins for WordPress

**Work in progress**

Currently this plugin just creates the rules for WordPress
generated classes. Perhaps, it could create components for
comments and forms in the future.

## Usage

```js
const { wordpressUtilities } = require('tailwind-wordpress');

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
