FROM node:18.18.2-alpine3.18

WORKDIR /app

COPY package.json package.json
RUN npm i

COPY ./messages ./messages
COPY tsconfig.json tsconfig.json
COPY next.config.ts next.config.ts
COPY tailwind.config.ts tailwind.config.ts
COPY postcss.config.mjs postcss.config.mjs
COPY public public
COPY src src
RUN npm run build

CMD ["npm", "start"]