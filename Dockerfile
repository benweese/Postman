FROM alpine:latest
LABEL maintainer="ben@benweese.dev"

RUN apk update && apk add \
    curl \
    git \
    vim \
    --update npm

RUN npm install -g newman \
    && npm install -g newman-reporter-htmlextra
