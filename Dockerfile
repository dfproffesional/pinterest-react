FROM node:14.10.1-alpine3.12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
#ADD node_modules /usr/src/app/node_modules

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

#RUN npx create-react-app . 

CMD [ "npm", "start" ] 
