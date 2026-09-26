# SENTINEX — Full Project Documentation

## 1. Project Overview
**SENTINEX** is an enterprise-grade, privacy-first emotional intelligence and mental health analytics platform. It is designed to detect emotional volatility, forecast burnout trajectories, and provide actionable insights for both individuals and organizations while maintaining absolute user anonymity through zero-knowledge principles and data aggregation.

---

## 2. Technical Stack

### **Frontend (Dashboard & UI)**
- **Framework**: React 18 with TypeScript.
- **Build Tool**: Vite.
- **Styling**: Tailwind CSS for responsive, modern UI.
- **Animations**: Framer Motion for smooth transitions and micro-interactions.
- **Icons**: Lucide React.
- **Components**: Radix UI / Shadcn UI primitives.
- **Charts**: Recharts (for heatmaps, volatility graphs, and trends).

### **Backend (API Service)**
- **Runtime**: Node.js with TypeScript.
- **Framework**: Express.js.
- **Database**: MongoDB (Mongoose ORM).
- **Authentication**: Supabase Auth (integrated via environment variables) & JWT (JSON Web Tokens).
- **Security**: AES-256-CBC encryption for sensitive text reflections.

### **ML Microservice (Intelligence Engine)**
- **Language**: Python 3.9+.
- **Framework**: FastAPI.
- **NLP Models**: 
    - **Sentiment Analysis**: HuggingFace Transformers (`distilbert-base-uncased-finetuned-sst-2-english`).
    - **Emotion Classification**: Zero-shot classification (`typeform/distilbert-base-uncased-mnli`).
- **Time-Series Forecasting**: Meta Prophet.
- **Data Processing**: Pandas & NumPy.

---

## 3. Core Features

### **A. Individual Wellness Tracking**
- **Mood Logging**: Intuitive interface to log mood types (Happy, Stressed, etc.) and intensity (1–10).
- **Text Reflections**: Optional private journal entries that feed into the AI engine.
- **Personal Analytics**: Individual stability scores, volatility metrics, and health trends.
- **Support Recommendations**: AI-driven suggestions based on detected emotional states.

### **B. Predictive Intelligence**
- **7-Day Emotional Forecast**: Predicts future mood scores using historical patterns.
- **Burnout Probability**: Calculates the likelihood of burnout based on sustained high stress and volatility.
- **Stress Indexing**: Real-time calculation of stress levels (Low, Medium, High).

### **C. Enterprise & Institutional Dashboards**
- **Anonymous Aggregation**: Organizations see trends (e.g., "Engineering Dept stress is up 20%") without ever seeing individual names or logs.
- **Role-Based Access**: Specialized dashboards for:
    - **University**: Campus-wide wellness tracking.
    - **Corporate**: Employee burnout prevention.
    - **Healthcare**: Patient emotional monitoring.
    - **Government**: Regional wellness policy insights.
- **Heatmaps**: Visual representation of "hotspots" where emotional risk is peaking.

---

## 4. How the ML Models Work

### **Sentiment & Emotion Analysis (NLP)**
1. **Input**: The user provides a text reflection (e.g., "I've been feeling overwhelmed with my workload lately").
2. **Processing**: The Node.js backend decrypts the text in memory and sends it to the FastAPI ML service.
3. **Model 1 (Sentiment)**: DistilBERT analyzes the text to determine if it's Positive, Negative, or Neutral.
4. **Model 2 (Emotions)**: A zero-shot classifier checks the text against labels like *Anxiety, Anger, Sadness, Optimism, and Motivation*.
5. **Output**: Returns a polarity score and confidence levels for specific emotions.

### **Time-Series Forecasting (Prophet)**
1. **Input**: Historical mood intensity scores for a specific user.
2. **Processing**: The Prophet model fits the data, accounting for weekly seasonality (e.g., Monday blues or weekend recovery).
3. **Output**: Predicts the next 7 days of "y-hat" values with uncertainty intervals (confidence scores).

### **The Risk Engine**
- **Volatility**: Calculated using the standard deviation of recent mood scores. High swings (e.g., jumping from 2 to 9 repeatedly) trigger "High Volatility" alerts.
- **Trend Analysis**: Uses linear regression slopes. A declining slope (consistently lowering mood scores) increases the Burnout Probability score.

---

## 5. Security & Privacy Architecture
SENTINEX follows a **"Privacy-by-Design"** philosophy:
- **AES-256 Encryption**: User notes are encrypted at the API layer *before* being stored in MongoDB. The ML service only sees the raw text in temporary memory during analysis.
- **Zero-Knowledge Aggregation**: Organizational admins cannot "drill down" to see who made a specific log.
- **Data Minimization**: Raw text is discarded after NLP processing whenever possible; only the resulting sentiment/emotion metadata is stored alongside the encrypted text.

---

## 6. System Architecture (Flow)
1. **Client**: User interacts with the React Frontend.
2. **API**: Node.js Server validates the request, handles authentication, and encrypts sensitive fields.
3. **ML**: Python Microservice performs deep analysis (NLP/Forecasting).
4. **DB**: MongoDB stores relational data and encrypted blobs.
5. **Insights**: Dashboards pull data to show real-time visualizations.
