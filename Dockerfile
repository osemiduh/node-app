FROM node:alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 4002

RUN npx prisma generate

CMD ["npm", "run", "graph"]