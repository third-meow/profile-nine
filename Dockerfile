FROM mhart/alpine-node:10.15
COPY . .

EXPOSE 8080

RUN yarn 

CMD ["yarn", "start"]
