run:
	docker run -d -p 3000:3000 -p 4200:4200 --rm --name cont_c cont_i

stop:
	docker stop cont_c

start:
	npm run serv




