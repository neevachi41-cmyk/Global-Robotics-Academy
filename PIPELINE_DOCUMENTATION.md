# Pipeline Documentation - Global Robotics Academy

This guide explains the automated CI/CD pipeline setup for the Global Robotics Academy MERN application, designed to streamline your development workflow so you can focus on connecting APIs and building features.

## 🎯 Pipeline Overview

The pipeline provides automated workflows for:
- **Code Quality**: ESLint, security audits, and dependency checks
- **Testing**: Automated testing for both frontend and backend
- **Database Migrations**: Automated MongoDB seeding and migrations
- **Deployment**: Automatic deployment to production and staging environments
- **API Integration**: Simplified environment configuration for API connections

## 🏗️ Architecture

```
GitHub Repository
    ↓
GitHub Actions (CI/CD)
    ↓
    ├── Frontend → Vercel (React hosting)
    └── Backend → Railway (Node.js + MongoDB)
```

## 🚀 Quick Setup Guide

### 1. GitHub Actions Setup

The pipeline is configured in `.github/workflows/ci-cd.yml`. No additional setup needed - it runs automatically on push to `main` or `develop` branches.

### 2. Vercel Setup (Frontend)

1. **Create Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Import Project**: Connect your GitHub repository
3. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = Your production backend API URL
4. **Get Project Details**:
   - Project ID: In project settings
   - Organization ID: In account settings

### 3. Railway Setup (Backend)

1. **Create Railway Account**: Sign up at [railway.app](https://railway.app)
2. **Create New Project**: Click "New Project"
3. **Add MongoDB Service**: Provision MongoDB database
4. **Add Backend Service**: Deploy from GitHub repository
5. **Configure Environment Variables**:
   - `MONGODB_URI`: Railway MongoDB connection string
   - `PORT`: 5000
   - `JWT_SECRET`: Generate a secure random string

### 4. GitHub Secrets Configuration

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

```yaml
# Vercel Secrets
VERCEL_TOKEN: Your Vercel authentication token
VERCEL_ORG_ID: Your Vercel organization ID
VERCEL_PROJECT_ID: Your Vercel project ID

# Railway Secrets
RAILWAY_TOKEN: Your Railway authentication token

# Application Secrets
MONGODB_URI: Your MongoDB connection string
REACT_APP_API_URL: Your production backend API URL
```

## 🔄 How the Pipeline Works

### On Push to `main` branch:
1. **Code Quality Check**: Runs ESLint and security audits
2. **Backend Testing**: Tests backend with MongoDB service
3. **Frontend Testing**: Tests React components and builds
4. **Production Deployment**: 
   - Deploys frontend to Vercel (production)
   - Deploys backend to Railway (production)
   - Runs database migrations

### On Push to `develop` branch:
1. Same quality checks and testing
2. **Staging Deployment**:
   - Deploys frontend to Vercel (preview)
   - Deploys backend to Railway (staging)

### On Pull Requests:
1. Runs all quality checks and tests
2. No deployment (prevents premature deployments)

## 🔌 API Integration Made Easy

### Local Development API Setup

**Frontend (`.env`):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

**Backend (`.env`):**
```env
MONGODB_URI=mongodb://localhost:27017/robotics-academy
PORT=5000
JWT_SECRET=your-dev-secret-key
```

### Production API Setup

The pipeline automatically handles production API configuration:

1. **Frontend**: Vercel uses the `REACT_APP_API_URL` environment variable
2. **Backend**: Railway provides the MongoDB connection string automatically
3. **API Endpoints**: Your backend API is accessible at Railway's provided domain

### Adding New API Endpoints

When you add new API endpoints:

1. **Backend**: Add routes in `backend/routes/`
2. **Frontend**: Add API calls in `frontend/src/services/api.js`
3. **No Pipeline Changes Needed**: The pipeline automatically builds and deploys your changes

Example API integration in `frontend/src/services/api.js`:

```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getMyNewData = async () => {
  try {
    const response = await axios.get(`${API_URL}/my-new-endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
```

## 🗄️ Database Migrations

### Migration System

The project includes a robust migration system in `backend/migrations/`:

- **001_initial_seed.js**: Initial data seeding
- **migrate.js**: Migration runner script

### Running Migrations Locally

```bash
# Run all pending migrations
cd backend
npm run migrate

# Rollback all migrations
npm run migrate:rollback
```

### Creating New Migrations

1. Create a new file in `backend/migrations/`: `002_your_migration.js`
2. Follow this structure:

```javascript
const mongoose = require('mongoose');
const YourModel = require('../models/YourModel');

async function up() {
  // Migration logic here
  await YourModel.create({ /* your data */ });
  console.log('Migration completed');
}

async function down() {
  // Rollback logic here
  await YourModel.deleteMany({});
  console.log('Rollback completed');
}

module.exports = { up, down };
```

### Automatic Migrations

The pipeline automatically runs migrations during deployment to ensure your database schema is always up to date.

## 🧪 Testing Strategy

### Backend Testing

The pipeline includes MongoDB service for backend testing:

```bash
# Run tests locally
cd backend
npm test
```

### Frontend Testing

```bash
# Run tests locally
cd frontend
npm test
```

### Test Coverage

The pipeline generates test coverage reports and uploads them as artifacts.

## 🛠️ Manual Deployment Commands

### Frontend (Vercel CLI)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Backend (Railway CLI)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up

# Run commands in Railway environment
railway run npm run migrate
```

## 📊 Monitoring and Logs

### Vercel Logs

1. Go to your Vercel project dashboard
2. Click on "Deployments"
3. View logs for each deployment

### Railway Logs

1. Go to your Railway project
2. Click on the backend service
3. View real-time logs in the "Logs" tab

### GitHub Actions Logs

1. Go to your GitHub repository
2. Click on "Actions" tab
3. Click on a workflow run to view detailed logs

## 🔒 Security Best Practices

1. **Never commit secrets**: Always use environment variables
2. **Use different secrets**: Separate dev/staging/production secrets
3. **Rotate tokens**: Regularly update authentication tokens
4. **Monitor logs**: Check for unauthorized access attempts
5. **Keep dependencies updated**: The pipeline runs security audits

## 🐛 Troubleshooting

### Pipeline Failures

**Build Fails:**
- Check GitHub Actions logs for specific error
- Ensure all dependencies are properly installed
- Verify environment variables are set correctly

**Deployment Fails:**
- Verify API tokens are valid and not expired
- Check that target services (Vercel/Railway) are operational
- Ensure branch names match pipeline configuration

**Migration Fails:**
- Check MongoDB connection string
- Verify migration file syntax
- Test migrations locally first

### API Connection Issues

**Frontend can't connect to backend:**
- Verify `REACT_APP_API_URL` is correct
- Check backend service is running
- Ensure CORS is properly configured in backend

**Database connection issues:**
- Verify MongoDB connection string
- Check database service is running
- Ensure network connectivity

### Environment Variable Issues

**Variables not loading:**
- Restart services after changing variables
- Check variable names match exactly (case-sensitive)
- Verify secrets are properly set in GitHub

## 📈 Performance Optimization

### Pipeline Performance

- **Caching**: Node modules are cached to speed up builds
- **Parallel Jobs**: Frontend and backend tests run in parallel
- **Conditional Deployment**: Only deploys on specific branches

### Application Performance

- **Frontend**: Vercel provides automatic CDN and caching
- **Backend**: Railway provides automatic scaling
- **Database**: Use Railway's MongoDB for optimized performance

## 🎯 Development Workflow

### Feature Development

1. Create a new branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test locally with your API integrations
4. Push to GitHub: `git push origin feature/my-feature`
5. Create a pull request
6. Pipeline runs automated tests
7. Merge to `develop` for staging deployment
8. Merge to `main` for production deployment

### Hotfix Workflow

1. Create hotfix branch from `main`: `git checkout -b hotfix/urgent-fix`
2. Make emergency fixes
3. Push and create PR
4. Merge directly to `main` after review
5. Pipeline immediately deploys to production

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [MERN Stack Best Practices](https://www.mongodb.com/mern-stack)

## 🆘 Support

For pipeline issues:
1. Check GitHub Actions logs first
2. Review this documentation
3. Check platform-specific documentation
4. Open an issue in the repository

---

**Quick Reference Commands:**

```bash
# Local development
cd backend && npm run dev
cd frontend && npm start

# Database operations
cd backend && npm run migrate
cd backend && npm run migrate:rollback

# Testing
cd backend && npm test
cd frontend && npm test

# Building
cd frontend && npm run build

# Deployment
vercel --prod                    # Frontend production
railway up                       # Backend deployment
```

Your pipeline is now ready! Simply push your code and focus on building great API integrations. 🚀