# Base image 
FROM node:18-alpine

# Set working directory 

WORKDIR app

# copy dependency list 

COPY package*json ./

# install dependendy 

RUN  npm install

# copy rest of the code 

COPY . .

# expose port
EXPOSE 5000



CMD ["npm", "start"]

















