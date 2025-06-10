# íº€ SecureDeploy - Complete DevSecOps Project

A full-stack application demonstrating modern DevSecOps practices with automated CI/CD pipeline.

## í¿—ï¸ Architecture

```
Frontend (React) â†â†’ Backend (Node.js) â†â†’ Database
      â†“                    â†“                â†“
   Docker Container   Docker Container   Docker Container
      â†“                    â†“                â†“
           Kubernetes Cluster (Cloud)
                     â†“
            CI/CD Pipeline (GitHub Actions)
```

## âœ¨ Features

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Security**: DevSecOps best practices
- **Monitoring**: Health checks and logging

## íº€ Quick Start

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

## í·ª Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## í³Š API Endpoints

- `GET /api/health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## í¾¯ DevSecOps Pipeline

1. **Code Commit** â†’ GitHub
2. **Automated Testing** â†’ GitHub Actions
3. **Security Scanning** â†’ SAST/DAST
4. **Container Building** â†’ Docker
5. **Deployment** â†’ Kubernetes
6. **Monitoring** â†’ Real-time alerts

## í»¡ï¸ Security Features

- Container security scanning
- Dependency vulnerability checks
- HTTPS enforcement
- Input validation
- Authentication & authorization

---

**Built with â¤ï¸ for learning DevSecOps practices**
