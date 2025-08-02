#!/bin/bash

echo "🚀 Building and running Porto Vue Docker container..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t porto-vue .

# Run the container
echo "🏃 Running container..."
docker run -d -p 3000:3000 --name porto-vue-app porto-vue

echo "✅ Application is running at http://localhost:3000"
echo "📋 Container logs: docker logs porto-vue-app"
echo "🛑 Stop container: docker stop porto-vue-app"
echo "🗑️  Remove container: docker rm porto-vue-app" 