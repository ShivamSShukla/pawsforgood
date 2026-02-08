#!/bin/bash

# Paws For Good - Quick Setup Script
# This script helps you set up the project for deployment

echo "🐾 Paws For Good - Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Create .env.local from example if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "✅ .env.local created - Please edit this file with your credentials"
    echo ""
    echo "⚠️  IMPORTANT: Update the following in .env.local:"
    echo "   - RESEND_API_KEY (get from https://resend.com)"
    echo "   - NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US (from Amazon Associates)"
    echo "   - NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK (from Amazon Associates UK)"
    echo ""
else
    echo "✅ .env.local already exists"
    echo ""
fi

# Check if public directory exists
if [ ! -d "public" ]; then
    echo "📁 Creating public directory..."
    mkdir public
fi

echo "✅ Public directory ready"
echo ""

# Run build test
echo "🏗️  Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed. Common issues:"
    echo "   1. Missing environment variables in .env.local"
    echo "   2. TypeScript errors"
    echo "   3. Missing dependencies"
    echo ""
    echo "Please fix the errors above and try again."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. Edit .env.local with your credentials:"
echo "   - Get Resend API key: https://resend.com"
echo "   - Get Amazon tags: https://affiliate-program.amazon.com"
echo ""
echo "2. Test locally:"
echo "   npm run dev"
echo ""
echo "3. Visit http://localhost:3000"
echo ""
echo "4. When ready to deploy:"
echo "   - Push to GitHub"
echo "   - Import to Vercel"
echo "   - Add environment variables in Vercel dashboard"
echo ""
echo "📚 Read DEPLOYMENT_CHECKLIST.md for detailed instructions"
echo ""
echo "🐾 Happy coding!"
