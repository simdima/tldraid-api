FROM node:20-bullseye

WORKDIR /usr/share/app

COPY yarn.lock ./
COPY package.json ./

COPY . .

RUN yarn
RUN yarn download:assets
RUN yarn build

EXPOSE 5510

CMD ["npm", "run", "start:prod"]