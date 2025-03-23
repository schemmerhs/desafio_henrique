# Dockerfile App JS


FROM node:16

 
RUN echo "America/Sao_Paulo" > /etc/timezone


WORKDIR /app


COPY app_hora/package*.json ./
RUN npm install
RUN npm install node-cache


COPY app_hora/app_hora.js .


EXPOSE 3000


CMD ["node", "app_hora.js"]
