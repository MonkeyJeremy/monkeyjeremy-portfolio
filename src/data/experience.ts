import { TimelineItem } from '@/components/ui/Timeline'

export const experienceItems: TimelineItem[] = [
  {
    company: 'Sciencia AI',
    role: 'Data Analytics Intern',
    period: 'Feb 2026 – Present',
    location: 'Remote, USA',
    bullets: [
      'Built a modular data ingestion pipeline using SQL and Python (Requests, BeautifulSoup, Pandas, NumPy) to automate collection and processing of large-scale user-generated text, reducing manual processing effort by 70%.',
      'Designed and implemented a relational database schema in SQL to efficiently store, organize, and query scraped data for downstream analytics.',
      'Conducted exploratory and sentiment analyses on structured datasets using SQL and Python (Scikit-learn) to extract insights on user behavior, trends, and feedback patterns.',
      'Created 5+ interactive Tableau dashboards to visualize key trends and communicate findings to non-technical stakeholders.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'SQL', color: 'emerald' },
      { label: 'Pandas', color: 'violet' },
      { label: 'Tableau', color: 'amber' },
      { label: 'Sentiment Analysis', color: 'blue' },
    ],
  },
  {
    company: 'Bray & Co',
    role: 'Marketing Analytics Intern',
    period: 'Oct 2024 – Jan 2025',
    location: 'Remote, USA',
    bullets: [
      'Built an advertisement metric dashboard using Looker Studio to report data-driven metrics (CTR, ROI) guiding CS Disco\'s digital marketing strategies on website traffic, user engagement, and advertising performance.',
      'Identified trends and regional variations in ad effectiveness using correlation and logistic regression analysis with Python (Scikit-learn, SciPy) from two-year advertising performance data.',
      'Visualized predicted regression trends and best-performing channels using Matplotlib and Looker Studio scatter line charts.',
    ],
    tags: [
      { label: 'Looker Studio', color: 'amber' },
      { label: 'Python', color: 'violet' },
      { label: 'Logistic Regression', color: 'blue' },
      { label: 'Scikit-learn', color: 'violet' },
      { label: 'Matplotlib', color: 'amber' },
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
