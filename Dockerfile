# vim: set ft=dockerfile:

FROM node:10-alpine AS builder

WORKDIR /srv/design_system

ADD . /srv/design_system
ADD ./cypress_install.sh /scripts/


RUN npm install -g .
RUN npm run build
