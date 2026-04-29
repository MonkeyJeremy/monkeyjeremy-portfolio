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
    period: 'Feb 2026 – Apr 2026',
    location: 'Remote, USA',
    slug: 'sciencia-ai',
    bullets: [
      'Built a modular ingestion pipeline using Python (google-play-scraper, app-store-scraper) to collect ~25,000 app store reviews, then applied multi-stage cleaning — language detection (langdetect), deduplication, and length filtering — retaining 10,843 high-signal records and reducing manual effort by 70%.',
      'Designed a 6-table normalized SQLite schema (platforms, apps, users, reviews, sentiment_labels, ingestion_runs) to store and version-track each ingestion run for reproducible downstream analytics.',
      'Conducted exploratory and sentiment analyses on the cleaned dataset — surfacing that negative reviews (1–2★) are 2.3× longer than positive ones, a key signal for downstream NLP feature engineering.',
      'Developed 5+ interactive Tableau dashboards covering the full analytics lifecycle — from raw data ingestion through cleaning to visual storytelling — enabling non-technical stakeholders to self-serve business insights.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'SQLite', color: 'emerald' },
      { label: 'Pandas', color: 'violet' },
      { label: 'Tableau', color: 'amber' },
      { label: 'Sentiment Analysis', color: 'blue' },
      { label: 'Data Cleaning', color: 'emerald' },
      { label: 'App Store Scraping', color: 'blue' },
    ],
    detail: {
      overview:
        'At Sciencia AI I owned the end-to-end analytics pipeline for app store review data: scraping Google Play and App Store reviews, cleaning and filtering ~25,000 raw records down to 10,843 high-signal entries, loading them into a normalized SQLite database, and surfacing insights through sentiment analysis and interactive Tableau dashboards. The core challenge was building a pipeline resilient enough to handle multilingual noise, duplicate IDs, and stakeholders who needed self-serve access — without a full data-engineering team.',
      workflow: [
        {
          step: 1,
          title: 'Data Collection',
          description:
            'Scraped ~25,000 app store reviews from Google Play and the App Store using google-play-scraper and app-store-scraper, handling pagination and rate limits across multiple apps.',
          tools: ['Python', 'Requests', 'BeautifulSoup', 'google-play-scraper', 'app-store-scraper'],
        },
        {
          step: 2,
          title: 'Data Cleaning & Quality Filtering',
          description:
            'Applied a multi-stage cleaning pipeline: language detection (langdetect) to remove non-English entries, deduplication on review IDs, and minimum-length filters — retaining 10,843 high-signal records from 25,000 raw (57% retention).',
          tools: ['Pandas', 'langdetect', 'NumPy'],
        },
        {
          step: 3,
          title: 'Structured Storage',
          description:
            'Designed a 6-table normalized SQLite schema (platforms, apps, users, reviews, sentiment_labels, ingestion_runs) with run versioning for full reproducibility of every ingestion.',
          tools: ['SQLite'],
        },
        {
          step: 4,
          title: 'Analysis & Insights',
          description:
            'Ran EDA and TextBlob sentiment classification, finding 86.6% positive sentiment (4–5★) and that negative reviews are 2.3× longer — a key NLP signal guiding downstream feature engineering.',
          tools: ['Python', 'TextBlob', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
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
          reason: 'Rich data ecosystem (Pandas, TextBlob, scrapers) and fast iteration on cleaning logic',
        },
        {
          name: 'google-play-scraper',
          role: 'Automated collection of Google Play app reviews at scale',
          reason: 'Purpose-built library handles pagination and rate limits without browser overhead',
        },
        {
          name: 'app-store-scraper',
          role: 'Automated collection of Apple App Store reviews',
          reason: 'Consistent API alongside google-play-scraper keeps the ingestion layer uniform across platforms',
        },
        {
          name: 'SQLite',
          role: '6-table normalized schema with ingestion run versioning',
          reason: 'Zero-setup relational DB suited for single-machine analytics; schema enforces data integrity across runs',
        },
        {
          name: 'Pandas',
          role: 'In-memory data cleaning, transformation, and feature preparation',
          reason: 'Expressive API for tabular operations; direct SQLite integration via read_sql / to_sql',
        },
        {
          name: 'TextBlob',
          role: 'Sentiment classification on the cleaned review corpus',
          reason: 'Lightweight NLP baseline that surfaces polarity patterns without a GPU-dependent model',
        },
        {
          name: 'Tableau',
          role: 'Interactive dashboard delivery for non-technical stakeholders',
          reason: 'Drag-and-drop drill-downs let stakeholders self-serve insights without writing SQL',
        },
      ],
      keyAchievements: [
        {
          metric: '10,843 / 25,000',
          description: 'Reviews retained after multi-stage cleaning (language detection, deduplication, length filters) — a 57% retention rate that ensured downstream data quality',
        },
        {
          metric: '2.3×',
          description: 'Negative reviews (1–2★) are longer than positive ones — a key NLP signal discovered during EDA that guided downstream feature engineering',
        },
        {
          metric: '5+',
          description:
            'Interactive Tableau dashboards deployed, giving stakeholders real-time self-serve access to sentiment trends and app performance insights',
        },
      ],
      challenges: [
        {
          problem:
            'Raw scraped reviews included non-English entries, duplicate IDs across scraping runs, and very short junk reviews (e.g. single-word submissions) — all of which would distort sentiment models if left in.',
          solution:
            'Built a modular three-stage cleaning pipeline: langdetect filtered non-English text, a composite deduplication key (review_id + platform) eliminated cross-run duplicates, and a minimum token-length threshold removed low-signal entries — reducing 25,000 raw records to 10,843 clean ones.',
        },
        {
          problem:
            'The sentiment class distribution was heavily skewed — 86.6% positive (4–5★) — which would cause any classifier trained on the raw split to under-predict negative and neutral reviews.',
          solution:
            'Applied temporal train/val/test splitting (sorted by review_date to prevent leakage), then used within-split oversampling to correct the class imbalance before any model training, preserving time ordering while balancing the training distribution.',
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
