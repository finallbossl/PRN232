#!/bin/bash

echo "========================================"
echo "Push Code to GitHub"
echo "========================================"
echo ""

echo "[1/6] Checking git repository..."
if [ ! -d .git ]; then
    echo "Git repository not found. Initializing..."
    git init
else
    echo "Git repository exists."
fi
echo ""

echo "[2/6] Checking remote..."
git remote -v
if [ $? -ne 0 ]; then
    echo "Adding remote..."
    git remote add origin https://github.com/finallbossl/PRN232.git
else
    echo "Updating remote URL..."
    git remote set-url origin https://github.com/finallbossl/PRN232.git
fi
echo ""

echo "[3/6] Adding files..."
git add .
echo ""

echo "[4/6] Checking status..."
git status
echo ""

echo "[5/6] Committing..."
git commit -m "Initial commit: GoRide monorepo with microservices architecture"
if [ $? -ne 0 ]; then
    echo "Warning: No changes to commit or commit failed."
    echo "Please check git status."
    exit 1
fi
echo ""

echo "[6/6] Pushing to GitHub..."
git branch -M main
git push -u origin main
if [ $? -ne 0 ]; then
    echo ""
    echo "Push failed. Possible reasons:"
    echo "1. Repository on GitHub is not empty - try: git pull origin main --allow-unrelated-histories"
    echo "2. Authentication failed - check your GitHub credentials"
    echo "3. Network issue"
    exit 1
else
    echo ""
    echo "========================================"
    echo "SUCCESS! Code pushed to GitHub."
    echo "========================================"
fi
echo ""
