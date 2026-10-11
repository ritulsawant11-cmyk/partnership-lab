/*
 * CASE STUDIES — independent analysis of real partnerships.
 *
 * HOW TO EDIT
 * - Text fields accept simple Markdown: **bold**, *italic*, [link](https://...),
 *   bullet lists (lines starting with "- "), markdown tables (| a | b |), and blank lines between paragraphs.
 * - Leave a `body` as "" and the site shows "Research to be added".
 * - `label` tells readers what kind of content a section contains:
 *     "fact"        Verified fact (must be backed by an entry in `sources`)
 *     "analysis"    My analysis / interpretation
 *     "hypothetical" Original experimental / pilot designs
 *     "assumption"  Hypotheses and illustrative models
 *     "unverified"  Reported but not yet checked against a primary source
 * - `status`: "draft" | "in-progress" | "review" | "complete"
 * - `lastReviewed`: "YYYY-MM-DD" once you have checked the sources, otherwise null.
 * - `sources`: { title, publisher, date, url, kind: "primary" | "secondary", accessed }
 */
window.PL = window.PL || {};

PL.caseStudies = [
  {
    slug: "standard-life-moneyhub",
    title: "Standard Life × Moneyhub",
    subtitle: "Workplace Pension Engagement Through Fintech Partnerships",
    companies: ["Standard Life", "Moneyhub"],
    sector: "Financial services",
    partnershipType: "Technology partnership",
    typeNote: "Open Finance & personal financial management (PFM) integration.",
    summary:
      "An independent strategic analysis of how a legacy UK workplace pension provider (Standard Life / Phoenix Group) " +
      "paired its distribution and pension administration with an Open Finance fintech platform (Moneyhub) to drive member engagement, " +
      "address the £31.1B lost pensions problem, and evaluate commercial pilot delivery economics.",
    status: "complete",
    featured: true,
    lastReviewed: "2024-10-24",

    researchLeads: [],

    sections: {
      executiveSummary: {
        label: "analysis",
        body:
          "**Author’s Evidence & Methodology Statement:**\n" +
          "This independent case study uses publicly available, cited information to analyse the Standard Life–Moneyhub partnership. The alternative-partner assessment matrix, qualitative evaluation, proposed pilot experimental design, scenario-based cost-per-activation model, and strategic hypotheses represent the author’s own analytical work. They do not represent either organisation's actual internal procurement process, private contractual terms, or proprietary performance data.\n\n" +
          "Standard Life’s partnership with Moneyhub illustrates how a legacy workplace pension provider can pair its distribution and pension administration with an Open Finance fintech platform’s financial management tools. This analysis evaluates the potential value for members, corporate employers, and both partners while distinguishing publicly reported product features from independent commercial hypotheses.\n\n" +
          "To evaluate whether digital engagement drives meaningful action, this study proposes a **Six-Month Employer-Led Onboarding Experiment** to measure activation, sustained usage, and incremental cost per additional activation. The central analytical conclusion is that engagement metrics alone are insufficient to demonstrate commercial or customer value: increased app interaction does not guarantee improved retirement outcomes or asset retention unless accompanied by clear suitability controls and measurable customer financial progress.\n\n" +
          "**Final Recommendation:**\n" +
          "My recommendation is to test enhanced onboarding before wider rollout, proceeding only where the campaign demonstrates practical activation uplift, sustained engagement, acceptable incremental cost, and no unresolved material customer or privacy concerns."
      },

      background: {
        label: "fact",
        body:
          "### Strategic Dimension & Evidence Classification\n\n" +
          "| Strategic Dimension | Verified Facts & Cited Evidence | Analyst Interpretation |\n" +
          "| --- | --- | --- |\n" +
          "| **Corporate Priorities** | Phoenix Group’s 2023 Full Year Results (published March 22, 2024) report a strategic focus on growing organic retail and workplace market share, driving capital efficiency, and supporting customer retention ([Phoenix Group, 2024](https://www.thephoenixgroup.com/investors/results-reports-and-presentations/)). | Digital engagement tools may support Standard Life’s workplace proposition to strengthen scheme retention and capture asset consolidation opportunities in a competitive market. |\n" +
          "| **Target Customers & Decision Makers** | Product relevance depends on scheme structure: corporate employers, scheme trustees, and employee benefit decision-makers serve as institutional buyers/sponsors, while individual scheme members act as end-users. | Solution design must satisfy employer HR/wellbeing agendas while providing daily utility to individual members. |\n" +
          "| **Capabilities & Gaps** | Standard Life provides institutional distribution, pension administration, and investment management ([Standard Life, 2024](https://www.standardlife.co.uk/employer/financial-wellbeing/money-mindset)). | Partnering may reduce internal development requirements, while introducing integration and supplier-management responsibilities. |\n" +
          "| **Governance Framework** | Applicable governance requirements depend on product structure, scheme type, and regulatory roles. Relevant frameworks include the FCA Consumer Duty (FG22/5, published July 2022; effective July 2023 for open products, July 2024 for closed products) ([FCA, 2022](https://www.fca.org.uk/publication/final-guidance/fg22-5.pdf)), Pensions Dashboard obligations, and Independent Governance Committee (IGC) value-for-money oversight. | Standard Life must demonstrate tangible good customer outcomes, clear transparency, and accessible support across diverse member cohorts. |"
      },

      problem: {
        label: "analysis",
        body:
          "### Proposed Target Customer Segment\n\n" +
          "- **Proposed Target Segment:** Defined Contribution (DC) workplace pension members aged 22–55 enrolled via auto-enrolment who use digital financial services (e.g., mobile banking or budgeting apps) but have limited engagement with their pension account.\n" +
          "- **Core Need:** Single-dashboard visibility across fragmented personal finances and actionable tools to manage immediate cash flow while building long-term retirement savings.\n" +
          "- **Research Requirement:** The precise prevalence of these digital behaviours and engagement gaps across auto-enrolled cohorts requires validation through provider data or primary member research.\n\n" +
          "### Industry & Customer Problem\n\n" +
          "- **Structural Disengagement:** While auto-enrolment brought millions into workplace saving, frequent job changes leave savings fragmented across past employers.\n" +
          "- **Scale of the Lost Pensions Problem:** According to the Pensions Policy Institute (PPI) Briefing Note 138 (*Lost Pensions 2024: What’s the Scale Now?*, published October 24, 2024), an estimated **3.3 million lost pension pots containing £31.1 billion in assets** exist across the UK ([Pensions Policy Institute, 2024](https://www.pensionspolicyinstitute.org.uk/research-library/research-reports/2024/briefing-note-138-lost-pensions-2024/)).\n" +
          "- **Commercial Implication for Providers:** Unconsolidated legacy assets represent a potential loss of Assets under Administration (AuA) growth if members migrate off-platform to consumer wealth apps upon changing employers.\n" +
          "- **Development Constraints:** Build-versus-partner trade-offs suggest that developing multi-bank Open Banking API aggregators, real-time transaction categorisers, and dynamic reward engines in-house requires significant ongoing software engineering and API maintenance outside a pension provider's core operating model.\n\n" +
          "### Primary Research Question\n\n" +
          "*How can Standard Life leverage an Open Finance fintech partnership to integrate workplace pensions into daily personal financial management (PFM), driving digital engagement, asset visibility, and financial resilience among scheme members?*"
      },

      fit: {
        label: "analysis",
        body:
          "### Partner Selection Landscape\n\n" +
          "To address the engagement gap, three distinct strategic approaches were identified:\n\n" +
          "- **Turnkey Open Finance & PFM Suite (e.g., Moneyhub):** Pre-built white-label dashboards, multi-asset aggregation, and smart nudges ([Moneyhub, 2024](https://www.moneyhub.com/open-finance-platform)).\n" +
          "- **Developer-First Aggregation Rails (e.g., Tink):** Enterprise Open Banking API connectivity that may require additional interface development or third-party integration depending on the chosen deployment ([Tink, 2024](https://tink.com/products/account-aggregation/)).\n" +
          "- **Payroll & Debt Wellbeing Platforms (e.g., Salary Finance):** Focused on payroll-deducted savings and salary-linked credit ([Salary Finance, 2024](https://www.salaryfinance.com/uk/)); multi-bank account aggregation was not established in the public sources reviewed.\n\n" +
          "### Qualitative Partner Assessment Matrix\n\n" +
          "*Methodology Note: Because Moneyhub is the known selected partner, there is a risk of hindsight bias. The qualitative evaluation below assesses candidates across common requirements using publicly available documentation. Contract terms and proprietary integration costs remain unverified in public sources.*\n\n" +
          "| Evaluation Criterion | Moneyhub | Tink | Salary Finance | Evidence Confidence |\n" +
          "| --- | --- | --- | --- | --- |\n" +
          "| **Member Proposition Fit** | Strong Fit | Moderate Fit | Limited Fit | Assessed from public product documentation ([Moneyhub, 2024](https://www.moneyhub.com/open-finance-platform); [Tink, 2024](https://tink.com/products/account-aggregation/); [Salary Finance, 2024](https://www.salaryfinance.com/uk/)). |\n" +
          "| **Implementation Effort** | Turnkey Suite | Interface / Integration Required | Turnkey Solution | Tink provides flexible API rails; degree of custom front-end development depends on deployment architecture. |\n" +
          "| **Data & Aggregation Scope** | Multi-Asset | Bank Accounts | Payroll / Credit | Assessed from public specs; Moneyhub aggregates bank accounts, mortgages, external pensions, and investments. |\n" +
          "| **Commercial Terms Verification** | Unverified | Unverified | Unverified | Commercial pricing, licensing schedules, and contractual terms remain unverified in public sources. |\n\n" +
          "### Why My Assessment Favours Moneyhub\n\n" +
          "- **Accelerated Time-to-Market:** Moneyhub’s white-label personal financial management (PFM) interface provided a pre-built front-end suite, reducing software development overhead compared to developer-first API rails.\n" +
          "- **Holistic Net-Worth Scope:** Open Finance aggregation allows members to view bank accounts, mortgages, external pensions, and savings side by side, enabling an integrated view of long-term wealth."
      },

      outcomes: {
        label: "fact",
        body:
          "### Publicly Reported Features & Provider Outcomes\n\n" +
          "- **Pension Finder Tool:** Features an integration using a member’s LinkedIn employment history to query the UK Government’s Pension Tracing Service, helping members identify previous pension arrangements and relevant provider contact information ([Standard Life, 2024](https://www.standardlife.co.uk/employer/guides-and-articles/articles/article-page/5-ways-money-mindset-can-help-employees)). *Note: It does not automatically recover funds or execute policy transfers.*\n" +
          "- **Money Mindset Rewards:** Provided via partner Fizz Benefits. Standard Life advertises that members can save an average of £600 per year ([Standard Life, 2024](https://www.standardlife.co.uk/employer/guides-and-articles/articles/article-page/5-ways-money-mindset-can-help-employees)). *Note: Provider-reported figure; actual member savings depend on personal spending patterns.*\n" +
          "- **Member Financial Confidence:** Standard Life publicly reports a **21% increase in financial confidence after six months' use** (attributed to the Money Mindset Pulse Check, June 2024) ([Standard Life, 2024](https://www.standardlife.co.uk/employer/financial-wellbeing/money-mindset)). *Note: Provider-reported survey outcome; does not establish controlled causal effect across all scheme cohorts.*"
      },

      interpretation: {
        label: "analysis",
        body:
          "The Standard Life × Moneyhub collaboration highlights a pivotal transition in the UK pensions sector: shifting from passive regulatory compliance toward active customer relationship management. By embedding pensions into day-to-day Open Finance tools, Standard Life reframes retirement savings from a dormant yearly statement into a visible component of household net worth.\n\n" +
          "However, engagement alone does not equal value. Increased app opens and logins can create vanity metrics without improving retirement readiness unless members take meaningful, informed financial actions. Furthermore, consolidating pensions into Standard Life represents commercial AuA retention for the provider, which must strictly align with the member's best financial interests under the FCA Consumer Duty."
      },

      risks: {
        label: "analysis",
        body:
          "### Operational Roles & Customer Safeguards\n\n" +
          "| Partner / Stakeholder | Proposed Delivery Responsibilities |\n" +
          "| --- | --- |\n" +
          "| **Pension Provider (Standard Life)** | Approves member communications and onboarding content; coordinates customer support channels and guidance teams; manages pension tracing workflows and advice routing. |\n" +
          "| **Technology Partner (Moneyhub)** | Maintains Open Finance API rails, portal uptime, and platform security; delivers aggregated, anonymized usage reporting; ensures compliance with technical SLAs. |\n" +
          "| **Corporate Employers (HR Teams)** | Distributes approved onboarding communications; coordinates internal HR wellbeing workshops; facilitates qualitative employee feedback. |\n" +
          "| **Governance Teams** | Conduct agreed privacy, security, conduct, and measurement reviews. |\n\n" +
          "### Statutory Advice Requirements & Technical Due Diligence\n\n" +
          "- **Statutory Advice Trigger:** The pilot will not recommend or execute policy transfers as part of its engagement intervention. Where safeguarded benefits worth more than £30,000 under a scheme are being transferred to acquire flexible benefits, appropriate independent advice from an FCA-authorised adviser is required ([Department for Work and Pensions, 2016](https://www.gov.uk/government/publications/pension-benefits-with-a-guarantee-and-the-advice-requirement)). The applicable requirements must be checked for the member’s specific arrangement.\n" +
          "- **Data Security Due Diligence:** Technical security claims—such as read-only API permissions, ISO 27001 certification, and individual data privacy (*'employers cannot access individual member balances'*)—must be verified through technical due diligence during procurement rather than accepted as automatic facts."
      },

      lessons: {
        label: "analysis",
        body:
          "### Key Strategic Lessons for Partnership Practitioners\n\n" +
          "- **Look Beyond Vanity Engagement:** A successful strategic partnership must connect interface engagement (app downloads, logins) to tangible financial outcomes and risk governance.\n" +
          "- **Align Multi-Sided Stakeholder Incentives:** In workplace distribution, the proposition must provide measurable productivity/wellbeing value to employers (the buyer/sponsor) while delivering daily practical utility to employees (the end-user).\n" +
          "- **Pilot Before Scaling:** Rigorous pilot testing with clear control cohorts and unit economics protects capital and validates partner integration claims before committing to multi-million pound enterprise rollouts."
      }
    },

    // Who contributes what, and who gains what (Value Contribution Map)
    parties: [
      {
        name: "Standard Life",
        role: "company",
        note: "Distribution & Pension Administration",
        contributes: [
          "Enterprise distribution & corporate corporate scheme network",
          "Regulatory framework, master trust governance & pension products",
          "Access to millions of auto-enrolled workplace scheme members"
        ],
        gains: [
          "Enhanced member app engagement & daily account visibility",
          "Retention pathways against digital wealth apps",
          "Suitable pension consolidation opportunities (subject to suitability checks & Consumer Duty)"
        ]
      },
      {
        name: "Moneyhub",
        role: "company",
        note: "Open Finance Technology Provider",
        contributes: [
          "Open Finance API aggregation rails (banks, mortgages, pensions)",
          "White-label PFM interface & portal ('Money Mindset')",
          "Dynamic nudges, spending categoriser & financial management tools"
        ],
        gains: [
          "Enterprise software deployment scale across millions of lives",
          "Strategic adoption and recurring SaaS revenue from a major UK life insurer",
          "Validation of Open Finance platform capabilities in institutional workplace markets"
        ]
      },
      {
        name: "Scheme Member",
        role: "customer",
        note: "Workplace Pension Members & Corporate Employers",
        contributes: [
          "Scheme participation & active digital financial data sharing",
          "Consent for Open Banking / Open Finance read-only data connections"
        ],
        gains: [
          "Access at no additional member charge (funded via workplace scheme)",
          "Consolidated net-worth dashboard (Banking, Pensions, Mortgages, Savings)",
          "Pension Finder tool to identify lost pots via Government tracing service",
          "Money Mindset Rewards via Fizz Benefits (advertised average savings of £600/year)"
        ]
      }
    ],

    // Bespoke sections for detailed analysis
    customSections: [
      {
        id: "experimental-pilot",
        title: "Experimental Design: Proposed Six-Month Onboarding Pilot",
        label: "hypothetical",
        body:
          "### Core Hypothesis & Test Design\n\n" +
          "**Primary Research Question:** Does a structured, employer-led onboarding campaign increase initial registration rates within 60 days compared to standard baseline digital onboarding communications?\n\n" +
          "| Cohort | Sample Size | Intervention Description | Primary Target Window |\n" +
          "| --- | --- | --- | --- |\n" +
          "| **Cohort A (Control)** | 10,000 Members | Standard baseline digital onboarding email. | Month 2 (60-Day Activation) |\n" +
          "| **Cohort B (Treatment)** | 10,000 Members | Multi-channel campaign (HR workshops, employer app nudges, wellbeing toolkits). | Month 2 (60-Day Activation) |\n\n" +
          "### Sampling, Allocation & Contamination Control\n\n" +
          "- **Randomised Allocation:** Participants are randomly assigned in equal proportions within each employer. Baseline characteristics will be checked, and analysis will account for employer membership.\n" +
          "- **Exclusion Criteria:** Members already registered before launch are excluded from the new-registration analysis. Existing inactive users may be evaluated separately in a reactivation study.\n" +
          "- **Contamination Risk:** Cohort-specific invitations will be used where feasible. Any employer-wide workshops or broadcast communications that expose Cohort A to the treatment intervention will be documented as a contamination risk that may dilute the observed effect size.\n\n" +
          "### Primary & Secondary Outcome Definitions\n\n" +
          "| Metric Type | Metric Name | Precise Definition & Operationalisation | Target / Threshold |\n" +
          "| --- | --- | --- | --- |\n" +
          "| **PRIMARY** | **Activation Rate** | Difference in registration rates between Cohort B and Cohort A within 60 days of campaign launch across all assigned eligible members. | Test for statistically significant uplift in Cohort B |\n" +
          "| Secondary | Account Linking | Percentage of activated users who connect at least one external bank account or secondary pension. | >= 35% of activated users |\n" +
          "| Secondary | Sustained Usage (Sample) | Percentage of activated users recording at least one qualifying session (>= 30 seconds reviewing dashboards or nudges) in each of Months 4, 5, and 6 (descriptive retention measure). | Compare retention rates between activated subsets |\n" +
          "| Secondary | Intention-to-Treat Sustained Engagement | Percentage of all assigned members (intention-to-treat) recording a qualifying session in each of Months 4, 5, and 6 (outcome measure). | Compare overall sustained engagement across cohorts |\n" +
          "| Secondary | Pension Action | Tracked use of the Pension Finder tool, formal consolidation enquiries, and completed transfers (tracked as separate conversion funnels). | Tracked separately from registration |\n" +
          "| Secondary | Financial Confidence | Difference in change in average 1–10 survey score between groups from Month 0 to Month 6; report absolute score change, response rates, and sample limitations. | Evaluate net change between cohorts |"
      },
      {
        id: "commercial-economics",
        title: "Commercial Delivery Economics & Cost Analysis",
        label: "assumption",
        body:
          "### Incremental Campaign Cost vs. Platform Economics\n\n" +
          "To evaluate commercial feasibility, we separate incremental pilot campaign costs (experiment-specific communications and analytics) from overarching annual software platform licensing fees.\n\n" +
          "- **Campaign Content, HR Toolkits & Workshop Execution:** £30,000\n" +
          "- **Dedicated Analytics & Measurement Support:** £15,000\n" +
          "- **Total Incremental Campaign Cost:** £45,000\n\n" +
          "*Context Note: The £45,000 represents assumed pilot-specific expenditure above business-as-usual communications, including enhanced campaign delivery and evaluation. Evaluation costs are shown separately because they may not recur at the same level during wider rollout.*\n\n" +
          "- **Overarching Platform License Fee (Illustrative Modelling Assumption):** Assumed annual licence rate: £1.50 per eligible member × 20,000 eligible members = £30,000/year (Note: Billed annually at £30,000, or £15,000 if pro-rated for 6 months; this rate is an arbitrary modelling assumption, not an established contract price).\n\n" +
          "### Activation & Cost-per-Activation Scenarios\n\n" +
          "The table below illustrates how different activation outcomes affect unit delivery economics:\n\n" +
          "| Scenario Description | Cohort A Activations (Baseline) | Cohort B Activations (Enhanced) | Total Activations | Incremental Cost per Additional Activation | Illustrative Allocated Cost per Activated User |\n" +
          "| --- | --- | --- | --- | --- | --- |\n" +
          "| **Scenario 1: Base Case** | Cohort A = 10% (1,000) | Cohort B = 20% (2,000) | 3,000 | **£45.00** (£45k campaign / 1,000 incremental) | **£25.00** (£75k total cost / 3,000 users) |\n" +
          "| **Scenario 2: Higher Overall Adoption** | Cohort A = 15% (1,500) | Cohort B = 25% (2,500) | 4,000 | **£45.00** (£45k campaign / 1,000 incremental) | **£18.75** (£75k total cost / 4,000 users) |\n" +
          "| **Scenario 3: Low Uplift** | Cohort A = 10% (1,000) | Cohort B = 12% (1,200) | 2,200 | **£225.00** (£45k campaign / 200 incremental) | **£34.09** (£75k total cost / 2,200 users) |\n\n" +
          "*Note: Illustrative allocated cost assumes £45,000 incremental campaign cost + £30,000 full annual licence fee = £75,000 total investment. Any revenue or profitability estimate requires separate assumptions regarding ongoing management charges, platform servicing margins, and policy retention.*\n\n" +
          "### Proposed Decision Framework\n\n" +
          "| Decision | Proposed Management Rule (Illustrative Assumptions) |\n" +
          "| --- | --- |\n" +
          "| **Go / Expand** | Activation uplift meets the pre-agreed threshold (e.g., >= 5 percentage points over baseline), sustained usage is acceptable, incremental cost per additional activation is within the approved ceiling (e.g., <= £75), and no material customer or privacy issue remains unresolved. |\n" +
          "| **Revise / Extend** | Results are promising but uncertain, sustained usage is weak, or cost falls within a pre-agreed review range (e.g., £75–£150). |\n" +
          "| **Stop / Pause** | Results indicate insufficient practical benefit, cost exceeds the approved maximum (e.g., > £150), or a material customer/privacy concern requires intervention. |"
      },
      {
        id: "presentation-deck",
        title: "The partnership in 10 slides",
        description: "Explore an executive summary of the opportunity, partner fit, evidence and proposed pilot.",
        label: "analysis",
        disclaimer: "Independent analysis by Ritul Sawant. Not an official company presentation.",
        slides: [
          {
            num: 1,
            category: "Strategic Context",
            title: "Connecting workplace pensions with everyday financial life",
            summary: "Independent analysis exploring how Standard Life pairs institutional scale and administration with Moneyhub's Open Finance to tackle member disengagement.",
            label: "analysis",
            diagram: {
              from: "Standard Life (Admin & Scale)",
              partner: "Moneyhub (Open Finance Rails)",
              result: "Money Mindset (Everyday Dashboard)"
            },
            bullets: [
              "Pairs legacy workplace pension administration with modern Open Finance data aggregation rails.",
              "Bridges the gap between daily cash-flow visibility and long-term retirement planning.",
              "Evaluates commercial feasibility, pilot delivery economics, and regulatory suitability."
            ],
            anchor: "executive-summary",
            anchorText: "Read executive summary"
          },
          {
            num: 2,
            category: "Problem Definition",
            title: "£31.1B in lost pensions across 3.3 million UK pots",
            summary: "Automatic enrolment expands pension participation, but frequent job turnover leaves millions of fragmented DC pots disconnected from everyday awareness.",
            label: "fact",
            bullets: [
              "Average UK worker holds approximately 11 jobs across their working lifetime.",
              "Value of lost or unclaimed UK pension pots rose from £19.4B in 2018 to £31.1B in 2024 (Pensions Policy Institute).",
              "Lack of day-to-day utility leaves members disengaged until retirement approaches."
            ],
            anchor: "problem",
            anchorText: "Read problem analysis"
          },
          {
            num: 3,
            category: "Target Provider",
            title: "Standard Life: Workplace scale and regulatory imperatives",
            summary: "Phoenix Group prioritises workplace market share, capital efficiency, and customer retention under FCA Consumer Duty requirements.",
            label: "fact",
            bullets: [
              "Scale provider serving millions of workplace pension members across UK corporate schemes.",
              "FCA Consumer Duty (FG22/5) mandates verifiable evidence of good member outcomes and accessible support.",
              "Strategic need to defend scheme retention against agile digital wealth apps and consolidation leakage."
            ],
            anchor: "company-background",
            anchorText: "Read company background"
          },
          {
            num: 4,
            category: "Partner Selection",
            title: "Qualitative assessment favours turnkey Open Finance",
            summary: "Evaluating Open Finance and wellbeing specialists shows why a turnkey multi-asset aggregator offered the strongest strategic fit.",
            label: "analysis",
            bullets: [
              "Moneyhub: Turnkey multi-asset PFM and FCA-regulated Open Finance aggregation across banks, investments, and pensions.",
              "Tink: Powerful Open Banking API rails, but requires custom client front-end development.",
              "Salary Finance: Strong employer benefits and debt focus, but narrower Open Finance data scope."
            ],
            anchor: "partner-fit",
            anchorText: "Read partner landscape"
          },
          {
            num: 5,
            category: "Value Architecture",
            title: "Money Mindset: Joint proposition architecture",
            summary: "Standard Life distribution pairs with Moneyhub Open Finance rails to deliver a single net-worth view for members.",
            label: "analysis",
            diagram: {
              from: "Employer Schemes (Distribution)",
              partner: "Open Finance APIs (Multi-Bank Aggregation)",
              result: "Money Mindset (Unified View)"
            },
            bullets: [
              "Member value: Unified dashboard connecting current accounts, loans, mortgages, and pensions.",
              "Employer value: Turnkey employee financial wellbeing toolkit with zero payroll integration friction.",
              "Provider value: Protects scheme retention and surfaces consolidation visibility within Consumer Duty safeguards."
            ],
            anchor: "contributions",
            anchorText: "Read value creation"
          },
          {
            num: 6,
            category: "Reported Outcomes",
            title: "Reported outcomes: Pension Finder & 21% confidence uplift",
            summary: "Standard Life reports active tool adoption and positive pulse-check improvements in employee financial confidence.",
            label: "provider",
            bullets: [
              "Career-tracking Pension Finder tool using LinkedIn employment history to trace forgotten pots.",
              "Embedded Fizz Benefits rewards offering up to £600 advertised annual member savings.",
              "21% reported increase in financial confidence among engaged application users."
            ],
            anchor: "outcomes",
            anchorText: "Read reported outcomes"
          },
          {
            num: 7,
            category: "Experimental Blueprint",
            title: "Six-month employer onboarding RCT (20,000 members)",
            summary: "A proposed randomised controlled trial testing whether proactive employer-led onboarding yields genuine activation uplift over standard email.",
            label: "hypothetical",
            bullets: [
              "Cohort A (Control): 10,000 members receiving standard baseline digital onboarding email.",
              "Cohort B (Treatment): 10,000 members receiving HR workshops, app nudges, and toolkits.",
              "Primary measure: 60-day activation rate; secondary: 6-month sustained engagement and pension finder actions."
            ],
            anchor: "experimental-pilot",
            anchorText: "Read pilot blueprint"
          },
          {
            num: 8,
            category: "Delivery Economics",
            title: "Scenario-based incremental cost per activation",
            summary: "Illustrative commercial modelling demonstrates that unit delivery economics vary sharply with campaign adoption rates.",
            label: "assumption",
            bullets: [
              "£45,000 incremental campaign spend (£30,000 workshops & delivery + £15,000 measurement & analytics).",
              "Base Case (+10% uplift): £45.00 incremental cost per additional activation (£45k / 1,000 incremental users).",
              "Low Uplift (+2% uplift): £225.00 incremental cost per additional activation (£45k / 200 incremental users)."
            ],
            anchor: "commercial-economics",
            anchorText: "Read delivery economics"
          },
          {
            num: 9,
            category: "Safeguards & Governance",
            title: "Statutory advice rules and technical security audits",
            summary: "Robust compliance safeguards and independent technical due diligence are essential to protect member interests.",
            label: "analysis",
            bullets: [
              "£30,000 statutory advice threshold strictly enforced for safeguarded Defined Benefit transfers.",
              "Independent technical audits required to verify vendor ISO 27001 certification and encryption standards.",
              "Consumer Duty mandates continuous monitoring to ensure digital engagement produces genuine financial progress."
            ],
            anchor: "risks",
            anchorText: "Read safeguards & risks"
          },
          {
            num: 10,
            category: "Executive Takeaway",
            title: "Test enhanced onboarding before wider rollout",
            summary: "Proceed with commercial expansion only when the pilot demonstrates proven activation uplift, sustained usage, and acceptable unit costs.",
            label: "analysis",
            bullets: [
              "Increased app interaction alone does not guarantee improved retirement outcomes or asset retention.",
              "Establish pre-agreed Go/Stop gates (e.g. <= £75 incremental cost ceiling, >= 5% uplift).",
              "Pair digital engagement with clear member suitability safeguards and transparent governance."
            ],
            anchor: "lessons",
            anchorText: "Read lessons learned"
          }
        ]
      }
    ],

    sources: [
      {
        title: "Briefing Note 138 - Lost Pensions 2024: What’s the Scale Now?",
        publisher: "Pensions Policy Institute",
        date: "2024-10-24",
        url: "https://www.pensionspolicyinstitute.org.uk/research-library/research-reports/2024/briefing-note-138-lost-pensions-2024/",
        kind: "primary"
      },
      {
        title: "Phoenix Group Holdings plc 2023 Full Year Results",
        publisher: "Phoenix Group",
        date: "2024-03-22",
        url: "https://www.thephoenixgroup.com/investors/results-reports-and-presentations/",
        kind: "primary"
      },
      {
        title: "Final Guidance on the Consumer Duty (FG22/5)",
        publisher: "Financial Conduct Authority (FCA)",
        date: "2022-07-01",
        url: "https://www.fca.org.uk/publication/final-guidance/fg22-5.pdf",
        kind: "primary"
      },
      {
        title: "Money Mindset | Standard Life Employer",
        publisher: "Standard Life",
        date: "2024-06-01",
        url: "https://www.standardlife.co.uk/employer/financial-wellbeing/money-mindset",
        kind: "primary"
      },
      {
        title: "5 ways Money Mindset can help employees make sense of their money",
        publisher: "Standard Life",
        date: "2024-06-01",
        url: "https://www.standardlife.co.uk/employer/guides-and-articles/articles/article-page/5-ways-money-mindset-can-help-employees",
        kind: "primary"
      },
      {
        title: "Enterprise Open Finance Platform & Smart Personal Financial Management Suite",
        publisher: "Moneyhub Financial Technology",
        date: "2024-01-01",
        url: "https://www.moneyhub.com/open-finance-platform",
        kind: "primary"
      },
      {
        title: "Account Aggregation API Infrastructure",
        publisher: "Tink AB",
        date: "2024-01-01",
        url: "https://tink.com/products/account-aggregation/",
        kind: "secondary"
      },
      {
        title: "Financial Wellbeing & Employee Benefits Platform",
        publisher: "Salary Finance UK",
        date: "2024-01-01",
        url: "https://www.salaryfinance.com/uk/",
        kind: "secondary"
      },
      {
        title: "Pension benefits with a guarantee and the advice requirement",
        publisher: "Department for Work and Pensions (DWP)",
        date: "2016-01-27",
        url: "https://www.gov.uk/government/publications/pension-benefits-with-a-guarantee-and-the-advice-requirement",
        kind: "primary"
      }
    ]
  },

  {
    slug: "spotify-uber",
    title: "Spotify × Uber",
    companies: ["Spotify", "Uber"],
    sector: "Consumer technology",
    partnershipType: "Product integration",
    typeNote: "Provisional classification — to be confirmed once sources are reviewed.",
    summary:
      "Draft analysis of a cross-industry partnership between a music-streaming service and a ride-hailing platform, " +
      "looking at how two consumer apps combined to change part of the in-ride experience.",
    status: "draft",
    featured: false,
    lastReviewed: null,

    // Starting points only. NOT verified — check against primary sources before moving into a section.
    researchLeads: [
      "Commonly reported: around late 2014 the companies launched a feature letting Uber riders play music from their own Spotify account during a trip. Confirm the announcement date, launch markets and how the feature worked from the companies' own announcements.",
      "Find out whether the feature is still available, and if not, when and why it changed."
    ],

    sections: {
      executiveSummary: { label: "analysis", body: "", hint: "Write last: what the partnership was, why it existed, and my overall view." },
      background: { label: "fact", body: "", hint: "Each company's position and priorities at the time of the partnership." },
      problem: { label: "analysis", body: "", hint: "What rider, driver or business problem the integration aimed to solve." },
      fit: { label: "analysis", body: "", hint: "Why a music service and a mobility platform were a logical pairing." },
      outcomes: { label: "fact", body: "", hint: "Publicly reported results only. Record clearly if none were disclosed." },
      interpretation: { label: "analysis", body: "", hint: "My view on what made it work (or not) and what it signalled." },
      risks: { label: "analysis", body: "", hint: "Driver experience, licensing, platform dependency, limits of public data." },
      lessons: { label: "analysis", body: "", hint: "Lessons for consumer-brand integrations." }
    },

    parties: [
      { name: "Spotify", role: "company", contributes: [], gains: [] },
      { name: "Uber", role: "company", contributes: [], gains: [] },
      { name: "Riders", role: "customer", note: "Drivers may also be a relevant stakeholder", contributes: [], gains: [] }
    ],

    sources: []
  }
];
