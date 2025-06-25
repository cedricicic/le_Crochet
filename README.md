# AI Crochet Pattern Generator

An intelligent crochet pattern generator that creates realistic, detailed patterns with 3D visualization, comprehensive instructions, and feasibility validation.

## Overview

This application combines AI-powered pattern generation with 3D visualization to create practical crochet patterns. The system validates project feasibility, provides detailed instructions, generates diagrams, and offers an interactive 3D preview of the finished product.

## Features

- **AI Pattern Generation**: Creates realistic crochet patterns with built-in constraints
- **Feasibility Analysis**: Validates whether requested projects are achievable
- **3D Visualization**: Interactive 3D preview using custom stitch OBJ files
- **Detailed Instructions**: Step-by-step written instructions with stitch counts
- **Pattern Diagrams**: Visual charts and symbols for pattern following
- **Custom Stitch Library**: Extensible collection of 3D stitch models

## Technology Stack

### Frontend
- **Next.js 14** with TypeScript
- **Three.js** for 3D rendering and visualization
- **React Three Fiber** for React integration
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Backend
- **Python FastAPI** (recommended for AI/ML operations)
- **TensorFlow/PyTorch** for custom model training
- **OpenAI API** for pattern generation (with custom constraints)
- **PostgreSQL** for pattern storage
- **Redis** for caching

### 3D Assets
- **Blender** for creating custom stitch OBJ files
- **Three.js loaders** for OBJ file handling

## AI Constraints & Quality Control

### Pattern Generation Constraints

1. **Stitch Compatibility**
   - Only use established crochet stitches
   - Ensure stitch combinations are physically possible
   - Validate hook size compatibility with yarn weight

2. **Structural Integrity**
   - Verify shaping mathematics (increases/decreases)
   - Ensure proper tension distribution
   - Check for structural weak points

3. **Yarn Requirements**
   - Calculate realistic yardage estimates
   - Consider yarn weight appropriateness
   - Factor in gauge variations

4. **Skill Level Assessment**
   - Accurately categorize difficulty (Beginner/Intermediate/Advanced)
   - Ensure technique progression is logical
   - Validate stitch count complexity

### Feasibility Validation Rules

```python
# Example constraint system
FEASIBILITY_RULES = {
    "max_stitches_per_round": 500,
    "min_gauge_ratio": 0.5,
    "max_gauge_ratio": 2.0,
    "supported_techniques": [
        "single_crochet", "double_crochet", "treble_crochet",
        "slip_stitch", "chain", "magic_ring", "increases", "decreases"
    ],
    "project_size_limits": {
        "small": {"max_width": 12, "max_height": 12},
        "medium": {"max_width": 36, "max_height": 36},
        "large": {"max_width": 72, "max_height": 72}
    }
}
```

## Custom AI Training Recommendations

### Option 1: Fine-tuned Language Model
- **Base Model**: GPT-4 or Claude with custom fine-tuning
- **Training Data**: 10,000+ validated crochet patterns
- **Benefits**: Better pattern structure understanding
- **Cost**: Medium to high

### Option 2: Specialized Pattern Model
- **Architecture**: Transformer-based sequence model
- **Training**: Custom dataset of pattern components
- **Benefits**: Domain-specific optimization
- **Cost**: High development time

### Option 3: Hybrid Approach (Recommended)
- **Primary**: GPT-4 with extensive prompt engineering
- **Secondary**: Custom validation model for feasibility
- **Benefits**: Faster implementation, high quality
- **Cost**: Lower initial investment

## Project Structure

```
crochet-pattern-generator/
├── frontend/                 # Next.js application
│   ├── components/
│   │   ├── PatternGenerator/
│   │   ├── ThreeDViewer/
│   │   ├── PatternDisplay/
│   │   └── ui/
│   ├── lib/
│   │   ├── three/           # 3D utilities
│   │   └── api/             # API clients
│   └── public/
│       └── models/          # OBJ stitch files
├── backend/                 # Python FastAPI
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── services/
│   │   │   ├── pattern_generator.py
│   │   │   ├── feasibility_validator.py
│   │   │   └── diagram_generator.py
│   │   └── utils/
│   ├── ml/                  # AI/ML components
│   └── tests/
├── assets/                  # 3D models and textures
│   ├── stitches/           # OBJ files for each stitch type
│   └── materials/          # Yarn textures
└── docs/                   # Documentation
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL
- Redis
- Blender (for custom stitch creation)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Environment Variables
```env
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key

# Backend (.env)
DATABASE_URL=postgresql://user:pass@localhost/crochet_db
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=your_openai_key
```

## API Endpoints

### Pattern Generation
```typescript
POST /api/patterns/generate
{
  "description": "A small amigurumi cat",
  "difficulty": "intermediate",
  "yarn_weight": "worsted",
  "hook_size": "5.0mm"
}
```

### Feasibility Check
```typescript
POST /api/patterns/validate
{
  "pattern_data": {...},
  "constraints": {...}
}
```

### 3D Model Generation
```typescript
POST /api/models/generate
{
  "pattern_id": "uuid",
  "stitch_types": ["sc", "dc", "inc", "dec"]
}
```

## 3D Stitch Library

### Creating Custom Stitch Models

1. **Blender Workflow**
   - Model individual stitches with proper topology
   - Ensure consistent scale and orientation
   - Export as OBJ with materials

2. **Naming Convention**
   ```
   sc_basic.obj          # Single crochet
   dc_basic.obj          # Double crochet
   inc_sc.obj            # Single crochet increase
   dec_sc.obj            # Single crochet decrease
   ```

3. **Integration**
   - Place OBJ files in `/public/models/stitches/`
   - Update stitch library configuration
   - Test in 3D viewer component

## Quality Assurance

### Pattern Validation Pipeline
1. **Syntax Check**: Verify pattern notation
2. **Math Validation**: Check stitch counts and shaping
3. **Feasibility Assessment**: Structural integrity analysis
4. **Expert Review**: Optional human validation for complex patterns

### Testing Strategy
- Unit tests for pattern generation logic
- Integration tests for API endpoints
- Visual regression tests for 3D rendering
- User acceptance testing with experienced crocheters

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
npm run export  # for static deployment
```

### Backend (Docker)
```dockerfile
FROM python:3.9-slim
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Contributing

### Adding New Stitch Types
1. Create 3D model in Blender
2. Add stitch definition to backend
3. Update frontend stitch library
4. Add validation rules
5. Create test patterns

### Improving AI Constraints
1. Analyze failed pattern generations
2. Update constraint rules
3. Retrain validation models
4. Update documentation

## Performance Considerations

- **3D Rendering**: Optimize OBJ files for web delivery
- **AI Response Time**: Implement caching for common patterns
- **Database**: Index pattern metadata for fast searches
- **CDN**: Serve 3D assets from edge locations

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please use the GitHub issue tracker.

## Roadmap

- [ ] Advanced colorwork pattern support
- [ ] Multi-language pattern instructions
- [ ] Community pattern sharing
- [ ] Mobile app development
- [ ] AR visualization features
- [ ] Yarn requirement calculator integration