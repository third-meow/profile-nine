FROM mhart/alpine-node:8.15
COPY src/ /src


EXPOSE 80
CMD ["node", "src/index.js"]
