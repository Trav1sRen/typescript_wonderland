FROM testcafe/testcafe:latest
ARG BROWSER_NAME="chromium"
ENV BROWSER_NAME=$BROWSER_NAME

USER root
COPY . /

RUN npm install

WORKDIR /tests

ENTRYPOINT testcafe $BROWSER_NAME:headless sample_test.ts --compiler-options typescript.configPath='/tsconfig.json' --page-load-timeout 60000 --assertion-timeout 10000
