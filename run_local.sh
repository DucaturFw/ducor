git pull --recurse-submodules
docker-compose -f docker-compose.yml -f docker-compose.test_override.yml build
docker-compose -f docker-compose.yml -f docker-compose.test_override.yml up -d