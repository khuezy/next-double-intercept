# Issue

/feed/nested/@modal/(..)(..)photo/page.tsx does not intercept two levels above

## Reproduction:

1. npm install
2. npm run dev
3. Go to [localhost:3000](http://localhost:3000)
4. Click on "/feed/nested"
5. Click on "Go to /photo", this should intercept the root /photo
6. Note the app loads /photo instead of intercepting
7. Look at terminal, see error:

```
error TypeError: Expected "1" to be a string
    at /Users/user/Projects/double/node_modules/next/dist/compiled/path-to-regexp/index.js:239:19
```

Console the tokens were from that library:

```
~~tokens:  [
  '/feed/nested',
  { name: 0, prefix: '/', suffix: '', pattern: '..', modifier: '' },
  { name: 1, prefix: '', suffix: '', pattern: '..', modifier: '' },
  'photo'
] { validate: false }
~~tokens:  [] { validate: false }
~~data:  { '0': '(..)(..)' }
```
