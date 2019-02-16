FROM mhart/alpine-node:10.15
COPY . .

EXPOSE 8080

RUN yarn 
RUN yarn build

CMD ["yarn", "start"]
