# Global Robotics Academy - MERN Stack Application

A full-stack web application for Global Robotics Academy, converted from a static HTML site to a dynamic MERN (MongoDB, Express, React, Node.js) application with a complete backend API and frontend integration.

## 🚀 Features

- **Dynamic Content Management**: All content (competitions, programs, teams, gallery) managed through MongoDB
- **RESTful API**: Complete backend API with CRUD operations for all data models
- **React Frontend**: Modern React components with API integration
- **Responsive Design**: Maintains the original beautiful design across all devices
- **Contact Form**: Functional contact form with database storage
- **Admin Ready**: Architecture prepared for admin authentication and content management
- **Fallback Data**: Components include static fallback data if API is unavailable
- **Automated CI/CD Pipeline**: GitHub Actions for automated testing, quality checks, and deployment
- **Database Migrations**: Automated migration system for MongoDB schema management

## � Quick Start with Pipelines

The project includes a fully automated CI/CD pipeline setup. To get started:

1. **Local Development**: Simply run `start-dev.bat` (Windows) or `start-dev.sh` (Mac/Linux)
2. **Automated Deployment**: Configure GitHub secrets and push to trigger automatic deployments
3. **API Integration**: Just add your API endpoints - the pipeline handles the rest

For detailed pipeline documentation, see [PIPELINE_DOCUMENTATION.md](./PIPELINE_DOCUMENTATION.md)

## �📋 Project Structure

```
global-robotics-academy/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD pipeline
├── backend/
│   ├── models/                # MongoDB schemas
│   │   ├── Admin.js
│   │   ├── Competition.js
│   │   ├── Contact.js
│   │   ├── Gallery.js
│   │   ├── Program.js
│   │   └── Team.js
│   ├── routes/                # API routes
│   │   ├── admin.js
│   │   ├── competitions.js
│   │   ├── contact.js
│   │   ├── gallery.js
│   │   ├── programs.js
│   │   └── teams.js
│   ├── middleware/            # Custom middleware (for future auth)
│   ├── migrations/            # Database migration scripts
│   │   └── 001_initial_seed.js
│   ├── server.js              # Express server setup
│   ├── seed.js                # Legacy seed script
│   ├── migrate.js             # Migration runner
│   ├── railway.json           # Railway deployment config
│   ├── nixpacks.toml          # Railway build config
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Contact.js
│   │   │   ├── Difference.js
│   │   │   ├── Footer.js
│   │   │   ├── Gallery.js
│   │   │   ├── Hero.js
│   │   │   ├── Momentum.js
│   │   │   ├── Navbar.js
│   │   │   ├── Pathway.js
│   │   │   ├── StatsBand.js
│   │   │   ├── Teams.js
│   │   │   └── Competitions.js
│   │   ├── services/           # API service layer
│   │   │   └── api.js
│   │   ├── App.js             # Main React app
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Global styles
│   ├── vercel.json            # Vercel deployment config
│   ├── package.json
│   └── .env
├── start-dev.bat              # Windows dev startup script
├── start-dev.sh               # Mac/Linux dev startup script
├── .env.example               # Environment variables template
├── index.html                 # Original static file (reference)
├── API_DOCUMENTATION.md       # Complete API documentation
├── PIPELINE_DOCUMENTATION.md  # CI/CD pipeline guide
└── README.md                  # This file
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication (ready for implementation)

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Create React App** - Build tooling

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn
- GitHub account (for CI/CD)

### Quick Local Development

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd "Something New"
```

2. **Install dependencies**:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Start MongoDB**:
```bash
mongod
```

4. **Start development servers**:
- **Windows**: Double-click `start-dev.bat` or run `start-dev.bat`
- **Mac/Linux**: Run `./start-dev.sh`

This will start both backend (port 5000) and frontend (port 3000) automatically.

### Manual Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/robotics-academy
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

5. Start MongoDB (if using local instance):
```bash
mongod
```

6. Start the backend server:
```bash
npm run dev    # Development mode with nodemon
# or
npm start      # Production mode
```

The backend API will be available at `http://localhost:5000`

### Manual Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the React development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 🔌 API Endpoints

The application provides a comprehensive RESTful API:

### Public Endpoints
- `GET /api/health` - Health check
- `GET /api/competitions` - Get all competitions
- `GET /api/programs` - Get all programs
- `GET /api/teams` - Get all teams
- `GET /api/gallery` - Get all gallery items
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Authentication Ready)
- `POST /api/admin/login` - Admin login
- `POST /api/competitions` - Create competition
- `PUT /api/competitions/:id` - Update competition
- `DELETE /api/competitions/:id` - Delete competition
- `POST /api/programs` - Create program
- `PUT /api/programs/:id` - Update program
- `DELETE /api/programs/:id` - Delete program
- `POST /api/teams` - Create team
- `PUT /api/teams/:id` - Update team
- `DELETE /api/teams/:id` - Delete team
- `POST /api/gallery` - Create gallery item
- `PUT /api/gallery/:id` - Update gallery item
- `DELETE /api/gallery/:id` - Delete gallery item
- `GET /api/contact` - Get all contact submissions
- `PUT /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact submission

For detailed API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

## 🔄 CI/CD Pipeline

The project includes a fully automated CI/CD pipeline using GitHub Actions:

### Pipeline Features
- **Automated Testing**: Runs tests on every push and pull request
- **Code Quality**: ESLint and security audits
- **Database Migrations**: Automated MongoDB seeding and migrations
- **Auto Deployment**: Deploys to production (main branch) and staging (develop branch)
- **Environment Management**: Separate configurations for dev/staging/production

### Deployment Architecture
- **Frontend**: Vercel (React hosting with CDN)
- **Backend**: Railway (Node.js + MongoDB hosting)
- **CI/CD**: GitHub Actions

### Setup Instructions
1. Configure GitHub secrets (see `.env.example`)
2. Set up Vercel project and get project ID
3. Set up Railway project and get authentication token
4. Push to `main` for production deployment
5. Push to `develop` for staging deployment

For detailed pipeline documentation, see [PIPELINE_DOCUMENTATION.md](./PIPELINE_DOCUMENTATION.md)

## 🎨 Frontend Components

The React components mirror the original HTML structure:

- **Navbar** - Navigation header with links
- **Hero** - Main hero section with call-to-action
- **StatsBand** - Statistics and training loop section
- **Difference** - GRA difference cards
- **Momentum** - Momentum stats and partner band
- **Pathway** - Learning pathway and programs (API integrated)
- **Competitions** - Competition directory (API integrated)
- **Teams** - Team ecosystem (API integrated)
- **Gallery** - Gallery and video section (API integrated)
- **Contact** - Contact form with API submission
- **Footer** - Footer with links and information

## 🔐 Authentication (Future Implementation)

The backend is prepared for JWT authentication:

1. Admin login endpoint is available at `POST /api/admin/login`
2. Admin schema includes password hashing with bcrypt
3. JWT token generation is implemented
4. Middleware structure is ready for auth middleware

To implement full authentication:
1. Add JWT verification middleware in `backend/middleware/auth.js`
2. Protect admin routes with the middleware
3. Add token storage and handling in frontend
4. Implement admin dashboard for content management

## 📊 Database Models

### Competition
- Competition details, categories, eligibility requirements
- Relationship with teams

### Program
- Training programs with duration, prerequisites, learning outcomes
- Categories for different competition types

### Team
- Team information, members, achievements
- Reference to competitions

### Gallery
- Media items (images/videos) with categories
- Support for both image and video content

### Contact
- Contact form submissions
- Status tracking (new, contacted, in-progress, completed)

### Admin
- Admin user management
- Password hashing and JWT authentication

## 🧪 Testing the Application

### Manual Testing

1. **Health Check**: Test API is running
```bash
curl http://localhost:5000/api/health
```

2. **Contact Form**: Fill out the contact form on the frontend
3. **Data Display**: Check if competitions, programs, teams display correctly
4. **Responsive Design**: Test on different screen sizes

### API Testing

Use Postman, curl, or any HTTP client to test API endpoints:

```bash
# Get all competitions
curl http://localhost:5000/api/competitions

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"parentName":"John Doe","email":"john@example.com","phone":"+919922552891","areaOfInterest":"Robotics Competition Training"}'
```

## 🚢 Deployment

### Backend Deployment

1. **MongoDB**: Use MongoDB Atlas for production database
2. **Hosting**: Deploy to Heroku, Railway, or any Node.js hosting
3. **Environment Variables**: Set production values in hosting platform
4. **Build**: No build step required for Node.js backend

### Frontend Deployment

1. **Build**: Create production build
```bash
cd frontend
npm run build
```

2. **Hosting**: Deploy `build/` folder to Netlify, Vercel, or any static hosting
3. **Environment Variables**: Set `REACT_APP_API_URL` to production API URL

### Production Considerations

- Enable HTTPS
- Configure CORS for production domain
- Implement rate limiting
- Add authentication middleware
- Use environment variables for sensitive data
- Enable MongoDB authentication
- Implement logging and monitoring
- Set up regular backups

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**:
- Ensure MongoDB is running locally or connection string is correct
- Check MongoDB Atlas credentials if using cloud database

**Port Already in Use**:
- Change PORT in `.env` file
- Kill process using the port

### Frontend Issues

**API Connection Refused**:
- Ensure backend is running on correct port
- Check `REACT_APP_API_URL` in frontend `.env`
- Verify CORS configuration

**Components Not Rendering**:
- Check browser console for errors
- Ensure all dependencies are installed
- Verify API responses match expected format

## 📝 Development Notes

- The application maintains the original design and styling
- All components include fallback static data for graceful degradation
- Soft deletes are used instead of permanent deletion
- Timestamps are automatically managed
- Order field allows custom display ordering
- Current setup is development-ready with open endpoints

## 🤝 Contributing

This is a converted project from static HTML to MERN stack. For improvements:

1. Add authentication middleware for admin endpoints
2. Implement admin dashboard for content management
3. Add file upload functionality for gallery
4. Implement pagination for large datasets
5. Add search and filtering capabilities
6. Implement email notifications
7. Add analytics and tracking

## 📄 License

This project is part of Global Robotics Academy. All rights reserved.

## 📞 Support

For questions or issues:
- Email: gra.stemsage@gmail.com
- Phone: +91 9922552891

---

**Converted from static HTML to MERN stack application with complete backend API and frontend integration.**