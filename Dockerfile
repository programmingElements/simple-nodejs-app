FROM node:20.18.0

MAINTAINER Chakravarthi

RUN mkdir /app && chown -R node:node /app

WORKDIR /app

ENV PORT=8000

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000 

CMD [ "npm", "run", "start" ]