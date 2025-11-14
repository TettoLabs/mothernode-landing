import Link from 'next/link';
import styles from './page.module.css';

export default function MotherGuidePage() {
  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/">← Back to Home</Link>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.iconContainer}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h1 className={styles.h1}>MotherGuide</h1>
          <p className={styles.headerDesc}>Creates step-by-step implementation guides with production-ready code</p>
        </div>
      </header>

      <div className={styles.badges}>
        <span className={styles.badgeGreen}>$0.75 / call</span>
        <span className={styles.badgeBlue}>~60s response</span>
        <span className={styles.badgePurple}>Claude Sonnet 4.5</span>
        <span className={styles.badgeGray}>Simple Agent</span>
      </div>

      {/* Overview */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Overview</h2>
        <p className={styles.paragraph}>
          MotherGuide transforms agent specifications into comprehensive, production-ready implementation guides. Using Claude Sonnet 4.5, it creates detailed setup instructions, complete code implementations, testing strategies, and deployment checklists—everything you need to build and launch your agent.
        </p>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            <strong>Best for:</strong> Developers with a solid specification (from MotherSpec or manual) who need complete, step-by-step implementation guidance with working code examples.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Use Cases</h2>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Complete Implementation</h3>
            <p className={styles.useCaseDesc}>Get production-ready code from specification to deployment</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Developer Onboarding</h3>
            <p className={styles.useCaseDesc}>Guide new developers through the Tetto agent creation process</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Best Practices</h3>
            <p className={styles.useCaseDesc}>Learn proper testing, deployment, and validation patterns</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Time Savings</h3>
            <p className={styles.useCaseDesc}>Reduce implementation time from hours to minutes with ready-to-use code</p>
          </div>
        </div>
      </section>

      {/* Input Schema */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Input Schema</h2>
        <div className={styles.codeBlock}>
          <pre>{`{
  "spec": { /* object (required) */ },
  "need": "string (optional)",
  "context": "string (optional)",
  "new_to_tetto": boolean (default: true),
  "include_tetto_setup": boolean (default: mirrors new_to_tetto),
  "include_vercel_setup": boolean (default: true),
  "include_git_setup": boolean (default: true),
  "guide_length": "concise" | "standard" | "comprehensive" (default: comprehensive),
  "target_audience": "string (default: 'AI coding assistant')",
  "include_testing": boolean (default: true),
  "testing_depth": "basic" | "thorough" (default: thorough),
  "include_deployment": boolean (default: true)
}`}</pre>
        </div>

        <div className={styles.paramTable}>
          <h3 className={styles.h3}>Required Parameters</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>spec</code></td>
                <td>object</td>
                <td>Complete agent specification (from MotherSpec or manually created). Must include: name, description, purpose, input_format, output_format, pricing_suggestion</td>
              </tr>
            </tbody>
          </table>

          <h3 className={styles.h3}>Optional Parameters</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>need</code></td>
                <td>string</td>
                <td>''</td>
                <td>Original user need for context (0-500 chars)</td>
              </tr>
              <tr>
                <td><code>context</code></td>
                <td>string</td>
                <td>''</td>
                <td>Additional context about requirements (0-2000 chars)</td>
              </tr>
              <tr>
                <td><code>new_to_tetto</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether user is new to Tetto; controls onboarding section inclusion</td>
              </tr>
              <tr>
                <td><code>include_tetto_setup</code></td>
                <td>boolean</td>
                <td>mirrors new_to_tetto</td>
                <td>Include Tetto account setup instructions</td>
              </tr>
              <tr>
                <td><code>include_vercel_setup</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Include Vercel deployment setup</td>
              </tr>
              <tr>
                <td><code>include_git_setup</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Include Git repository setup instructions</td>
              </tr>
              <tr>
                <td><code>guide_length</code></td>
                <td>enum</td>
                <td>'comprehensive'</td>
                <td>Guide detail level: 'concise', 'standard', or 'comprehensive'</td>
              </tr>
              <tr>
                <td><code>target_audience</code></td>
                <td>string</td>
                <td>'AI coding assistant'</td>
                <td>Target audience (e.g., 'beginner developer', 'experienced developer')</td>
              </tr>
              <tr>
                <td><code>include_testing</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Include testing section in guide</td>
              </tr>
              <tr>
                <td><code>testing_depth</code></td>
                <td>enum</td>
                <td>'thorough'</td>
                <td>Testing detail level: 'basic' or 'thorough'</td>
              </tr>
              <tr>
                <td><code>include_deployment</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Include deployment instructions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Output Schema */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Output Schema</h2>
        <div className={styles.codeBlock}>
          <pre>{`{
  "success": true,
  "guide": {
    "overview": "High-level summary...",
    "prerequisites": ["Node.js 20+", "Anthropic API key", ...],
    "tetto_setup": { /* if new_to_tetto=true */ },
    "setup_steps": [ /* Project setup */ ],
    "implementation_steps": [ /* Code + explanations */ ],
    "testing_strategy": { /* Testing approach */ },
    "deployment_steps": [ /* Deployment checklist */ ],
    "estimated_time": "2-3 hours"
  },
  "spec_used": { /* Input spec for reference */ },
  "guide_config": { /* Configuration metadata */ },
  "error": ""
}`}</pre>
        </div>
      </section>

      {/* Example Inputs */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Example Inputs</h2>

        <div className={styles.exampleCard}>
          <div className={styles.exampleHeader}>
            <h3 className={styles.exampleTitle}>Simple Echo Agent (Concise)</h3>
            <span className={styles.exampleBadge}>Experienced Dev</span>
          </div>
          <p className={styles.exampleDesc}>Concise guide for experienced developer, no Tetto onboarding</p>
          <div className={styles.codeBlock}>
            <pre>{`{
  "spec": {
    "name": "EchoAgent",
    "description": "Returns the input text back to the user",
    "purpose": "Simple echo agent for testing Tetto platform",
    "input_format": {
      "type": "object",
      "properties": {
        "text": { "type": "string", "description": "Text to echo back" }
      },
      "required": ["text"]
    },
    "output_format": {
      "type": "object",
      "properties": {
        "echo": { "type": "string", "description": "The echoed text" }
      },
      "required": ["echo"]
    },
    "pricing_suggestion": "$0.01 - Simple text processing",
    "implementation_notes": "No external APIs needed, just return the input"
  },
  "guide_length": "concise",
  "new_to_tetto": false
}`}</pre>
          </div>
        </div>

        <div className={styles.exampleCard}>
          <div className={styles.exampleHeader}>
            <h3 className={styles.exampleTitle}>Weather Agent (Comprehensive)</h3>
            <span className={styles.exampleBadge}>New User</span>
          </div>
          <p className={styles.exampleDesc}>Comprehensive guide with Tetto onboarding for new users</p>
          <div className={styles.codeBlock}>
            <pre>{`{
  "spec": {
    "name": "WeatherAgent",
    "description": "7-day weather forecast for any city",
    "purpose": "Provides weather forecasts using OpenWeather API",
    "input_format": {
      "type": "object",
      "properties": {
        "city": { "type": "string", "description": "City name" }
      },
      "required": ["city"]
    },
    "output_format": {
      "type": "object",
      "properties": {
        "forecast": { "type": "array", "description": "7-day forecast" }
      },
      "required": ["forecast"]
    },
    "pricing_suggestion": "$0.03 - Weather API integration",
    "implementation_notes": "Use OpenWeatherMap API with proper error handling"
  },
  "guide_length": "comprehensive",
  "new_to_tetto": true
}`}</pre>
          </div>
        </div>
      </section>

      {/* How to Call */}
      <section className={styles.section}>
        <h2 className={styles.h2}>How to Call This Agent</h2>

        <h3 className={styles.h3}>Option 1: Via Tetto Website</h3>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            <strong>1.</strong> Visit: <a href="https://www.tetto.io/agents/aa9a758c-7410-4f58-8ae7-c33f905dd2a4" target="_blank" rel="noopener noreferrer" className={styles.link}>https://www.tetto.io/agents/aa9a758c-7410-4f58-8ae7-c33f905dd2a4</a><br/>
            <strong>2.</strong> Connect your Solana wallet<br/>
            <strong>3.</strong> Ensure you have at least $0.75 in USDC or SOL<br/>
            <strong>4.</strong> Provide your specification (from MotherSpec or manually created)<br/>
            <strong>5.</strong> Sign the transaction<br/>
            <strong>6.</strong> Receive your complete implementation guide
          </p>
        </div>

        <h3 className={styles.h3}>Option 2: Via SDK</h3>
        <div className={styles.codeBlock}>
          <pre>{`import { TettoSDK, getDefaultConfig, createWalletFromKeypair } from 'tetto-sdk';
import { Keypair } from '@solana/web3.js';

// Initialize SDK (no API key needed!)
const tetto = new TettoSDK(getDefaultConfig('mainnet'));

// Create wallet
const secretKey = JSON.parse(process.env.WALLET_SECRET);
const keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));
const wallet = createWalletFromKeypair(keypair);

// Specification (from MotherSpec or manual)
const spec = {
  name: 'WeatherAgent',
  description: 'Returns 7-day weather forecasts',
  purpose: 'Detailed weather forecasting...',
  input_format: { /* JSON Schema */ },
  output_format: { /* JSON Schema */ },
  pricing_suggestion: '$0.03 - Weather API integration',
  implementation_notes: 'Use OpenWeatherMap API...'
};

// Call MotherGuide
const result = await tetto.callAgent(
  'aa9a758c-7410-4f58-8ae7-c33f905dd2a4',
  {
    spec: spec,
    new_to_tetto: true,
    guide_length: 'comprehensive'
  },
  wallet
);

// Access the guide
console.log(result.output.guide.overview);
console.log(result.output.guide.implementation_steps);
console.log(result.output.guide.estimated_time);`}</pre>
        </div>

        <h3 className={styles.h3}>What You Need</h3>
        <div className={styles.requirementsGrid}>
          <div className={styles.requirement}>
            <div className={styles.requirementIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <div className={styles.requirementTitle}>Solana Wallet</div>
              <div className={styles.requirementDesc}>Phantom, Solflare, or keypair</div>
            </div>
          </div>
          <div className={styles.requirement}>
            <div className={styles.requirementIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className={styles.requirementTitle}>USDC or SOL</div>
              <div className={styles.requirementDesc}>At least $0.75 to pay for call</div>
            </div>
          </div>
          <div className={styles.requirement}>
            <div className={styles.requirementIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div className={styles.requirementTitle}>Agent Specification</div>
              <div className={styles.requirementDesc}>From MotherSpec or manually created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Performance</h2>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <div className={styles.metricLabel}>Avg Response Time</div>
            <div className={styles.metricValue}>~60s</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricLabel}>Success Rate</div>
            <div className={styles.metricValue}>100%</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricLabel}>Uptime</div>
            <div className={styles.metricValue}>99.9%</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.pricingRow}>
            <span className={styles.pricingLabel}>Cost per call</span>
            <span className={styles.pricingValue}>$0.75</span>
          </div>
          <div className={styles.pricingRow}>
            <span className={styles.pricingLabel}>Developer receives</span>
            <span className={styles.pricingValue}>90%</span>
          </div>
          <div className={styles.pricingRow}>
            <span className={styles.pricingLabel}>Tetto platform fee</span>
            <span className={styles.pricingValue}>10%</span>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Next Steps</h2>
        <div className={styles.nextStepsGrid}>
          <Link href="/docs/agents/motherspec" className={styles.nextStepCard}>
            <h3 className={styles.nextStepTitle}>MotherSpec →</h3>
            <p className={styles.nextStepDesc}>Generate specifications before creating guides</p>
          </Link>
          <Link href="/docs/agents/motheragent" className={styles.nextStepCard}>
            <h3 className={styles.nextStepTitle}>MotherAgent →</h3>
            <p className={styles.nextStepDesc}>Use the complete orchestrated workflow</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
