## tldrAId API server

## Description

API server for [tldrAId](https://github.com/simdima/tldraid) web app

## Available endpoints

**Languages**

- Description: Get available languages for man pages
- Method: GET
- URL: /languages

Example:

```sh
GET /languages
```

<hr>

**Utilities**

- Description: Get list of utilities available for selected platform
- Method: GET
- URL: /utilities/{platform}

  | Path     |  Type  | Required? |                      Possible values |
  | :------- | :----: | --------: | -----------------------------------: |
  | platform | string |       yes | android, common, linux, osx, windows |

Example:

```sh
GET /utilities/osx
```

<hr>

**Utility**

- Description: Get man page for selected utility
- Method: GET
- URL: /utility/{platform}/{language}/{utility}
  | Path | Type | Required? | Possible values |
  | :--- | :------: | ----: | ----: |
  | platform | string | yes | android, common, linux, osx, windows |
  | language | string | yes | see https://github.com/tldr-pages/tldr
  | utility | string | yes | see https://github.com/tldr-pages/tldr |

Example:

```sh
GET /utilities/common/en/ls
```

## How to use?

- TBD

## Development

Clone the repository, navigate inside and run:

```sh
# set app port (will default to port 3000 if not set)
touch .env && echo "PORT=XXXX" > .env

# install dependencies
yarn

# download the latest versions of manpages from tldr repo
yarn download:assets

yarn start # or yarn start:dev to start in watch mode
```

## Acknowledgments

This project utilizes the following community-maintained projects:

- [tldr-pages](https://github.com/tldr-pages/tldr)

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Author

Dmitri Sim
