SENTINEX — Privacy-First Emotional Intelligence

SENTINEX is an enterprise-grade mental health and deep-analytics AI platform. It detects emotional volatility, forecasts burnout trajectories, and ensures privacy-first aggregation to keep individual user data entirely anonymous. This repository contains the Frontend React Architecture, the Node.js API Service, and the Python ML Microservice.

🚀 Quick Start & First-Time Setup

This repository is organized into three distinct applications. To run SENTINEX locally, you must have all three environments correctly configured.

Prerequisites

Before you begin, ensure you have the following installed on your machine:

Node.js (v18 or higher recommended)
Python (v3.9 or higher for the ML microservice)
MongoDB (Atlas Cloud Account or Local Server)
Git
Phase 1: The Machine Learning Microservice (Python)

The ML engine powers the NLP sentiment analysis and Risk Engine processing.

Navigate to the ML Service directory:
cd ml-service
Create a virtual environment:
python -m venv venv
Activate the virtual environment:
Windows: venv\Scripts\activate
Mac/Linux: source venv/bin/activate
Install Python dependencies:
pip install -r requirements.txt
Start the ML Microservice (FastAPI):
uvicorn main:app --reload --port 8000
The ML service expects to run on port 8000 by default.
Phase 2: The Core API Server (Node.js/Express)

The core backend handles user authentication, database aggregation, and routing encrypted ML payloads securely.

Open a new terminal and navigate to the Server directory:
cd server
Install Node dependencies:
npm install
Configure Environment Variables: Create a .env file in the root project directory (Sentinex/.env - not inside the server folder) and define your secrets:
# .env (in project root)
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/sentinex?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_jwt_secret_key
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
Start the Node Backend:
npm run dev
The server attempts to run on port 5000.
Phase 3: The Dashboard Frontend (React/Vite)

The client frontend is built with React, Vite, Framer Motion, and Tailwind CSS.

Open a third terminal and stay in the root project directory.
Install Frontend dependencies:
npm install
Start the Vite Development Server:
npm run dev
Access the application! Open your browser and navigate to http://localhost:5173 (or the port Vite outputs in your terminal).
📦 Project Architecture

Sentinex/
├── ml-service/   # Python FastAPI NLP & Risk Modeling Microservice
├── server/       # Node.js/Express/MongoDB Secure Backend API
├── src/          # React/Vite Frontend Application (Dashboards, UI)
│   ├── components/ # Reusable UI pieces & Heatmaps
│   ├── pages/      # Route-level dashboard views
│   └── lib/        # API Axios utilities connecting React -> Node
└── public/       # Static assets and Vector Logos
🔒 Security Practices

Zero-Knowledge Architecture: Ensure JWT_SECRET is kept highly secure in production environments.
Database Isolation: When deploying to production, ensure MongoDB network access is heavily restricted, specifically allowing only the Express server's IP address.
NEVER commit .env files to GitHub. Ensure they remain listed inside .gitignore.
Authored for enterprise handoff. For deployment guides, refer to Vercel/Render documentation depending on hosting needs.
