#!/bin/bash

# Remove old JavaScript and empty files
rm -f src/App.js
rm -f src/App.jsx
rm -f src/index.js

# Install dependencies
npm install

# Create necessary directories
mkdir -p src/assets
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/components/auth
mkdir -p src/features
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/pages/auth
mkdir -p src/services
mkdir -p src/store
mkdir -p src/styles
mkdir -p src/types
mkdir -p src/utils
