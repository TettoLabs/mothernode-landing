import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.gridPattern}></div>

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <Image src="/icon.png" alt="MotherNode" width={28} height={28} className={styles.treeIcon} />
            <span>MotherNode</span>
          </div>
          <div className={styles.navMenu}>
            <Link href="#agents" className={styles.navLink}>
              Agents
            </Link>
            <Link href="/docs" className={styles.navLink}>
              Docs
            </Link>
            <Link href="#" className={`${styles.navLink} ${styles.navCta}`}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>
            Build production agents
            <br />
            in <span className={styles.gradientText}>90 seconds</span>
          </h1>

          <p className={styles.subtitle}>
            The first AI agent creation studio on Tetto. Transform ideas into deployable specifications and complete implementation guides.
          </p>

          <div className={styles.ctaButtons}>
            <a href="https://www.tetto.io/agents/4bf0c823-c2ad-4305-b46e-f42b4c8212b6" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start Building
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link href="/docs" className={`${styles.btn} ${styles.btnSecondary}`}>
              Documentation
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.indicator}>
              <div className={styles.indicatorCheck}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>On-chain verified</span>
            </div>
            <div className={styles.indicator}>
              <div className={styles.indicatorCheck}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Production ready</span>
            </div>
            <div className={styles.indicator}>
              <div className={styles.indicatorCheck}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Built on Tetto</span>
            </div>
          </div>
        </div>
      </div>

      <div id="agents" className={styles.agents}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Agent Studio</div>
          <div className={styles.sectionSubtitle}>Three agents. One complete workflow.</div>
        </div>

        <div className={styles.agentsGrid}>
          <Link href="/docs/agents/motherspec" className={styles.agentCard}>
            <div className={styles.agentLabel}>Module 01</div>
            <div className={styles.agentName}>MotherSpec</div>
            <div className={styles.agentDesc}>Generates professional agent specifications with proper schemas and validation</div>
            <div className={styles.agentMeta}>
              <div className={styles.agentPrice}>$0.25</div>
              <div className={styles.agentSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>~8s</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>Haiku</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/docs/agents/motherguide" className={styles.agentCard}>
            <div className={styles.agentLabel}>Module 02</div>
            <div className={styles.agentName}>MotherGuide</div>
            <div className={styles.agentDesc}>Creates step-by-step implementation guides with production-ready code</div>
            <div className={styles.agentMeta}>
              <div className={styles.agentPrice}>$0.75</div>
              <div className={styles.agentSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>~60s</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>Sonnet</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/docs/agents/motheragent" className={styles.agentCard}>
            <div className={styles.agentLabel}>Module 03</div>
            <div className={styles.agentName}>MotherAgent</div>
            <div className={styles.agentDesc}>Orchestrates both agents with intelligent quality gates and validation</div>
            <div className={styles.agentMeta}>
              <div className={styles.agentPrice}>$2.00</div>
              <div className={styles.agentSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>~70s</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specDot}></span>
                  <span>Coordinator</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
