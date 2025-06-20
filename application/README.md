# νΊ SecureDeploy - Complete DevSecOps Project

A full-stack application demonstrating modern DevSecOps practices with automated CI/CD pipeline.

## νΏοΈ Architecture

```
Frontend (React) ββ Backend (Node.js) ββ Database
      β                    β                β
   Docker Container   Docker Container   Docker Container
      β                    β                β
           Kubernetes Cluster (Cloud)
                     β
            CI/CD Pipeline (GitHub Actions)
```

## β¨ Features

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Security**: DevSecOps best practices
- **Monitoring**: Health checks and logging

## νΊ Quick Start

### Local Development
```bash
# Start backend
cd backend && npm start

# Start frontend
cd frontend && npm start
```

### Docker Deployment
```bash
# Build and run containers
docker-compose up -d

# Check status
docker-compose ps
```

## ν·ͺ Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## ν³ API Endpoints

- `GET /api/health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## νΎ― DevSecOps Pipeline

1. **Code Commit** β GitHub
2. **Automated Testing** β GitHub Actions
3. **Security Scanning** β SAST/DAST
4. **Container Building** β Docker
5. **Deployment** β Kubernetes
6. **Monitoring** β Real-time alerts

## ν»‘οΈ Security Features

- Container security scanning
- Dependency vulnerability checks
- HTTPS enforcement
- Input validation
- Authentication & authorization

---

**Built with β€οΈ for learning DevSecOps practices**
