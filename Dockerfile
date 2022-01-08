FROM node:16-alpine

EXPOSE 4000

WORKDIR /serv/app/src

# аналогично COPY package.json /.
COPY package.json .

RUN npm install 

#перенос содержимого папки приложения в папку контейнера 
COPY . .

CMD ["npm", "run", "start"]