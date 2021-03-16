FROM node:14.15.4

WORKDIR /back

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start-dev"]