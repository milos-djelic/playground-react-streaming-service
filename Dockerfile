FROM node:16-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
COPY public public
COPY src src
# COPY tsconfig.json ./

RUN rm -f src/**/*/test.ts src/**/*/test/tsx
RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]