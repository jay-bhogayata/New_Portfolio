FROM node:18.0-alpine3.14 as nodeenv

WORKDIR /app

COPY ["package.json" , "package-lock*.json" ,"./"]

RUN npm install 

COPY . .

RUN npm run astro build

FROM nginx

EXPOSE 80

COPY --from=nodeenv /app/dist /usr/share/nginx/html