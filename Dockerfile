FROM mhart/alpine-node:8.15
COPY . .

RUN yarn 

EXPOSE 80
EXPOSE 8080
CMD ["yarn", "start"]
