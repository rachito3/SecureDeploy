# � SecureDeploy - Complete DevSecOps Project

A full-stack application demonstrating modern DevSecOps practices with automated CI/CD pipeline.

## �️ Architecture

```
Frontend (React) ←→ Backend (Node.js) ←→ Database
      ↓                    ↓                ↓
   Docker Container   Docker Container   Docker Container
      ↓                    ↓                ↓
           Kubernetes Cluster (Cloud)
                     ↓
            CI/CD Pipeline (GitHub Actions)
```

## ✨ Features

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Security**: DevSecOps best practices
- **Monitoring**: Health checks and logging

## � Quick Start

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

## � Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## � API Endpoints

- `GET /api/health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## � DevSecOps Pipeline

1. **Code Commit** → GitHub
2. **Automated Testing** → GitHub Actions
3. **Security Scanning** → SAST/DAST
4. **Container Building** → Docker
5. **Deployment** → Kubernetes
6. **Monitoring** → Real-time alerts

## �️ Security Features

- Container security scanning
- Dependency vulnerability checks
- HTTPS enforcement
- Input validation
- Authentication & authorization

---

**Built with ❤️ for learning DevSecOps practices**
