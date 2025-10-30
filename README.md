# 🚗 Dealerships Review Portal - India

A comprehensive web platform for browsing car dealerships and managing customer reviews across India.

## 🌟 Features

- **Browse Dealerships**: View dealerships by state with detailed information across India
- **User Authentication**: Secure login/register system
- **Review System**: Read and write dealership reviews
- **Sentiment Analysis**: AI-powered review sentiment detection
- **Responsive Design**: Mobile-friendly interface
- **State-wise Filtering**: Filter dealerships by Indian states

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Django (Python)
- **API**: Node.js/Express
- **Database**: MongoDB + SQLite
- **Containerization**: Docker
- **Cloud**: IBM Cloud Code Engine

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 14+
- Docker
- Git

### Installation

1. **Clone Repository**

```bash
git clone https://github.com/sakshisonawane12/Cousera_IBM_Full-Stack-Application-Development-Capstone-Project.git
cd dealerships-review-portal-india
```

2. **Start Django Backend**

```bash
cd server
py manage.py runserver
```

3. **Start MongoDB Service** (New Terminal)

```bash
cd server/database
docker-compose up
```

4. **Start React Frontend** (New Terminal)

```bash
cd server/frontend
npm install
npm start
```

### Access Points

- **Frontend**: http://localhost:3000
- **Django Admin**: http://localhost:8000/admin
- **API**: http://localhost:3030

## 📁 Project Structure

```
├── server/
│   ├── djangoapp/          # Django backend
│   ├── frontend/           # React frontend
│   ├── database/           # MongoDB setup
│   └── requirements.txt    # Python dependencies
├── README.md
└── .gitignore
```

## 🇮🇳 Indian Market Focus

This application is specifically designed for the Indian automotive market, featuring:

- Indian state-wise dealership filtering
- Local currency support (₹)
- Regional language support potential
- Indian automotive brands integration

- Tata Motors
- Mahindra
- Honda
- Toyota
