FROM testcafe/testcafe:latest
ARG BROWSER_NAME="chromium"
ENV BROWSER_NAME=$BROWSER_NAME

USER root
COPY . /

RUN npm install

WORKDIR /tests

ENTRYPOINT testcafe $BROWSER_NAME:headless web_sample_test.ts --ts-config-path /tsconfig.json --page-load-timeout 30