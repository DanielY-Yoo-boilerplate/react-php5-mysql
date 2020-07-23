FROM node:current-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --no-progress --ignore-optional

CMD ["npm", "run", "start"]