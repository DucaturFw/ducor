git pull --recurse-submodules
docker-compose -f docker-compose.yml -f docker-compose.prod_override.yml build
docker-compose -f docker-compose.yml -f docker-compose.prod_override.yml up -d