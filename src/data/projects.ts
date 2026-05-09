import { BadgeColor } from '@/components/ui/Badge'

interface ProjectBadge {
  label: string
  color: BadgeColor
}

export interface Project {
  title: string
  period: string
  description: string
  highlights: string[]
  tags: ProjectBadge[]
  accentColor: string
  githubUrl?: string
  websiteUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Data Analyst Agent — Multi-Provider AI Data Analysis Tool',
    period: 'May 2026',
    description:
      'Conversational AI agent that lets users query CSV, Excel, JSON, and SQL databases in plain English. The agent writes and executes real Python or SQL, reads its own tracebacks, self-corrects, and renders interactive charts — no coding required.',
    highlights: [
      'Built a bounded ReAct (Reason + Act) loop where the model writes code, executes it, reads the traceback on failure, and retries — every answer is backed by real execution, never a guess.',
      'Designed a provider abstraction layer (BaseLLMClient ABC) enabling seamless switching between Anthropic Claude and OpenAI GPT; extensible to Gemini, Mistral, Groq, and Ollama with ~50 lines per new provider.',
      'Implemented prompt caching (80–90% input token cost reduction), an AST import sandbox blocking 25+ dangerous modules before exec(), and 129 automated tests with 80–100% coverage on all non-UI modules.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'ReAct Agent', color: 'cyan' },
      { label: 'Claude API', color: 'cyan' },
      { label: 'OpenAI API', color: 'cyan' },
      { label: 'pandas', color: 'emerald' },
      { label: 'Plotly', color: 'emerald' },
      { label: 'SQLAlchemy', color: 'blue' },
    ],
    accentColor: '#10B981',
    githubUrl: 'https://github.com/MonkeyJeremy/data-analyst-agent',
  },
  {
    title: 'NoteFlow — AI-Powered Note-Taking App',
    period: '2025 – Present',
    description:
      'Local-first desktop application with real-time Claude API integration, enabling AI-assisted writing, summarization, and knowledge management directly inside a rich text editor.',
    highlights: [
      'Integrated Claude API to provide context-aware AI assistance (summarize, rewrite, expand) inline within the TipTap rich text editor.',
      'Implemented local-first data persistence using Dexie (IndexedDB wrapper) — all notes stored client-side with zero backend dependency.',
      'Packaged as a cross-platform desktop app via Electron; React + TypeScript frontend with Vite build pipeline.',
    ],
    tags: [
      { label: 'Claude API', color: 'cyan' },
      { label: 'LLM', color: 'cyan' },
      { label: 'React', color: 'violet' },
      { label: 'TypeScript', color: 'violet' },
      { label: 'Electron', color: 'blue' },
      { label: 'Dexie / IndexedDB', color: 'emerald' },
    ],
    accentColor: '#22D3EE',
    githubUrl: 'https://github.com/MonkeyJeremy',
  },
  {
    title: 'Detecting Fraud with Oversampling Techniques and Sparsity Constraints',
    period: 'Sept 2023 – Mar 2024',
    description:
      'Fraud detection system for Amazon, Yelp, and Reddit that captures robotic accounts, spam, and activities violating platform regulations.',
    highlights: [
      'Achieved 7%+ improvement in detection accuracy through GraphSMOTE, Sparsity SparseGAD, and GNN models.',
      'Discovered that account "neighbors" are key fraud indicators — suspicious accounts cluster together; validated with ROC-AUC.',
      'Utilized GraphSMOTE to generate synthetic nodes for the minority class; implemented single-layer GCN for cosine similarity computation.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'GraphSMOTE', color: 'blue' },
      { label: 'GCN', color: 'blue' },
      { label: 'Scikit-learn', color: 'violet' },
      { label: 'GNN', color: 'blue' },
    ],
    accentColor: '#8B5CF6',
    githubUrl: 'https://github.com/MonkeyJeremy',
  },
  {
    title: 'Amazon Product Reviews Analyzer',
    period: 'Jan 2023 – Mar 2023',
    description:
      'Supervised machine learning model predicting customer product interest using persona-based analysis and latent factor algorithms.',
    highlights: [
      'Identified key drivers of product ratings: purchase volume, rating tendencies, and product competitiveness.',
      'Extracted and transformed text data using CountVectorizer with Bag of Words (BOW) and TF-IDF methods to generate predictive features.',
      'Built end-to-end ML pipeline from raw review data to product interest predictions.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'TF-IDF', color: 'blue' },
      { label: 'CountVectorizer', color: 'blue' },
      { label: 'BOW', color: 'blue' },
      { label: 'Scikit-learn', color: 'violet' },
    ],
    accentColor: '#22D3EE',
    githubUrl: 'https://github.com/MonkeyJeremy',
  },
]
