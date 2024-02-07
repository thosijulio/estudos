FROM node:20.11.0-slim

WORKDIR /home/node/app

COPY / /home/node/app/

RUN "npm" "install"

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
