import { TimelineItem } from '@/components/ui/Timeline'

export type { WorkflowStep, TechStackItem, KeyAchievement, Challenge, ExperienceDetail }

interface WorkflowStep {
  step: number
  title: string
  description: string
  tools: string[]
}

interface TechStackItem {
  name: string
  role: string
  reason: string
}

interface KeyAchievement {
  metric: string
  description: string
}

interface Challenge {
  problem: string
  solution: string
}

interface ExperienceDetail {
  overview: string
  workflow: WorkflowStep[]
  techStack: TechStackItem[]
  keyAchievements: KeyAchievement[]
  challenges: Challenge[]
}

export const experienceItems: TimelineItem[] = [
  {
    company: 'Sciencia AI',
    role: 'Data Analytics Intern',
    period: 'Feb 2026 – Present',
    location: 'Remote, USA',
    slug: 'sciencia-ai',
    bullets: [
      'Built a modular data ingestion and cleaning pipeline using SQL and Python (Requests, BeautifulSoup, Pandas, NumPy) to automate collection, data cleaning, and quality filtering of large-scale user-generated text datasets, reducing manual processing effort by 70%.',
      'Designed and implemented a relational database schema in SQL to efficiently store, organize, and query scraped data for downstream analytics.',
      'Conducted exploratory and sentiment analyses on structured datasets using SQL and Python (Scikit-learn) to extract insights on user behavior, trends, and feedback patterns.',
      'Developed 5+ interactive Tableau dashboards covering the full analytics lifecycle — from raw data ingestion through cleaning to visual storytelling — enabling non-technical stakeholders to self-serve business insights.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'SQL', color: 'emerald' },
      { label: 'Pandas', color: 'violet' },
      { label: 'Tableau', color: 'amber' },
      { label: 'Sentiment Analysis', color: 'blue' },
      { label: 'Data Cleaning', color: 'emerald' },
    ],
    detail: {
      overview:
        'At Sciencia AI I owned the end-to-end analytics pipeline: from raw web scraping through data cleaning, structured storage, machine-learning-assisted analysis, and finally interactive dashboards that let non-technical stakeholders explore the data themselves. The challenge was turning noisy, high-volume user-generated text into reliable, queryable insights — without a full data-engineering team.',
      workflow: [
        {
          step: 1,
          title: 'Data Collection',
          description:
            'Scraped large-scale user-generated text from web sources, handling pagination, rate limits, and dynamic HTML.',
          tools: ['Python', 'Requests', 'BeautifulSoup'],
        },
        {
          step: 2,
          title: 'Data Cleaning & Quality Filtering',
          description:
            'Removed duplicates, handled encoding errors, normalized text fields, and applied configurable quality filters to ensure only high-signal records reached the database.',
          tools: ['Pandas', 'NumPy'],
        },
        {
          step: 3,
          title: 'Structured Storage',
          description:
            'Designed a relational schema with foreign keys and indexes optimized for the downstream analytics query patterns, cutting ad-hoc query time significantly.',
          tools: ['SQL'],
        },
        {
          step: 4,
          title: 'Analysis & Insights',
          description:
            'Ran exploratory data analysis and sentiment classification on the cleaned dataset to surface behavioral trends, feedback patterns, and user segments.',
          tools: ['Python', 'Scikit-learn', 'SQL'],
        },
        {
          step: 5,
          title: 'Visualization & Reporting',
          description:
            'Built interactive Tableau dashboards with drill-downs so non-technical stakeholders could self-serve insights rather than filing ad-hoc report requests.',
          tools: ['Tableau'],
        },
      ],
      techStack: [
        {
          name: 'Python',
          role: 'Primary scripting language across every pipeline stage',
          reason: 'Rich data ecosystem (Pandas, Scikit-learn, Requests) and fast iteration',
        },
        {
          name: 'SQL',
          role: 'Schema design, data storage, and analytics querying',
          reason: 'Relational structure suits structured text datasets and enables fast aggregations',
        },
        {
          name: 'Pandas',
          role: 'In-memory data cleaning, transformation, and feature engineering',
          reason: 'Expressive API for tabular operations; integrates directly with SQL via SQLAlchemy',
        },
        {
          name: 'BeautifulSoup',
          role: 'HTML parsing and content extraction during scraping',
          reason: 'Simple, reliable parser for structured and semi-structured web pages',
        },
        {
          name: 'Scikit-learn',
          role: 'Sentiment classification and exploratory ML analysis',
          reason: 'Consistent API across models; quick to swap classifiers during experimentation',
        },
        {
          name: 'Tableau',
          role: 'Interactive dashboard delivery for non-technical stakeholders',
          reason: 'Drag-and-drop drill-downs let stakeholders self-serve without SQL knowledge',
        },
      ],
      keyAchievements: [
        {
          metric: '70%',
          description: 'Reduction in manual processing effort after automating the ingestion and cleaning pipeline',
        },
        {
          metric: '5+',
          description:
            'Interactive Tableau dashboards deployed, giving stakeholders real-time self-serve access to insights',
        },
        {
          metric: '1 schema',
          description:
            'Relational database design that unified all scraped data sources into a single queryable structure for downstream analytics',
        },
      ],
      challenges: [
        {
          problem:
            'Raw scraped text had extremely high noise — duplicates, broken encodings, and off-topic content mixed in with useful records.',
          solution:
            'Built a multi-stage cleaning layer with configurable filters (deduplication keys, encoding detection, keyword-based relevance scoring) so each stage could be tuned independently without touching the scraping logic.',
        },
        {
          problem:
            'Non-technical stakeholders were filing frequent ad-hoc report requests, creating a bottleneck on the data team.',
          solution:
            'Designed Tableau dashboards around their actual questions — with date filters, category drill-downs, and plain-language labels — so they could explore the data themselves and stopped needing one-off reports.',
        },
      ],
    },
  },
  {
    company: 'Bray & Co',
    role: 'Marketing Analytics Intern',
    period: 'Oct 2024 – Jan 2025',
    location: 'Remote, USA',
    slug: 'bray-co',
    bullets: [
      'Built an advertisement metric dashboard using Looker Studio to report data-driven metrics (CTR, ROI) guiding CS Disco\'s digital marketing strategies on website traffic, user engagement, and advertising performance.',
      'Processed, cleaned, and analyzed two years of advertising performance data using Python (Scikit-learn, SciPy) to identify regional trends and ad effectiveness variations via correlation and logistic regression.',
      'Produced multi-format data visualizations (Matplotlib charts, Looker Studio dashboards) to communicate channel ROI and regression forecasts to marketing leadership, enabling data-driven budget allocation decisions.',
    ],
    tags: [
      { label: 'Looker Studio', color: 'amber' },
      { label: 'Python', color: 'violet' },
      { label: 'Logistic Regression', color: 'blue' },
      { label: 'Scikit-learn', color: 'violet' },
      { label: 'Matplotlib', color: 'amber' },
      { label: 'Data Visualization', color: 'amber' },
    ],
    detail: {
      overview:
        'At Bray & Co I took two years of raw advertising performance data for CS Disco and turned it into a clear, decision-ready analytics story. The work covered the full lifecycle: cleaning inconsistent historical exports, running statistical and regression analysis to find what actually drove ad performance, and packaging the findings as both static charts and a live Looker Studio dashboard that marketing leadership could check daily.',
      workflow: [
        {
          step: 1,
          title: 'Data Ingestion & Cleaning',
          description:
            'Ingested two years of advertising performance exports. Standardized inconsistent column formats, imputed missing regional labels, and removed duplicate campaign entries.',
          tools: ['Python', 'Pandas'],
        },
        {
          step: 2,
          title: 'Exploratory Analysis',
          description:
            'Ran correlation tests across channels, regions, and time periods to surface which variables were most predictive of CTR and ROI — before committing to a model.',
          tools: ['Python', 'SciPy'],
        },
        {
          step: 3,
          title: 'Regression Modeling',
          description:
            'Built a logistic regression model to predict ad effectiveness by channel and region. Validated with cross-validation and interpreted coefficients to identify under- and over-performing segments.',
          tools: ['Scikit-learn'],
        },
        {
          step: 4,
          title: 'Visualization & Reporting',
          description:
            'Produced Matplotlib charts for the regression report and built a live Looker Studio dashboard showing CTR, ROI, and channel rankings so leadership had a real-time view alongside the static analysis.',
          tools: ['Matplotlib', 'Looker Studio'],
        },
      ],
      techStack: [
        {
          name: 'Python',
          role: 'Data cleaning, statistical analysis, and model training',
          reason: 'Single language for the full analytics workflow avoids handoff friction',
        },
        {
          name: 'Scikit-learn',
          role: 'Logistic regression modeling and cross-validation',
          reason: 'Consistent API made it easy to iterate on feature sets and compare model variants',
        },
        {
          name: 'SciPy',
          role: 'Correlation tests and statistical significance checks during EDA',
          reason: 'Purpose-built statistical functions more reliable than manual implementations',
        },
        {
          name: 'Matplotlib',
          role: 'Static charts for the written regression analysis report',
          reason: 'Fine-grained control over chart formatting for a polished, print-ready output',
        },
        {
          name: 'Looker Studio',
          role: 'Live interactive dashboard for daily leadership review',
          reason: 'Connects directly to data sources and updates automatically — no manual refresh needed',
        },
      ],
      keyAchievements: [
        {
          metric: 'Live dashboard',
          description: 'Built a real-time CTR/ROI dashboard in Looker Studio, giving leadership a daily view of advertising performance across channels',
        },
        {
          metric: '2 years',
          description:
            'Processed and cleaned two years of historical ad performance data, uncovering regional trends that were invisible in point-in-time snapshots',
        },
        {
          metric: 'Budget reallocation',
          description:
            'Regression model identified underperforming channels, directly informing marketing leadership\'s budget allocation decisions',
        },
      ],
      challenges: [
        {
          problem:
            'Two years of ad exports came from different time periods with inconsistent column naming, missing regional labels, and duplicate campaign entries.',
          solution:
            'Wrote a Python cleaning script that standardized column names via a mapping dict, imputed missing regional labels using campaign name patterns, and deduplicated on a composite key before any analysis ran.',
        },
        {
          problem:
            'Statistical regression outputs (coefficients, p-values) weren\'t actionable for non-technical marketing leads who needed clear channel recommendations, not model summaries.',
          solution:
            'Created a Looker Studio visual layer that translated model outputs into plain-language rankings ("Top channel: Paid Search — 2.3× ROI vs. average") so the insight was immediately actionable without statistical background.',
        },
      ],
    },
  },
  {
    company: 'Unilever',
    role: 'Business Insights Intern',
    period: 'Sept 2021 – Dec 2021',
    location: 'Shanghai, China',
    slug: 'unilever',
    bullets: [
      'Used industry reports and consumer data to forecast industry growth in fragrance, pet care, and virtual IP, providing strategic insights that shaped brand decisions across these sectors in the Chinese market.',
      'Led development of Slogan Builder, a machine learning platform that identifies and generates powerful marketing language using n-gram and bag of words models.',
    ],
    tags: [
      { label: 'Market Forecasting', color: 'blue' },
      { label: 'Machine Learning', color: 'violet' },
      { label: 'NLP', color: 'blue' },
      { label: 'Python', color: 'violet' },
    ],
    detail: {
      overview:
        'At Unilever\'s Shanghai office I worked across two tracks simultaneously: market research and forecasting for three high-growth consumer sectors in China, and the development of Slogan Builder — an internal NLP tool that used statistical language models to identify and generate high-performing marketing language. Both tracks required translating messy, ambiguous inputs (industry reports, raw marketing copy) into structured, actionable outputs.',
      workflow: [
        {
          step: 1,
          title: 'Market Research & Data Gathering',
          description:
            'Synthesized industry reports, consumer survey data, and competitor analyses across three sectors (fragrance, pet care, virtual IP) to build a unified dataset for forecasting.',
          tools: ['Python', 'Excel'],
        },
        {
          step: 2,
          title: 'Growth Forecasting',
          description:
            'Modeled growth trajectories by sector using trend extrapolation and scenario analysis, producing forecasts that informed brand investment decisions in the Chinese market.',
          tools: ['Python'],
        },
        {
          step: 3,
          title: 'NLP Pipeline (Slogan Builder)',
          description:
            'Built a text processing pipeline to clean and tokenize a corpus of high-performing marketing slogans, then trained n-gram and bag-of-words models to score and generate candidate marketing language.',
          tools: ['Python', 'CountVectorizer', 'n-gram models'],
        },
      ],
      techStack: [
        {
          name: 'Python',
          role: 'Forecasting models and the full Slogan Builder NLP pipeline',
          reason: 'Versatile enough to span both quantitative modeling and text processing in one codebase',
        },
        {
          name: 'n-gram models',
          role: 'Capturing common phrase patterns in high-performing marketing copy',
          reason: 'Lightweight and interpretable — easy to explain output to non-technical marketing stakeholders',
        },
        {
          name: 'Bag-of-Words (CountVectorizer)',
          role: 'Representing slogan text as feature vectors for scoring and comparison',
          reason: 'Simple baseline that proved effective for identifying statistically frequent high-impact terms',
        },
        {
          name: 'NLP (text preprocessing)',
          role: 'Tokenization, stopword removal, and normalization of the slogan corpus',
          reason: 'Clean input text is critical for n-gram frequency to reflect signal rather than noise',
        },
      ],
      keyAchievements: [
        {
          metric: '3 sectors',
          description:
            'Delivered market growth forecasts for fragrance, pet care, and virtual IP — three structurally different sectors — shaping brand investment priorities for the Chinese market',
        },
        {
          metric: 'Slogan Builder',
          description:
            'Designed and built an internal ML tool that automated marketing language ideation, reducing the time teams spent drafting slogan variations from scratch',
        },
      ],
      challenges: [
        {
          problem:
            'Three very different market sectors required completely different data sources and analytical frameworks, making it hard to build anything reusable.',
          solution:
            'Created a standardized research template (market size → growth drivers → consumer segments → forecast) that could be filled in for each sector independently, keeping outputs comparable while allowing sector-specific depth.',
        },
        {
          problem:
            'Marketing language generation is inherently subjective — there\'s no clear ground truth for what makes a slogan "good," which made model evaluation difficult.',
          solution:
            'Framed evaluation around statistical frequency: used n-gram scoring to surface phrases that appeared disproportionately often in known high-performing campaigns, giving the team a data-backed shortlist rather than purely subjective output.',
        },
      ],
    },
  },
]
