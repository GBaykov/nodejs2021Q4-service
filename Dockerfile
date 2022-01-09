FROM node:16.13-alpine3.15

EXPOSE 4000

WORKDIR /docker

# регулярка на копирование любых package
COPY package*.json .

RUN npm install 

#перенос содержимого папки приложения в папку контейнера 
COPY . .

CMD ["npm", "run", "start"]