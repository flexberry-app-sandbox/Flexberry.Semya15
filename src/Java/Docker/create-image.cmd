docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semya15-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t semya15-java/app ../../..
