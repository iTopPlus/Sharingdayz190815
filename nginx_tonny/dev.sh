#!/bin/bash
docker rm -f nginx
docker run -d --restart=always -p 80:80 -v /$(pwd)/conf.d:/etc/nginx/conf.d -v /$(pwd)/ssl:/etc/nginx/ssl --name nginx nginx
# docker run -d --restart=always --net=host -v /$(pwd)/conf.d/:/etc/nginx/conf.d -v /$(pwd)/ssl/:/etc/nginx/ssl --name nginx nginx