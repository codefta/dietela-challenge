dev:
	docker compose -f ./deploy/local/docker-compose.yml up  --build

down:
	docker compose -f ./deploy/local/docker-compose.yml down