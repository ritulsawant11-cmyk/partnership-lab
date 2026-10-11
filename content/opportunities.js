/*
 * OPPORTUNITY LAB — original, hypothetical partnership proposals.
 *
 * Every proposal is shown with the label:
 *   "Hypothetical proposal—not an announced partnership."
 *
 * HOW TO EDIT
 * - Text accepts simple Markdown (see case-studies.js).
 * - Empty strings / empty lists show "Research to be added".
 * - Comparison matrix: `scores` has one row per criterion, one value per candidate
 *   (1–5, or null if not yet scored). Weights are percentages and should total 100.
 */
window.PL = window.PL || {};

PL.opportunities = [
  {
    slug: "workplace-pension-partner-discovery",
    title: "Workplace Pension Partner Discovery",
    sector: "Financial services",
    partnershipType: "To be determined",
    summary:
      "An early-stage exploration of which kind of partner could help a UK workplace pension provider make pensions " +
      "more relevant to members' day-to-day financial lives. Target company and partner shortlist are still to be researched.",
    status: "draft",
    featured: true,
    lastReviewed: null,

    researchQuestion:
      "*Draft — to be refined.* Which type of partner could help a workplace pension provider increase meaningful member engagement, " +
      "and what would a low-risk pilot to test that partnership look like?",

    targetCompany: {
      name: "",
      rationale: "",
      hint: "Select one UK workplace pension provider and record why (scale, stated strategy, customer base) with sources."
    },

    customerProblem: {
      body: "",
      hint: "Define the member problem using published research (e.g. regulator or industry surveys). Avoid assuming the problem — evidence it."
    },

    // Partner categories are my working hypothesis. Specific companies are still to be identified.
    shortlist: [
      { name: "Candidate A", category: "Financial-wellbeing or budgeting app", note: "Specific company to be identified" },
      { name: "Candidate B", category: "Payroll or HR software platform", note: "Specific company to be identified" },
      { name: "Candidate C", category: "Employee-benefits platform", note: "Specific company to be identified" }
    ],

    matrix: {
      scale: "1 = weak fit, 5 = strong fit. Scores not yet assigned.",
      criteria: [
        { name: "Customer overlap", weight: 20, description: "Does the partner already reach the same members or employers?" },
        { name: "Strategic alignment", weight: 20, description: "Do both companies' stated priorities point the same way?" },
        { name: "Capability complementarity", weight: 20, description: "Does the partner bring something the pension provider lacks?" },
        { name: "Mutual commercial benefit", weight: 15, description: "Does each side have a clear reason to invest?" },
        { name: "Execution complexity", weight: 15, description: "Integration, data sharing and operating effort (higher score = simpler)." },
        { name: "Regulatory and reputational risk", weight: 10, description: "Consumer-duty, data-protection and brand considerations (higher score = lower risk)." }
      ],
      candidates: ["Candidate A", "Candidate B", "Candidate C"],
      scores: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    },

    recommended: {
      name: "",
      rationale: "",
      hint: "Recommend only after the matrix is scored and the reasoning is written up."
    },

    rejected: [],

    // Mutual value proposition, shown as a value map.
    parties: [
      { name: "Pension provider", role: "company", note: "Target company to be selected", contributes: [], gains: [] },
      { name: "Partner", role: "company", note: "Partner to be selected", contributes: [], gains: [] },
      { name: "Members and employers", role: "customer", contributes: [], gains: [] }
    ],

    pilot: {
      body: "",
      hint: "Scope, member segment, duration, what each side provides, and the go / no-go decision point."
    },

    successMeasures: [],

    risks: [],

    assumptions: [
      "Working assumption (untested): member engagement with workplace pensions is low enough to be a problem worth solving. Needs evidence.",
      "Working assumption (untested): a third party that members already use could be a more effective engagement channel than the provider alone."
    ],

    openQuestions: [
      "Which pension provider should be the target, and what does it say publicly about member engagement?",
      "What published data exists on member engagement and its drivers?",
      "Which specific companies belong in each partner category?",
      "What regulatory considerations apply to sharing member data with a third party?",
      "How would each side measure commercial value from a pilot?"
    ]
  }
];
