#!/bin/bash

# Remove empty and duplicate files
rm -f src/components/auth/*.jsx
rm -f src/components/layout/*.jsx
rm -f src/components/layout/*.js

# Move Home and Profile components to pages
mkdir -p src/pages
mv src/components/Home.jsx src/pages/
mv src/components/Profile.jsx src/pages/

# Remove features, routing and ui directories as we're reorganizing
rm -rf src/components/features
rm -rf src/components/routing
rm -rf src/components/ui

# Create necessary component directories if they don't exist
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/components/auth
