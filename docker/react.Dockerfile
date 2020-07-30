# pull official base image

FROM node:13.12.0-alpine

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "run", "start"]

COPY package.json ./
COPY yarn.lock ./

RUN yarn --pure-lockfile

COPY .env.development ./
COPY tsconfig.json ./



