# Stage 1

# Start your image with a node base image
FROM node:latest as build
WORKDIR /usr/local/app/
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build



# Stage 2

FROM nginx:latest
COPY --from=build usr/local/app/dist/library-app /usr/share/nginx/html

EXPOSE 80
