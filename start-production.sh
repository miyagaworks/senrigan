#!/bin/bash

# Production startup script for Senrigan website with Node.js backend

echo "Starting Senrigan production server..."

# Load environment variables
export NODE_ENV=production
export PORT=3001

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the frontend if dist directory doesn't exist
if [ ! -d "dist" ]; then
    echo "Building frontend..."
    npm run build
fi

# Start the Node.js server
echo "Starting Node.js server on port $PORT..."
npm run server:prod