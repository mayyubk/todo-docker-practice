# Todo App – Docker Practice Project

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

A **full-stack Todo app** containerized with **Docker Compose** – perfect for learning **DevOps**, **full-stack**, and **deployment**.

---

## Features
- CRUD operations
- MySQL database
- Node.js + Express backend
- Static frontend (served via Nginx)
- Dockerized with `docker-compose.yml`

---
## Tech Stack
* **Frontend**: HTML, CSS, JS  
* **Backend**: Node.js, Express  
* **Database**: MySQL 8.0  
* **Web Server**: Nginx  
* **Orchestration**: Docker Compose  

## Learning Goals
* Multi-container apps  
* Custom Docker network  
* Environment variables
* Port mapping & service dependency

## Project Structure
├── backend/        # Node.js API
├── frontend/       # HTML + JS
├── docker-compose.yml


## Quick Start

```bash
git clone https://github.com/mayyubk/todo-docker-practice.git
cd todo-docker-practice
docker-compose up --build
--------
Open: [http://localhost:3001](http://localhost:3001)





