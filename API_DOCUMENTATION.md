# Global Robotics Academy - MERN Stack API Documentation

## Overview
This is a comprehensive API documentation for the Global Robotics Academy MERN stack application. The API provides endpoints for managing competitions, programs, teams, gallery content, contact forms, and admin authentication.

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: (Configure in backend `.env` file)

## Authentication
Most endpoints are currently public for development. For production, implement JWT authentication middleware for admin-only endpoints.

---

## API Endpoints

### 1. Health Check
**GET** `/api/health`

Check if the API server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Global Robotics Academy API is running"
}
```

---

### 2. Competitions API

#### Get All Competitions
**GET** `/api/competitions`

Retrieve all active competitions.

**Response:**
```json
[
  {
    "_id": "unique_id",
    "name": "Browser Test Competition",
    "description": "Browser test",
    "category": "Robotics",
    "eligibility": "Age 10-18",
    "ageGroups": ["Junior", "Senior"],
    "registrationRequirements": "School registration required",
    "competitionDetails": "Annual competition held in Mumbai",
    "order": 1,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Single Competition
**GET** `/api/competitions/:id`

Retrieve a specific competition by ID.

**Response:**
```json
{
  "_id": "unique_id",
  "name": "Browser Test Competition",
  "description": "Browser test",
  "category": "Robotics",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### Create Competition (Admin Only)
**POST** `/api/competitions`

Create a new competition.

**Request Body:**
```json
{
  "name": "New Competition",
  "description": "Competition description",
  "category": "Robotics",
  "eligibility": "Age 10-18",
  "ageGroups": ["Junior", "Senior"],
  "registrationRequirements": "Requirements text",
  "competitionDetails": "Detailed information",
  "order": 1
}
```

**Response:**
```json
{
  "_id": "new_unique_id",
  "name": "New Competition",
  "description": "Competition description",
  "category": "Robotics",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### Update Competition (Admin Only)
**PUT** `/api/competitions/:id`

Update an existing competition.

**Request Body:** Same as create competition

**Response:** Updated competition object

#### Delete Competition (Admin Only)
**DELETE** `/api/competitions/:id`

Soft delete a competition (sets `isActive` to false).

**Response:**
```json
{
  "message": "Competition deleted successfully"
}
```

---

### 3. Programs API

#### Get All Programs
**GET** `/api/programs`

Retrieve all active programs.

**Response:**
```json
[
  {
    "_id": "unique_id",
    "name": "Drone Competition Preparation",
    "description": "Structured preparation from foundations to competition readiness.",
    "category": "Drone Competition",
    "duration": "12 weeks",
    "prerequisites": ["Basic electronics knowledge"],
    "learningOutcomes": ["Drone piloting", "Programming"],
    "order": 1,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Single Program
**GET** `/api/programs/:id`

Retrieve a specific program by ID.

#### Create Program (Admin Only)
**POST** `/api/programs`

Create a new program.

**Request Body:**
```json
{
  "name": "New Program",
  "description": "Program description",
  "category": "Robotics Competition",
  "duration": "8 weeks",
  "prerequisites": ["Basic programming"],
  "learningOutcomes": ["Robot building", "Programming"],
  "order": 1
}
```

#### Update Program (Admin Only)
**PUT** `/api/programs/:id`

Update an existing program.

#### Delete Program (Admin Only)
**DELETE** `/api/programs/:id`

Soft delete a program.

---

### 4. Teams API

#### Get All Teams
**GET** `/api/teams`

Retrieve all active teams with populated competition data.

**Response:**
```json
[
  {
    "_id": "unique_id",
    "name": "Team VhyuAstra Jr.",
    "description": "Student-led robotics team within the Global Robotics Academy ecosystem.",
    "category": "Junior",
    "achievements": ["Regional Winner 2023"],
    "members": [
      {
        "name": "John Doe",
        "role": "Team Lead"
      }
    ],
    "competitions": [
      {
        "_id": "competition_id",
        "name": "School Robotics Championships"
      }
    ],
    "order": 1,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Single Team
**GET** `/api/teams/:id`

Retrieve a specific team by ID with populated competitions.

#### Create Team (Admin Only)
**POST** `/api/teams`

Create a new team.

**Request Body:**
```json
{
  "name": "New Team",
  "description": "Team description",
  "category": "Senior",
  "achievements": ["Achievement 1"],
  "members": [
    {
      "name": "Member Name",
      "role": "Role"
    }
  ],
  "competitions": ["competition_id_1", "competition_id_2"],
  "order": 1
}
```

#### Update Team (Admin Only)
**PUT** `/api/teams/:id`

Update an existing team.

#### Delete Team (Admin Only)
**DELETE** `/api/teams/:id`

Soft delete a team.

---

### 5. Gallery API

#### Get All Gallery Items
**GET** `/api/gallery`

Retrieve all active gallery items.

**Response:**
```json
[
  {
    "_id": "unique_id",
    "title": "Robotics Arena",
    "description": "Admin-managed gallery content will appear here.",
    "category": "Training",
    "imageUrl": "https://example.com/image.jpg",
    "videoUrl": "https://example.com/video.mp4",
    "type": "image",
    "order": 1,
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Single Gallery Item
**GET** `/api/gallery/:id`

Retrieve a specific gallery item by ID.

#### Create Gallery Item (Admin Only)
**POST** `/api/gallery`

Create a new gallery item.

**Request Body:**
```json
{
  "title": "Gallery Item Title",
  "description": "Description",
  "category": "Training",
  "imageUrl": "https://example.com/image.jpg",
  "videoUrl": "https://example.com/video.mp4",
  "type": "image",
  "order": 1
}
```

#### Update Gallery Item (Admin Only)
**PUT** `/api/gallery/:id`

Update an existing gallery item.

#### Delete Gallery Item (Admin Only)
**DELETE** `/api/gallery/:id`

Soft delete a gallery item.

---

### 6. Contact API

#### Get All Contact Submissions (Admin Only)
**GET** `/api/contact`

Retrieve all contact form submissions (admin only).

**Response:**
```json
[
  {
    "_id": "unique_id",
    "parentName": "John Doe",
    "schoolName": "ABC School",
    "city": "Mumbai",
    "phone": "+919922552891",
    "email": "john@example.com",
    "areaOfInterest": "Robotics Competition Training",
    "message": "I'm interested in robotics training.",
    "status": "new",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Single Contact Submission (Admin Only)
**GET** `/api/contact/:id`

Retrieve a specific contact submission by ID.

#### Create Contact Submission (Public)
**POST** `/api/contact`

Submit a contact form (public endpoint).

**Request Body:**
```json
{
  "parentName": "John Doe",
  "schoolName": "ABC School",
  "city": "Mumbai",
  "phone": "+919922552891",
  "email": "john@example.com",
  "areaOfInterest": "Robotics Competition Training",
  "message": "I'm interested in robotics training."
}
```

**Response:**
```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "_id": "new_unique_id",
    "parentName": "John Doe",
    "status": "new",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Update Contact Status (Admin Only)
**PUT** `/api/contact/:id`

Update contact submission status.

**Request Body:**
```json
{
  "status": "contacted"
}
```

#### Delete Contact Submission (Admin Only)
**DELETE** `/api/contact/:id`

Permanently delete a contact submission.

---

### 7. Admin API

#### Admin Login
**POST** `/api/admin/login`

Authenticate admin user.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "admin": {
    "id": "admin_id",
    "username": "admin",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

#### Create Admin (Super-Admin Only)
**POST** `/api/admin`

Create a new admin user.

**Request Body:**
```json
{
  "username": "newadmin",
  "email": "newadmin@example.com",
  "password": "password123",
  "role": "admin"
}
```

#### Get All Admins (Super-Admin Only)
**GET** `/api/admin`

Retrieve all admin users (without passwords).

---

## Frontend Integration Guide

### Setting Up Environment Variables

**Backend (.env):**
```
MONGODB_URI=mongodb://localhost:27017/robotics-academy
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

### API Service Usage

The frontend includes a centralized API service in `frontend/src/services/api.js`:

```javascript
import { competitionsAPI, programsAPI, teamsAPI, galleryAPI, contactAPI } from '../services/api';

// Get all competitions
const fetchCompetitions = async () => {
  try {
    const response = await competitionsAPI.getAll();
    setCompetitions(response.data);
  } catch (error) {
    console.error('Error fetching competitions:', error);
  }
};

// Create contact submission
const submitContactForm = async (formData) => {
  try {
    const response = await contactAPI.create(formData);
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

### React Component Integration

Components are already integrated with API calls:

1. **Pathway Component** - Fetches programs from API
2. **Competitions Component** - Fetches competitions from API
3. **Teams Component** - Fetches teams from API
4. **Gallery Component** - Fetches gallery items from API
5. **Contact Component** - Submits contact forms to API

Each component includes fallback static data if the API is unavailable.

---

## MongoDB Schema Reference

### Competition Schema
```javascript
{
  name: String (required),
  description: String (required),
  category: Enum['Robotics', 'AI', 'STEM', 'Coding', 'Drone', 'Innovation'] (required),
  eligibility: String,
  ageGroups: [String],
  registrationRequirements: String,
  competitionDetails: String,
  order: Number (default: 0),
  isActive: Boolean (default: true),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Program Schema
```javascript
{
  name: String (required),
  description: String (required),
  category: Enum['Drone Competition', 'Innovation Challenge', 'Coding Competition', 'STEM Competition', 'AI Competition', 'Robotics Competition'] (required),
  duration: String,
  prerequisites: [String],
  learningOutcomes: [String],
  order: Number (default: 0),
  isActive: Boolean (default: true),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Team Schema
```javascript
{
  name: String (required),
  description: String (required),
  category: Enum['Junior', 'Senior', 'College', 'Professional'] (required),
  achievements: [String],
  members: [{ name: String, role: String }],
  competitions: [ObjectId(ref: 'Competition')],
  order: Number (default: 0),
  isActive: Boolean (default: true),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Gallery Schema
```javascript
{
  title: String (required),
  description: String (required),
  category: Enum['Training', 'Team Activities', 'Robot Testing', 'Competition', 'Other'] (required),
  imageUrl: String,
  videoUrl: String,
  type: Enum['image', 'video'] (required),
  order: Number (default: 0),
  isActive: Boolean (default: true),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Contact Schema
```javascript
{
  parentName: String (required),
  schoolName: String,
  city: String,
  phone: String (required),
  email: String (required),
  areaOfInterest: Enum['Robotics Competition Training', 'AI Competition Preparation', 'STEM Competition Preparation', 'Coding Competition Preparation', 'Drone Competition Preparation', 'School Partnership'] (required),
  message: String,
  status: Enum['new', 'contacted', 'in-progress', 'completed'] (default: 'new'),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### Admin Schema
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: Enum['admin', 'super-admin'] (default: 'admin'),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

---

## Installation & Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/robotics-academy
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

5. Start MongoDB (if not running):
```bash
# Using MongoDB locally
mongod

# Or using MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/robotics-academy
```

6. Start the server:
```bash
npm run dev
# or
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the React development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

---

## Error Handling

All API endpoints return consistent error responses:

**Error Response Format:**
```json
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

**HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## Security Considerations

For production deployment:

1. **Authentication**: Implement JWT middleware for admin-only endpoints
2. **CORS**: Configure CORS to allow only your frontend domain
3. **Validation**: Add request validation middleware
4. **Rate Limiting**: Implement rate limiting to prevent abuse
5. **HTTPS**: Use HTTPS in production
6. **Environment Variables**: Never commit `.env` files
7. **Password Security**: Use strong JWT secrets and bcrypt for passwords
8. **Input Sanitization**: Sanitize all user inputs
9. **MongoDB Security**: Enable MongoDB authentication and use connection strings with credentials

---

## Development Notes

- The API currently has all endpoints open for development ease
- Frontend components include fallback static data if API fails
- All DELETE operations are soft deletes (sets `isActive: false`)
- Data is ordered by the `order` field for display consistency
- Timestamps are automatically managed by the backend

---

## Future Enhancements

- Add file upload functionality for gallery images/videos
- Implement JWT authentication middleware
- Add admin dashboard for content management
- Implement pagination for large datasets
- Add search and filtering capabilities
- Implement email notifications for contact forms
- Add analytics and tracking
- Implement caching for better performance
- Add internationalization (i18n) support