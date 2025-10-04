FROM node:lts-alpine
ENV NODE_ENV=dev
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm ci --silent 

COPY . .

RUN npm install -g typescript

RUN npm run build
EXPOSE ${PORT} 
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]
