# Architecture

## System Overview
- components
  - Video Chat Component(WEBRTC, FFMPEG)
- services  
- flow
- Add a diagram if possible.

## Tech Stack
- Frontend: React
- Backend: Node.js + Express + langchain + AI(OpenAI, GenAI)
- Database: PostgreSQL, Chroma vector database
- Cloud: Azure, AWS

## Key Decisions
- Using RAG with Azure AI Search for document retrieval
- Containerized via Docker
- CI/CD with GitHub Actions (see `.github/workflows`)

## Future Improvements
- Add caching layer
- Improve test coverage
- Github copilot (governance, centralization, team collaboration)