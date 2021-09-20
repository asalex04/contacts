FROM node

WORKDIR /app

COPY .  .

RUN npm i -g json-server

RUN npm install

EXPOSE 3000 4200

CMD ["npm", "run", "serv"]
