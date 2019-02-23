#! /bin/bash

# The context has to be the root project directory
cd ../../
docker build -t traxitt:latest -f packages/platform/deploy/development/Dockerfile .
docker image prune -f --filter label=stage=intermediate
SERVER=localhost
docker tag traxitt $SERVER:5000/traxitt
docker push $SERVER:5000/traxitt

# docker run -it --rm -p 3030:3030 -e NODE_ENV=development -e MONGODB=mongodb://solarwind:27017/traxitt-system traxitt