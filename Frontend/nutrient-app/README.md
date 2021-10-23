Start DB: docker run -d --rm --name mongo -p 27017:27017 -v mongodbdata:/data/db -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=Pass#word1 --network=nutrientdb mongo
Run Docker Image: docker run -it --rm -p 8080:80 -e MongoDbSettings:Host=mongo -e MongoDbSettings:Password=Pass#word1 --network=nutrientdb niklas234/nutrientapi:v1

How to run API in Docker:

1. Create network nutrientdb
2. Start mongodb with first command
3. Start API with second command
4. Use API
