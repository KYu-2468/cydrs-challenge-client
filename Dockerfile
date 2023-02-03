FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/index
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
EXPOSE 443
EXPOSE 3000
CMD ["npm", "start"]
