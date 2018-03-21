# shiori-extension
Browser extension to use shiori bookmark service


## Install it

The extension is in a alpha stage, but if you feel brave
you can try it using the published extensions.

For [Chrome](https://chrome.google.com/webstore/detail/shiori-create-bookmarks-e/admfbhjcnlacjbodldopmpjplnobgcje) and
for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/shiori-extension/)

Feel free to create issues on github or give any kind feedback :D

## Build it

1. Clone this repository
```
git clone https://github.com/kozko2001/shiori-extension
```


2. Install yarn (from: https://yarnpkg.com/lang/en/docs/install/)
```
brew install yarn --without-node
```

3. Install dependencies && make a (coffee|tee)
```
yarn install
```

4. run the tests, you can use `test` or `test-watch` scripts
```
yarn run test
```

5. run the build also you can use `build` for a single build or `build-watch` so each time there is a modification a new build is creates

```
yarn run build
```

6. Install the extensions from the `dist/` folder

   1. On chrome open the url [chrome://extensions/](chrome://extensions/)
   2. Click on Load Unpack
   3. Select the `dist` folder in the project

## License
 
The MIT License (MIT)

Copyright (c) 2018 Jordi Coscolla

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


