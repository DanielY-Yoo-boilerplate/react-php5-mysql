FROM php:5.4.45-apache 
# https://hub.docker.com/_/php

RUN apt-get update

RUN apt-get install -y \ 
  libldb-dev \ 
  libldap2-dev \ 
  && ln -s /usr/lib/x86_64-linux-gnu/libldap.so /usr/lib/libldap.so \
  && ln -s /usr/lib/x86_64-linux-gnu/liblber.so /usr/lib/liblber.so

RUN apt-get install -y \ 
  libcurl4-gnutls-dev \
  libmcrypt-dev \
  libxml2-dev \
  zlib1g-dev

RUN docker-php-ext-install curl dom exif gettext hash iconv json ldap mbstring mcrypt mysql mysqli pdo pdo_mysql tokenizer xml zip 

RUN a2enmod rewrite

EXPOSE 80