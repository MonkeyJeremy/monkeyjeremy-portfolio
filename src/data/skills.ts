import { BadgeColor } from '@/components/ui/Badge'

export interface SkillCategory {
  category: string
  icon: string
  color: BadgeColor
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & LLM',
    icon: '🤖',
    color: 'cyan',
    skills: [
      'Claude API',
      'OpenAI API',
      'LLM Integration',
      'Agentic AI Workflows',
      'ReAct Agent / Tool Use',
      'Prompt Engineering',
      'Prompt Caching',
      'Claude Code',
      'ChatGPT / GPT-4',
      'Grok',
    ],
  },
  {
    category: 'Programming Languages',
    icon: '< >',
    color: 'violet',
    skills: ['Python', 'SQL', 'TypeScript', 'R', 'MATLAB', 'Stata', 'Excel'],
  },
  {
    category: 'Python Libraries',
    icon: '🐍',
    color: 'violet',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SciPy',
      'Plotly',
      'Matplotlib',
      'Seaborn',
      'SQLAlchemy',
      'openpyxl',
      'Requests',
      'BeautifulSoup',
    ],
  },
  {
    category: 'ML & Analytics',
    icon: '🧠',
    color: 'blue',
    skills: [
      'A/B Testing',
      'Logistic Regression',
      'Random Forest',
      'XGBoost',
      'SVM',
      'GNN / GCN',
      'GraphSMOTE',
      'Auto EDA',
      'Sentiment Analysis',
      'Imputation',
      'Correlation Analysis',
    ],
  },
  {
    category: 'Data Visualization',
    icon: '📊',
    color: 'amber',
    skills: ['Tableau', 'Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'ggplot', 'Looker Studio'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'emerald',
    skills: ['MySQL', 'SQLite', 'SQL Server', 'AWS Redshift', 'AWS RDS'],
  },
  {
    category: 'Cloud & Tools',
    icon: '☁️',
    color: 'cyan',
    skills: ['AWS S3', 'AWS EC2', 'Jupyter Notebook', 'VS Code', 'GitHub', 'pytest'],
  },
]
