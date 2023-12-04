# Developing a Single Page App with FastAPI and Vue.js


## Develop and debug remotely by docker-compose through VS Code
### network overview:
Host (Windows PC) -- Connect to Remote SSH -- Ubuntu (Running in VMware/VirtualBox) -- Docker in Ubuntu 
### Target: run and debug frontend/backend src hosted in Docker in remote machine

### Steps:
- VS Code: connect to Remote SSH
- F1 - add Docker Compose file to workspace
- modify docker-compose.yml, docker-compose.debug.yml, Dockerfile according to backend/frontend structure
- pay attention to .vscode/launch.json & tasks.json
- create Debug configuration: python -- Remote Attach
- Debug method #1: F5 and select "Docker - Run", it will enables all run function including debug
    -- PROS: one click (F5)
    -- CONS: could not hot reload in debug mode
- Debug method #1: Right click docker-compose.debug.yml, "Compose Up". Then F5 and select "Python - Remote Attach"
    -- PROS: hot reload in debug mode
    -- CONS: two steps

### Demo site
https://baozhong.store/fastapi/
Note: the fastapi App is mounted at sub-directory of this site (/fastapi).

### Want to learn how to build this?

Check out the [post](https://testdriven.io/blog/developing-a-single-page-app-with-fastapi-and-vuejs).

## Want to use this project?

Build the images and spin up the containers:

```sh
$ docker-compose up -d --build
```

Apply the migrations:

```sh
$ docker-compose exec backend aerich upgrade
```

Ensure [http://localhost:5000](http://localhost:5000), [http://localhost:5000/docs](http://localhost:5000/docs), and [http://localhost:8080](http://localhost:8080) work as expected.
