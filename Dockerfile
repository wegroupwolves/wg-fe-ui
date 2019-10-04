# vim: set ft=dockerfile:

FROM node:10-alpine AS builder

WORKDIR /srv/design_system

ADD . /srv/design_system

RUN npm build
RUN npm install -g .
