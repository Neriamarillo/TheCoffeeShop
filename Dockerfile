FROM node:14.17.3

WORKDIR /coffee-shop

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . ./

EXPOSE 3000
EXPOSE 5000

CMD ["npm", "run", "start-app"]
