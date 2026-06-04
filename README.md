# Smart Trash Bin Frontend

React frontend application for Smart Trash Bin Monitoring System.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm start
```

The app will run at `http://localhost:3000`

## Build

```bash
# Create production build
npm run build
```

## Environment Variables

Create a `.env.local` file in the root directory (use `.env.example` as template):

```env
REACT_APP_API_BASE_URL=https://trushbin.my.id/api
```

## Deployment to Vercel

### Prerequisites
- Vercel account (free at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Select your Git provider
   - Select this repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `REACT_APP_API_BASE_URL` = `https://trushbin.my.id/api`
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at the provided URL

### Automatic Deployments
- Every push to `main` branch will trigger automatic deployment
- Pull request previews are automatically generated

## Project Structure

```
src/
├── api.js              # API service configuration
├── App.js              # Main app component
├── index.js            # Entry point
├── components/
│   ├── Card.js
│   └── Table.js
└── pages/
    ├── Login.js
    ├── SignUp.js
    └── Dashboard.js
```

## Features

- User authentication (Login/Signup)
- Dashboard for monitoring
- Trash bin management
- Real-time updates via Socket.io

## Technologies

- React 18.2.0
- React Router 7.14.0
- Axios for API calls
- Socket.io client for real-time communication

## License

Private Project
