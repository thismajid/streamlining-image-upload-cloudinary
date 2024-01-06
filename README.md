# NestJS Cloudinary Image Upload Streamliner

This repository showcases a method for simplifying the image upload process to Cloudinary. It provides a set of tools and examples to help developers integrate Cloudinary's image management features into their web applications.

## Features

- Integration with Cloudinary's API for image uploads.
- MongoDB as a database for storing image metadata.
- Redis for efficient caching of frequent data requests.
- NestJS's powerful module system for clean and maintainable code structure.
- Examples of direct and secure image upload implementations.

## Prerequisites

Before using this project, ensure that you have the following requirements:

- Node.js (Preferably the latest LTS version).
- A Cloudinary account with an API Key and Secret from your Cloudinary dashboard.
- A MongoDB server running (locally or a hosted solution).
- A Redis server running (locally or a hosted service).

## Configuration

Set up your Cloudinary credentials in your environment. You can do this by creating a .env file in the root directory of the project and adding the following lines with your credentials:

```bash
APP_PORT=your_app_port
NODE_ENV=development |or| production
SWAGGER_USERNAME=your_swagger_auth_username
SWAGGER_PASSWORD=your_swagger_auth_password
MONGO_DATABASE=your_mongodb_server_database_name
MONGO_HOST=your_mongodb_server_host
MONGO_PASSWORD=your_mongodb_server_password
MONGO_PORT=your_mongodb_server_port
MONGO_USERNAME=your_mongodb_server_username
QUEUE_NAME=your_sample_queue_name
REDIS_HOST=your_redis_server_host
REDIS_PORT=your_redis_server_port
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Installation

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/thismajid/streamlining-image-upload-cloudinary.git
cd streamlining-image-upload-cloudinary
npm install
npm start |or| npm run start:dev
```
