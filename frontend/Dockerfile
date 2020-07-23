FROM node:current-alpine

WORKDIR /frontend

EXPOSE 3000

COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

RUN npm install --no-progress --ignore-optional

CMD ["npm", "run", "start"]