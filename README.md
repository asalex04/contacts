## Getting Started

First, run the development server:

```bash
make start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Start with docker
```bash
docker pull asalex/cont_i
```
then

```bash
make run
```
or

```bash
docker run -d -p 3000:3000 -p 4200:4200 --rm cont_i
```
