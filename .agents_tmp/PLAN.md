# F H & L Technologies - Enterprise Web Application Plan

## 1. OBJECTIVE

Develop a high-profile, mobile-first corporate website for F H & L Technologies (Pvt) Ltd. featuring:
- AI-powered intelligent chatbot with human handoff
- WhatsApp integration via Go bridge
- Multi-language support (English, Sinhala, Tamil)
- 8 service categories aligned with AOA PRIMARY OBJECTS
- Best practices for React, Node.js, Python, and Supabase

---

## 2. CONTEXT SUMMARY

### Company Profile
- **Company**: F H & L Technologies (Pvt) Ltd.
- **Tagline**: "TECHNOLOGY WITH PURPOSE, SOLUTIONS WITH HEART"
- **Specialization**: AML/CFT/CPF compliance, banking systems, ERP solutions

### PRIMARY OBJECTS (AOA Section 02)
- (a) Software development with AI integration
- (b) System design, development, implementation consultancy
- (c) Regulatory transaction reporting audits (goAML)
- (d) Regulatory reporting standards consultancy
- (e) AML/CFT/CPF consultancy
- (f) Other legal business activities

### Deployment Targets
| Service | Platform | URL |
|---------|----------|-----|
| **Frontend** | **Vercel** | https://vercel.com/erangadesaram-3037s-projects |
| **Database** | **Supabase** | https://yruldksdjciohukzjwhd.supabase.co |
| **Backend API** | Render.com | TBD |
| **AI Engine** | Render.com | TBD |
| **WhatsApp Bridge** | Render.com | TBD |

### Design System
- **Primary Background**: Navy (#0d1b2a, #1b2838)
- **Accent Colors**: Gold (#d4a543), Teal (#3a9d9d), Orange (#e67e22)
- **Style**: Professional, corporate, modern, mobile-first

---

## 3. APPROACH OVERVIEW

### Architecture: Micro-Services (Separately Deployable)

```
┌─────────────────────────────────────────┐
│         FRONTEND (Next.js 15)           │
│         Vercel Deployment               │
└────────────────┬────────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────┐
│     BACKEND SERVICES (Separate)          │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐ │
│  │API Server│ │AI Engine│ │WhatsApp  │ │
│  │(Node.js)│ │(Python) │ │Bridge(Go)│ │
│  └────┬────┘ └────┬────┘ └────┬─────┘ │
└────────┼─────────┼───────────┼────────┘
         │         │           │
         └─────────┼───────────┘
                   ▼
         ┌─────────────────┐
         │    Supabase     │
         │  PostgreSQL     │
         └─────────────────┘
```

---

## 4. IMPLEMENTATION STEPS

### Phase 1: Project Setup
| Step | Task | Description |
|------|------|-------------|
| 1.1 | Create monorepo structure | frontend/, backend/, ai-engine/, supabase/ |
| 1.2 | Initialize Next.js 15 | TypeScript, Tailwind CSS, App Router |
| 1.3 | Configure Tailwind | Mobile-first breakpoints, design tokens |
| 1.4 | Set up Supabase | Database schema, Auth, RLS policies |

### Phase 2: Frontend (Mobile-First)
| Step | Task | Description |
|------|------|-------------|
| 2.1 | Landing Page | Hero, About, Navigation |
| 2.2 | Services Section | 8 categories grid with icons |
| 2.3 | Contact Section | Form, social links |
| 2.4 | Blog/Case Studies | MDX-based content |
| 2.5 | AI Chat Widget | Floating widget, glassmorphism |
| 2.6 | Multi-language | next-intl, EN/Sinhala/Tamil |

### Phase 3: Backend Services
| Step | Task | Description |
|------|------|-------------|
| 3.1 | Node.js API | Fastify, Zod validation, routes |
| 3.2 | Python AI Engine | FastAPI, LangChain, OpenAI |
| 3.3 | WhatsApp Integration | Go bridge WebSocket connection |
| 3.4 | Human Handoff | Agent dashboard, queue system |

### Phase 4: Performance & Security
| Step | Task | Description |
|------|------|-------------|
| 4.1 | Optimization | Code splitting, lazy loading, caching |
| 4.2 | Security | RLS, env vars, rate limiting |
| 4.3 | Testing | Unit, integration, E2E |
| 4.4 | Deployment | Vercel, Render.com setup |

---

## 5. TESTING AND VALIDATION

### Performance Targets
- Lighthouse Score: > 90
- Mobile-First: All breakpoints tested
- Core Web Vitals: Pass

### Functional Checklist
- [ ] Navigation responsive on mobile
- [ ] Chat widget works on all devices
- [ ] Language switching works
- [ ] Contact form validates
- [ ] API endpoints respond correctly

---

## 6. TECH STACK

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js 15 | SSR, SSG, App Router |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Mobile-first styling |
| Framer Motion | Animations |
| next-intl | i18n |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js + Fastify | REST API |
| Python + FastAPI | AI Engine |
| LangChain | AI Agents |
| Prisma | ORM |

### Database
| Technology | Purpose |
|------------|---------|
| Supabase | PostgreSQL, Auth, Realtime |

---

## 7. DEPLOYMENT CONFIGURATION

### Frontend (Vercel)
```
Project: erangadesaram-3037s-projects
Framework: Next.js
```

### Supabase
```
URL: https://yruldksdjciohukzjwhd.supabase.co
Project Ref: yruldksdjciohukzjwhd
```

---

## 8. FUTURE ENHANCEMENTS (Phase 2+)
- Advanced Analytics Dashboard
- Client Portal
- API Documentation Portal
- CRM Integration
- SMS Integration
