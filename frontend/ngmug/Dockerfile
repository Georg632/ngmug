### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /apps/ngmug-portal
COPY package.json package-lock.json decorate-angular-cli.js ./
RUN npm install
COPY . .
RUN npm run ng build

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /apps/ngmug-portal/dist/apps/ngmug-portal /usr/share/nginx/html
EXPOSE 80