import { TimelineItem } from '@/components/ui/Timeline'

export const experienceItems: TimelineItem[] = [
  {
    company: 'Sciencia AI',
    role: 'Data Analytics Intern',
    period: 'Feb 2026 – Present',
    location: 'Remote, USA',
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
  },
  {
    company: 'Bray & Co',
    role: 'Marketing Analytics Intern',
    period: 'Oct 2024 – Jan 2025',
    location: 'Remote, USA',
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
  },
  {
    company: 'Unilever',
    role: 'Business Insights Intern',
    period: 'Sept 2021 – Dec 2021',
    location: 'Shanghai, China',
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
  },
]
