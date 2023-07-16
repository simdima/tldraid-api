FROM node:20-bullseye

WORKDIR /usr/share/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5510

CMD ["npm", "run", "start"]