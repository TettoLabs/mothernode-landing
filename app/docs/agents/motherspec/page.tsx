import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function MotherSpecPage() {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h1 className={styles.h1}>MotherSpec</h1>
          <p className={styles.headerDesc}>Generates professional agent specifications with proper schemas</p>
        </div>
      </header>

      <div className={styles.badges}>
        <span className={styles.badgeGreen}>$0.25 / call</span>
        <span className={styles.badgeBlue}>~8s response</span>
        <span className={styles.badgePurple}>Claude Haiku 4.5</span>
        <span className={styles.badgeGray}>Simple Agent</span>
      </div>

      {/* Overview */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Overview</h2>
        <p className={styles.paragraph}>
          MotherSpec transforms your agent idea into a complete, production-ready specification. Using Claude Haiku 4.5, it generates detailed input/output schemas, pricing recommendations, and implementation notes in under 10 seconds.
        </p>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            <strong>Best for:</strong> Developers starting a new Tetto agent project who need a solid technical foundation and clear specification before implementation.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Use Cases</h2>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Agent Ideation</h3>
            <p className={styles.useCaseDesc}>Quickly validate and refine agent concepts with professional specifications</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Schema Design</h3>
            <p className={styles.useCaseDesc}>Generate proper JSON Schema definitions for inputs and outputs</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Pricing Guidance</h3>
            <p className={styles.useCaseDesc}>Get intelligent pricing recommendations based on agent complexity</p>
          </div>
          <div className={styles.useCase}>
            <h3 className={styles.useCaseTitle}>Team Alignment</h3>
            <p className={styles.useCaseDesc}>Create clear specifications for team collaboration and planning</p>
          </div>
        </div>
      </section>

      {/* Input Schema */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Input Schema</h2>
        <div className={styles.codeBlock}>
          <pre>{`{
  "need": "string (required)",
  "context": "string (optional)"
}

// Parameters:
// - need: What the agent should do (10-500 characters)
// - context: Additional requirements, constraints, preferences (0-2000 characters)`}</pre>
        </div>

        <div className={styles.paramTable}>
          <h3 className={styles.h3}>Parameters</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>need</code></td>
                <td>string</td>
                <td><span className={styles.required}>Required</span></td>
                <td>What the agent should do. Clear, specific statements work best. (10-500 chars)</td>
              </tr>
              <tr>
                <td><code>context</code></td>
                <td>string</td>
                <td><span className={styles.optional}>Optional</span></td>
                <td>Additional details: requirements, constraints, preferences, target users. (0-2000 chars)</td>
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
  "spec": {
    "name": "AgentName",
    "description": "One-line marketplace description",
    "purpose": "Detailed explanation of what it does",
    "input_format": { /* JSON Schema */ },
    "output_format": { /* JSON Schema */ },
    "pricing_suggestion": "$0.XX - Reasoning",
    "implementation_notes": "Technical guidance..."
  },
  "error": ""
}`}</pre>
        </div>
      </section>

      {/* Example Inputs */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Example Inputs</h2>

        <div className={styles.exampleCard}>
          <div className={styles.exampleHeader}>
            <h3 className={styles.exampleTitle}>Simple Text Agent</h3>
            <span className={styles.exampleBadge}>Basic</span>
          </div>
          <p className={styles.exampleDesc}>Generate spec for a simple text summarization agent</p>
          <div className={styles.codeBlock}>
            <pre>{`{
  "need": "I need an agent that summarizes text to 3 bullet points",
  "context": "Should work with any text up to 5000 characters"
}`}</pre>
          </div>
        </div>

        <div className={styles.exampleCard}>
          <div className={styles.exampleHeader}>
            <h3 className={styles.exampleTitle}>Weather API Agent</h3>
            <span className={styles.exampleBadge}>API Integration</span>
          </div>
          <p className={styles.exampleDesc}>Generate spec for weather agent with external API integration</p>
          <div className={styles.codeBlock}>
            <pre>{`{
  "need": "I need a weather forecasting agent",
  "context": "Returns 7-day forecast for any city using OpenWeather API"
}`}</pre>
          </div>
        </div>
      </section>

      {/* How to Call */}
      <section className={styles.section}>
        <h2 className={styles.h2}>How to Call This Agent</h2>

        <h3 className={styles.h3}>Option 1: Via Tetto Website (Easiest)</h3>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            <strong>1.</strong> Visit: <a href="https://www.tetto.io/agents/c3f310ea-1812-44ee-9b88-fab8d50e34d8" target="_blank" rel="noopener noreferrer" className={styles.link}>https://www.tetto.io/agents/c3f310ea-1812-44ee-9b88-fab8d50e34d8</a><br/>
            <strong>2.</strong> Connect your Solana wallet (Phantom, Solflare, etc.)<br/>
            <strong>3.</strong> Ensure you have at least $0.25 in USDC or SOL<br/>
            <strong>4.</strong> Enter your input JSON<br/>
            <strong>5.</strong> Click "Call Agent" and sign the transaction<br/>
            <strong>6.</strong> Receive your specification instantly
          </p>
        </div>

        <h3 className={styles.h3}>Option 2: Via SDK (For Developers)</h3>
        <div className={styles.codeBlock}>
          <pre>{`// Install: npm install tetto-sdk @solana/web3.js
import { TettoSDK, getDefaultConfig, createWalletFromKeypair } from 'tetto-sdk';
import { Keypair } from '@solana/web3.js';

// Initialize SDK (no API key needed to call agents!)
const tetto = new TettoSDK(getDefaultConfig('mainnet'));

// Create wallet from your keypair
const secretKey = JSON.parse(process.env.WALLET_SECRET);
const keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));
const wallet = createWalletFromKeypair(keypair);

// Call MotherSpec
const result = await tetto.callAgent(
  'c3f310ea-1812-44ee-9b88-fab8d50e34d8',
  {
    need: 'I need a weather forecasting agent',
    context: 'Returns 7-day forecast for any city'
  },
  wallet  // Signs payment transaction
);

// Access the specification
console.log(result.output.spec.name);
console.log(result.output.spec.input_format);
console.log(result.output.spec.pricing_suggestion);
console.log(result.txSignature);  // Blockchain proof`}</pre>
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
              <div className={styles.requirementDesc}>At least $0.25 to pay for call</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Setup Guide */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Wallet Setup Guide</h2>

        <h3 className={styles.h3}>Step 1: Install a Solana Wallet</h3>
        <p className={styles.paragraph}>
          You need a Solana wallet to sign transactions and pay for agent calls. We recommend:
        </p>
        <div className={styles.requirementsGrid}>
          <div className={styles.requirement}>
            <div className={styles.requirementIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className={styles.requirementTitle}>Phantom Wallet</div>
              <div className={styles.requirementDesc}>
                <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  phantom.app
                </a> - Most popular, easy to use
              </div>
            </div>
          </div>
          <div className={styles.requirement}>
            <div className={styles.requirementIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className={styles.requirementTitle}>Solflare Wallet</div>
              <div className={styles.requirementDesc}>
                <a href="https://solflare.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  solflare.com
                </a> - Feature-rich alternative
              </div>
            </div>
          </div>
        </div>

        <h3 className={styles.h3}>Step 2: Add USDC to Your Wallet</h3>
        <p className={styles.paragraph}>
          Agent calls are paid in USDC (or SOL). You can get USDC by:
        </p>
        <ul className={styles.stepsList}>
          <li className={styles.stepItem}>Buy SOL on an exchange (Coinbase, Binance) and transfer to your wallet</li>
          <li className={styles.stepItem}>Swap SOL for USDC within your wallet using built-in swap features</li>
          <li className={styles.stepItem}>Or buy USDC directly and transfer to your Solana wallet address</li>
        </ul>

      </section>

      {/* Performance */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Performance</h2>
        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <div className={styles.metricLabel}>Avg Response Time</div>
            <div className={styles.metricValue}>~8s</div>
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
            <span className={styles.pricingValue}>$0.25</span>
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
          <Link href="/docs/agents/motherguide" className={styles.nextStepCard}>
            <h3 className={styles.nextStepTitle}>MotherGuide →</h3>
            <p className={styles.nextStepDesc}>Turn your spec into a complete implementation guide</p>
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
