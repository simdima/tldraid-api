FROM node:20-bullseye

WORKDIR /usr/share/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run update_source

EXPOSE 5510

CMD ["npm", "run", "start"]