# Le Crochet

A comprehensive platform for creating, visualizing, and selling crochet patterns through interactive 2D diagrams and 3D models.

## 🧶 Overview

Le Crochet empowers crochet enthusiasts to input their patterns using standard notation, visualize them through detailed diagrams and interactive 3D models, and share or sell their creations in our marketplace.

## ✨ Core Features

### Pattern Input & Creation
- **Standard Notation Support**: Input patterns using traditional crochet abbreviations (sc, dc, ch, etc.)
- **Visual Pattern Builder**: Drag-and-drop interface for creating patterns
- **Pattern Validation**: Automatic checking for common pattern errors
- **Import/Export**: Support for common pattern file formats (.pdf, .txt)

### Visualization Tools
- **Interactive 3D Viewer**: Real-time 3D rendering of your crochet projects
- **2D Diagram Generator**: Clear, printable stitch diagrams with international symbols
- **Multiple View Modes**: Wireframe, textured, and realistic material rendering
- **Progress Tracking**: Visual indicators for completed sections

### Marketplace
- **Pattern Sales**: Sell your patterns with 15% platform commission
- **Secure Payments**: Integrated payment processing
- **Creator Profiles**: Showcase your pattern portfolio
- **Reviews & Ratings**: Community feedback system
- **Search & Discovery**: Find patterns by category, difficulty, or technique

### Customization Options
- **Color Palette Editor**: Choose from thousands of yarn colors
- **Yarn Database Integration**: Real yarn brands, weights, and yardage calculations
- **Size Scaling**: Adjust patterns for different project sizes
- **Texture Mapping**: Apply realistic yarn textures to 3D models

## 🏗️ Technical Architecture

### Frontend (Next.js 14+)
```
├── components/
│   ├── PatternEditor/
│   ├── 3DViewer/
│   ├── DiagramGenerator/
│   ├── Marketplace/
│   └── ColorPalette/
├── pages/
│   ├── create/
│   ├── gallery/
│   ├── marketplace/
│   ├── profile/
│   └── pattern/[id]/
├── hooks/
├── utils/
└── styles/
```

**Key Technologies:**
- **Three.js/React Three Fiber**: 3D visualization and interaction
- **Canvas API**: 2D diagram generation
- **WebGL**: Hardware-accelerated rendering
- **PWA**: Offline pattern access
- **Stripe**: Payment processing

### Backend (Node.js/TypeScript)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: AWS S3 for pattern files and 3D assets
- **Authentication**: JWT with refresh tokens
- **Payment Processing**: Stripe integration

### 3D Asset Pipeline
- **Custom Stitch Library**: Pre-built 3D models for common stitches
- **Asset Optimization**: Automatic LOD generation and compression
- **Material System**: PBR materials for realistic yarn appearance
- **Animation Support**: Stitch-by-stitch construction animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Stripe account (for payments)
- AWS account (for file storage)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/le-crochet.git
cd le-crochet

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run db:migrate

# Start development servers
npm run dev        # Frontend (port 3000)
npm run dev:api    # Backend (port 8000)
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lecrochet_db"

# File Storage
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_BUCKET_NAME="lecrochet-patterns"
AWS_REGION="us-east-1"

# Authentication
JWT_SECRET="your_jwt_secret"
JWT_REFRESH_SECRET="your_refresh_secret"

# Payment Processing
STRIPE_PUBLIC_KEY="your_stripe_public_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_webhook_secret"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_app_password"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
API_URL="http://localhost:8000"
```

## 💡 Key Features

### Pattern Input Methods
- **Text Input**: Standard crochet notation with auto-completion
- **Visual Builder**: Drag-and-drop pattern construction
- **Template Library**: Start from common pattern bases
- **Import Tools**: Upload existing pattern files

### Visualization Engine
- **Real-time Rendering**: See changes as you edit
- **Print-Ready Diagrams**: High-resolution exports for printing
- **Interactive 3D**: Rotate, zoom, and inspect your patterns
- **Material Preview**: See how different yarns will look

### Marketplace Features
- **Creator Dashboard**: Track sales, manage patterns, view analytics
- **Pattern Browser**: Advanced filtering and search
- **Secure Transactions**: Escrow system for digital pattern sales
- **Community Features**: Favorites, collections, and following

## 💰 Revenue Model

### Platform Commission
- **15% commission** on all pattern sales
- Creators keep 85% of revenue
- Transparent fee structure with no hidden costs

### Premium Features (Optional)
- **Basic Account**: Free pattern creation and basic visualization
- **Creator Pro ($4.99/month)**:
  - Advanced 3D rendering options
  - Bulk pattern management
  - Enhanced analytics
  - Priority marketplace placement

### Additional Revenue Streams
- **Featured Listings**: Paid promotion in marketplace
- **Yarn Partnership**: Affiliate commissions on yarn sales
- **Custom Branding**: White-label solutions for yarn stores

## 🗂️ Project Structure

```
le-crochet/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── components/
│   │   │   ├── PatternEditor/
│   │   │   ├── 3DViewer/
│   │   │   ├── Marketplace/
│   │   │   └── Common/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   ├── public/
│   └── package.json
├── backend/                 # Node.js/TypeScript API
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
├── assets/                  # 3D models and textures
│   ├── stitches/
│   ├── materials/
│   └── templates/
├── docs/                    # Documentation
└── docker/                  # Container configurations
```

## 🧪 Development Roadmap

### Phase 1: Core Platform (Months 1-2)
- Pattern input system
- Basic 2D diagram generation
- User authentication
- File storage setup

### Phase 2: 3D Visualization (Months 3-4)
- 3D rendering engine
- Stitch library integration
- Color and material system
- Export functionality

### Phase 3: Marketplace (Months 5-6)
- Payment processing
- Pattern listing system
- Search and discovery
- Creator dashboard

### Phase 4: Enhancement (Months 7-8)
- Mobile optimization
- Advanced pattern features
- Community tools
- Performance optimization

## 🛠️ API Endpoints

### Pattern Management
```
GET    /api/patterns              # List patterns
POST   /api/patterns              # Create pattern
GET    /api/patterns/:id          # Get pattern details
PUT    /api/patterns/:id          # Update pattern
DELETE /api/patterns/:id          # Delete pattern
```

### Marketplace
```
GET    /api/marketplace           # Browse marketplace
POST   /api/marketplace/:id/purchase  # Purchase pattern
GET    /api/sales                 # Creator sales data
POST   /api/patterns/:id/publish  # Publish to marketplace
```

### User Management
```
POST   /api/auth/register         # User registration
POST   /api/auth/login            # User login
GET    /api/users/profile         # Get user profile
PUT    /api/users/profile         # Update profile
```

## 🤝 Contributing

We welcome contributions from the crochet and developer communities!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests for new features
- Ensure 3D assets are optimized for web delivery
- Update documentation for API changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Support

- **Documentation**: [docs.lecrochet.com](https://docs.lecrochet.com)
- **Community Discord**: [Join our server](https://discord.gg/lecrochet)
- **Email Support**: support@lecrochet.com
- **Bug Reports**: Use GitHub Issues

## 🏆 Acknowledgments

- Crochet community for pattern validation and feedback
- Three.js team for excellent 3D capabilities
- Stripe for secure payment processing
- Open source yarn color databases

---

*Bring your crochet patterns to life* 🧶✨