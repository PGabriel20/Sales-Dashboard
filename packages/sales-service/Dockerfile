FROM node:latest

WORKDIR /usr/src/sales-service

#Copies .env.local to a real .env 
COPY . .
COPY ./.env.local .env

#Only logs critical errors
RUN npm install --quiet --no-optional --no-fund --log-level=error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]