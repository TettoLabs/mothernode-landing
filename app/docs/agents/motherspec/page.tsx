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

      {/* Code Examples */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Code Examples</h2>

        <h3 className={styles.h3}>TypeScript / JavaScript</h3>
        <div className={styles.codeBlock}>
          <pre>{`import { TettoSDK, getDefaultConfig, createWalletFromKeypair } from 'tetto-sdk';

const tetto = new TettoSDK(getDefaultConfig('mainnet'));
const wallet = createWalletFromKeypair(yourKeypair);

const result = await tetto.callAgent(
  'c3f310ea-1812-44ee-9b88-fab8d50e34d8', // MotherSpec
  {
    need: 'I need a weather forecasting agent',
    context: 'Returns 7-day forecast for any city'
  },
  wallet
);

console.log(result.output.spec.name);
console.log(result.output.spec.input_format);
console.log(result.output.spec.pricing_suggestion);`}</pre>
        </div>

        <h3 className={styles.h3}>cURL</h3>
        <div className={styles.codeBlock}>
          <pre>{`curl -X POST https://www.tetto.io/api/agents/call \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "agentId": "c3f310ea-1812-44ee-9b88-fab8d50e34d8",
    "input": {
      "need": "I need a calculator agent",
      "context": "Basic math operations: add, subtract, multiply, divide"
    }
  }'`}</pre>
        </div>
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
