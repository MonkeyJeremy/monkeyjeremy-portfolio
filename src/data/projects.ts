import { BadgeColor } from '@/components/ui/Badge'
import type { WorkflowStep, TechStackItem, KeyAchievement, Challenge } from '@/data/experience'

interface ProjectBadge {
  label: string
  color: BadgeColor
}

interface ProjectDetail {
  overview: string
  workflow: WorkflowStep[]
  techStack: TechStackItem[]
  keyAchievements: KeyAchievement[]
  challenges: Challenge[]
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
  slug?: string
  detail?: ProjectDetail
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
      'Implemented prompt caching (80-90% input token cost reduction), an AST import sandbox blocking 25+ dangerous modules before exec(), and 129 automated tests with 80-100% coverage on all non-UI modules.',
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
    slug: 'data-analyst-agent',
    detail: {
      overview:
        'The Data Analyst Agent closes the gap between people who have data questions and people who can write code to answer them. Users upload a CSV, Excel, JSON, or SQLite file — or connect to a live SQL database — and converse in plain English. The agent writes and executes real Python or SQL, reads its own tracebacks when code fails, self-corrects, and retries. Every answer is backed by real execution output, never a hallucinated number. Built across 6 versions in one week, the project grew from a basic CSV chatbot into a multi-provider, production-hardened agent with prompt caching, an AST security sandbox, nested LLM text analysis, and 129 automated tests.',
      workflow: [
        {
          step: 1,
          title: 'Upload and Schema Extraction',
          description:
            'User uploads a file (CSV, Excel, JSON, SQLite) or connects a live SQL database. A layout-detection algorithm handles messy spreadsheets with blank rows, multi-row headers, and merged cells. The DataFrame is frozen into an immutable SchemaContext with column names, dtypes, sample values, and missing-value stats.',
          tools: ['pandas', 'openpyxl', 'SQLAlchemy'],
        },
        {
          step: 2,
          title: 'Auto EDA',
          description:
            'On upload, a pure-function EDA pipeline runs automatically: distributions, correlations, outliers, skewness, and missing-value heatmap. Free-form text columns are detected via an avg-char-length and cardinality heuristic and routed to a word-frequency analyzer. The EDA narrative is injected into the system prompt.',
          tools: ['pandas', 'NumPy', 'Plotly', 'Matplotlib'],
        },
        {
          step: 3,
          title: 'System Prompt Engineering',
          description:
            'A dynamic system prompt is assembled from the schema, EDA summary, and detected text columns. On Anthropic, the prompt is wrapped in a cache_control ephemeral block so it is served from cache on every subsequent turn — cutting input token cost by 80-90% per session.',
          tools: ['Anthropic Prompt Caching', 'Python'],
        },
        {
          step: 4,
          title: 'ReAct Agent Loop',
          description:
            'The user question enters a bounded ReAct loop (max 5 iterations). The LLM receives the full conversation history plus tool schemas. On tool_use the agent writes Python or SQL; on end_turn the final answer is returned. The loop is provider-agnostic and never touches SDK-specific types.',
          tools: ['Anthropic Claude API', 'OpenAI API', 'BaseLLMClient ABC'],
        },
        {
          step: 5,
          title: 'Safe Code Execution',
          description:
            'Before any exec(), an AST walker inspects the generated code and blocks 25+ dangerous modules (os, subprocess, socket, pickle, and more). The DataFrame is passed as a copy so agent code can never mutate the session state. Plotly figures are captured as JSON; matplotlib as PNG fallback.',
          tools: ['Python ast', 'Plotly', 'Matplotlib'],
        },
        {
          step: 6,
          title: 'Text Analysis via Nested LLM Call',
          description:
            'For free-form text columns, the agent calls the analyze_text tool. This fires a nested LLM call with an empty tools list — a focused labelling prompt returning a JSON array of label, confidence, and note per text. Results render as a markdown table. Zero NLP library dependencies.',
          tools: ['Anthropic Claude API', 'OpenAI API', 'JSON parsing'],
        },
      ],
      techStack: [
        {
          name: 'Python',
          role: 'Primary language for the entire backend — agent loop, EDA, execution, text analysis',
          reason: 'Rich data ecosystem (pandas, plotly, SQLAlchemy) and fast iteration on agent logic',
        },
        {
          name: 'Anthropic Claude API',
          role: 'Primary LLM provider — tool use, prompt caching, token metering',
          reason: 'Native tool-use support and prompt caching make it optimal for multi-turn agent sessions',
        },
        {
          name: 'OpenAI API',
          role: 'Alternative LLM provider accessible via sidebar model selector',
          reason: 'Wider model availability gives users flexibility on cost vs. capability',
        },
        {
          name: 'pandas + NumPy',
          role: 'DataFrame operations, EDA computations, schema introspection',
          reason: 'Industry-standard tabular data layer with direct SQLAlchemy and Excel integration',
        },
        {
          name: 'Plotly',
          role: 'Interactive charts rendered inline in the Streamlit UI',
          reason: 'Agent-generated Plotly code produces interactive figures the user can zoom and filter',
        },
        {
          name: 'SQLAlchemy',
          role: 'SQL database connectivity for live DB mode and SQLite file uploads',
          reason: 'Unified engine interface works across SQLite, PostgreSQL, and MySQL without code changes',
        },
        {
          name: 'pytest',
          role: '129 automated tests covering agent loop, tools, EDA, execution, and text analysis',
          reason: 'Queue-based FakeLLMClient test double runs the full agent loop without real API calls',
        },
      ],
      keyAchievements: [
        {
          metric: '129 tests',
          description: 'Automated test suite with 80-100% coverage on all non-UI modules — the agent loop is verified as a state machine without live API calls',
        },
        {
          metric: '80-90%',
          description: 'Reduction in input token billing per session via Anthropic prompt caching on the static system prompt — measurable cost optimisation built in',
        },
        {
          metric: '6 versions',
          description: 'Shipped v1 through v6 in one week: CSV chatbot to SQL mode to auto EDA to text analysis to production hardening to multi-provider support',
        },
      ],
      challenges: [
        {
          problem:
            'LLM-generated code is non-deterministic — models hallucinate library names, make wrong assumptions about column dtypes, and produce off-by-one errors. A single-shot approach fails frequently on real data.',
          solution:
            'Implemented a bounded ReAct loop: the agent writes code, executes it, reads the full traceback on failure, and retries with the error in context. Max 5 iterations prevents runaway costs. Every final answer is execution-backed.',
        },
        {
          problem:
            'Adding OpenAI support required changing how the loop accessed API responses — Anthropic uses ContentBlock objects while OpenAI uses choice.message. Touching the loop for every new provider is unmaintainable.',
          solution:
            'Introduced a BaseLLMClient ABC with normalised AgentResponse and ToolCall types. Each provider maps its SDK response internally. build_tool_result_entries() returns list[dict] so history.extend() handles both Anthropic (one batched message) and OpenAI (separate role:tool messages) transparently.',
        },
        {
          problem:
            'exec() on LLM-generated code is inherently risky — a model could generate dangerous system commands that harm the host environment.',
          solution:
            'Built an AST import sandbox: before any exec(), ast.walk() inspects every Import and ImportFrom node. If any module matches the 25+ blocked list (os, subprocess, socket, shutil, pathlib, ctypes, pickle, and more), the code never runs and a SecurityError result is returned immediately.',
        },
      ],
    },
  },
  {
    title: 'Detecting Fraud with Oversampling Techniques and Sparsity Constraints',
    period: 'Sept 2023 – Mar 2024',
    description:
      'Graph neural network fraud detection system trained on Amazon, Yelp, and Reddit datasets. Addresses severe class imbalance (3-15% fraud) using GraphSMOTE oversampling and sparsity constraints to improve minority-class recall without sacrificing overall accuracy.',
    highlights: [
      'Achieved 7%+ improvement in fraud detection accuracy over vanilla GNN baselines using GraphSMOTE with sparsity-regularized graph reconstruction.',
      'Discovered that fraudulent accounts cluster together in the graph — neighbor similarity is a stronger signal than node features alone; validated with ROC-AUC across three real-world datasets.',
      'Implemented sparsify_graph() with dual threshold filtering and top-k edge selection to prune noisy synthetic edges — a core improvement over the original GraphSMOTE decoder.',
    ],
    tags: [
      { label: 'Python', color: 'violet' },
      { label: 'PyTorch', color: 'rose' },
      { label: 'DGL', color: 'blue' },
      { label: 'GraphSMOTE', color: 'blue' },
      { label: 'GCN / GAT', color: 'blue' },
      { label: 'Scikit-learn', color: 'violet' },
    ],
    accentColor: '#8B5CF6',
    githubUrl: 'https://github.com/MonkeyJeremy/GNN-DSC180A',
    slug: 'fraud-detection-gnn',
    detail: {
      overview:
        'Online platforms lose billions to fraudulent accounts, spam reviews, and coordinated manipulation. The challenge is that fraudsters are rare — Amazon fraud nodes are only 9.5% of the graph, Yelp 14.5%, Reddit 3.3%. Standard graph neural networks trained on these imbalanced distributions learn to predict the majority (legitimate) class almost exclusively, missing most fraud. This project implements and improves GraphSMOTE — a framework that generates synthetic minority-class nodes in embedding space and reconstructs their graph edges — then adds sparsity constraints to remove the noisy synthetic edges the original decoder produces. The result is a higher-quality augmented graph that improves fraud recall across all three datasets.',
      workflow: [
        {
          step: 1,
          title: 'Dataset Loading and Preprocessing',
          description:
            'Loaded three real-world fraud graphs via DGL (FraudAmazon, FraudYelp) and PyGOD (Reddit anomaly). Applied row normalization of node features, adjacency symmetrization, and stratified 5-fold train/val/test splits (1% train, 0.33% val, 0.67% test) to reflect realistic low-supervision conditions.',
          tools: ['DGL', 'PyGOD', 'Scikit-learn', 'scipy sparse'],
        },
        {
          step: 2,
          title: 'Baseline GNN Models',
          description:
            'Implemented four baseline architectures — GCN, GAT, GraphSAGE, and RGCN for heterogeneous graphs. Amazon and Yelp have multiple relation types (heterogeneous); Reddit is homogeneous. Baselines confirmed vanilla GNNs achieve high overall accuracy but near-zero minority-class recall.',
          tools: ['PyTorch', 'DGL', 'GCN', 'GAT', 'GraphSAGE', 'RGCN'],
        },
        {
          step: 3,
          title: 'GraphSMOTE Encoder-Decoder Pretraining',
          description:
            'Pretrained an encoder-decoder pair to reconstruct the adjacency matrix. The reconstruction loss is a weighted MSE that assigns higher weight to non-edges via a dynamically computed edge ratio, counteracting density bias. The encoder learns node embeddings; the decoder reconstructs neighbor similarity from those embeddings.',
          tools: ['PyTorch', 'Adam optimizer', 'weighted MSE loss'],
        },
        {
          step: 4,
          title: 'Synthetic Minority Node Generation',
          description:
            'For each fraud node, SMOTE interpolation generates synthetic nodes in embedding space: new_embed = embed[chosen] + (embed[neighbor] - embed[chosen]) * random_coeff. The pretrained decoder then reconstructs adjacency entries for each synthetic node, integrating it structurally into the graph.',
          tools: ['recon_upsample()', 'embedding interpolation'],
        },
        {
          step: 5,
          title: 'Sparsity-Constrained Graph Reconstruction',
          description:
            'The key improvement over the original GraphSMOTE: a sparsify_graph() function prunes synthetic edges using dual criteria — threshold filtering (remove edges below 0.2 similarity) and top-k selection (keep only the 20 highest-similarity edges per node). This removes decoder noise and produces cleaner synthetic subgraphs.',
          tools: ['sparsify_graph()', 'PyTorch sparse tensors', 'SpecialSpmm'],
        },
        {
          step: 6,
          title: 'Classifier Training and Evaluation',
          description:
            'A GNN classifier is trained on the augmented graph (real and synthetic nodes). Models are checkpointed every 100 epochs; ROC-AUC is logged every 10 epochs. Final evaluation reports macro ROC-AUC, macro F1, and per-class accuracy across all three benchmark datasets.',
          tools: ['Scikit-learn', 'ROC-AUC', 'Macro F1', 'Matplotlib'],
        },
      ],
      techStack: [
        {
          name: 'PyTorch',
          role: 'Neural network framework for all GNN components and custom autograd operations',
          reason: 'Required for the custom SpecialSpmm sparse-dense matrix multiplication in the encoder backprop path',
        },
        {
          name: 'DGL (Deep Graph Library)',
          role: 'Graph data loading, message-passing layers, and FraudAmazon/FraudYelp datasets',
          reason: 'Natively provides benchmark fraud datasets with ground-truth labels and efficient graph operations',
        },
        {
          name: 'PyGOD',
          role: 'Reddit graph anomaly detection dataset loading',
          reason: 'Purpose-built library for graph outlier detection benchmarks; consistent API alongside DGL',
        },
        {
          name: 'GraphSMOTE',
          role: 'Minority oversampling via embedding-space interpolation and edge reconstruction',
          reason: 'Graph-aware SMOTE generates structurally plausible synthetic nodes rather than purely feature-based copies',
        },
        {
          name: 'Scikit-learn',
          role: 'ROC-AUC computation, stratified splitting, and macro F1 scoring',
          reason: 'Standard evaluation API that makes results directly comparable to published baselines',
        },
        {
          name: 'scipy sparse',
          role: 'Adjacency matrix construction and manipulation for large graphs',
          reason: 'Reddit has 114.6M edges — dense matrix operations would be infeasible; sparse ops keep memory bounded',
        },
      ],
      keyAchievements: [
        {
          metric: '7%+',
          description: 'Improvement in fraud detection accuracy over vanilla GNN baselines, combining GraphSMOTE oversampling with sparsity-constrained edge reconstruction',
        },
        {
          metric: '3 datasets',
          description: 'Benchmarked on Amazon (9.5% fraud, 4.4M edges), Yelp (14.5% fraud, 3.8M edges), and Reddit (3.3% fraud, 114.6M edges) — validating across different scales and imbalance ratios',
        },
        {
          metric: 'ROC-AUC',
          description: 'Primary evaluation metric confirming that improved minority-class recall came with consistent overall discriminative performance across all three benchmarks',
        },
      ],
      challenges: [
        {
          problem:
            'Severe class imbalance (3-15% fraud) causes vanilla GNNs to learn a near-degenerate solution — predicting the majority class almost always — achieving high accuracy but near-zero fraud recall on the class that actually matters.',
          solution:
            'Applied GraphSMOTE to generate synthetic minority nodes in embedding space via SMOTE interpolation, combined with a weighted reconstruction loss that dynamically assigns higher weight to non-edges. The augmented graph gives the classifier more balanced training signal.',
        },
        {
          problem:
            'The original GraphSMOTE decoder generates overly dense synthetic adjacency for new nodes, adding noisy edges that dilute the structural signal and hurt downstream classification quality.',
          solution:
            'Implemented sparsify_graph() with dual pruning: threshold filtering removes edges below 0.2 cosine similarity, and top-k selection retains only the 20 highest-similarity edges per node. This was the core novel contribution and directly improved classification performance.',
        },
        {
          problem:
            'Reddit has 232,965 nodes and 114.6M edges. Dense matrix operations for adjacency reconstruction would exhaust memory on standard hardware.',
          solution:
            'Used PyTorch sparse tensors throughout the pipeline and implemented a custom SpecialSpmm autograd function for memory-efficient sparse-dense matrix multiplication during encoder backpropagation.',
        },
      ],
    },
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
