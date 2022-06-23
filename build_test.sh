docker login
docker build -t rakuten-mobile-demo -f ./Dockerfile .
docker stop rakuten-mobile-test || true
docker rm rakuten-mobile-test || true
docker run --name rakuten-mobile-test rakuten-mobile-demo
