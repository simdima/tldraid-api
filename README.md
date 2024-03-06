## tldrAId API server

### Description

API server for [tldrAId](https://github.com/simdima/tldraid) web app

### Available endpoints

**Languages**

- Description: Get available languages for man pages
- URL: /languages
- Method: GET
- Query Parameters: none

Example:

```sh
GET /languages
```

<hr>

**Utilities**

- Description: Get list of utilities available for selected platform
- URL: /utilities
- Method: GET
- Query Parameters:
  | Parameter | Type | Required? | Possible values |
  | :--- | :------: | ----: | ----: |
  | lang | string | yes | see https://github.com/tldr-pages/tldr
  | platform | string | yes | android, common, linux, osx, windows |

Example:

```sh
GET /utilities?lang=en&platform=linux
```

<hr>

**Utility**

- Description: Get man page for selected utility
- URL: /utility
- Method: GET
- Query Parameters:
  | Parameter | Type | Required? | Possible values |
  | :--- | :------: | ----: | ----: |
  | lang | string | yes | see https://github.com/tldr-pages/tldr
  | platform | string | yes | android, common, linux, osx, windows |
  | utility | string | yes | see https://github.com/tldr-pages/tldr |

Example:

```sh
GET /utility?lang=de&platform=osx&utility=ls
```

### How to use?

**Option #1**
The working instance of the API server can be found [here](https://tldraidapi.simlabs.dev) (currently available only to users located in Estonia)

**Option #2**
Run it locally using Docker.

1. Clone this repository to your system and navigate inside the directory

2. Create an **.env** file and add the API server's url to environmental variable VITE_API_URL

```sh
# adjust the APP_URL according to your tldraid front-end app setup
touch .env && echo "\
MODE=development\n
PORT=5510\n
APP_URL=http://localhost:3000\
" > .env
```

3. Build a Docker image _(change EXPOSE variable if needed)_

```sh
docker build -t tldraid-api .
```

4. Spin up a Docker container _(change ports according to your setup)_

```sh
docker run --name tldraid-api -p 5510:5510 -d tldraid-api
```

### Development

Clone the repository, navigate inside and run:

```sh
touch .env && echo "\
MODE=development\n
PORT=[YOUR_API_SERVER_PORT]\n
APP_URL=[URL_OF_YOUR_FRONT_END_INSTANCE]\
" > .env

npm i(nstall)
npm run download_tldr_data # to download the latest versions of manpages from tldr repo

npm run dev
```

## Acknowledgments

This project utilizes the following community-maintained projects:

- [tldr-pages](https://github.com/tldr-pages/tldr)

### License

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
