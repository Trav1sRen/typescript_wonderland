docker login
docker build -t testcafe-demo -f ./Dockerfile .
docker stop testcafe-sample-test || true
docker rm testcafe-sample-test || true
docker run --name testcafe-sample-test testcafe-demo
