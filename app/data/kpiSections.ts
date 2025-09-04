export interface KPIQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface KPISection {
  name: string;
  totalKpis: number;
  questions: KPIQuestion[];
}

export interface KPISections {
  [key: string]: KPISection;
}

export const kpiSections: KPISections = {
  'crm-talkehr': {
    name: "Crm Talkehr",
    totalKpis: 18,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent use an appropriate and professional greeting?",
        answer: "Personalized + friendly + name used + warm tone. (10 score), Standard greeting, warm tone. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent verify the caller's identity?",
        answer: "Fully follows verification steps. (10 score), Minor lapses, all required details asked. (7 score), If not applicable, 10 score."
      },
      {
        id: 3,
        question: "Question 3: Did the agent check previously reported issues and review existing tickets?",
        answer: "Agent explicitly confirms reviewing prior tickets/issues and references details from them. (10 score)."
      },
      {
        id: 4,
        question: "Question 4: Did the agent display genuine compassion and empathy?",
        answer: "Consistently empathetic, proactive, attentive. (10 score), Mostly empathetic, minor misses. (7 score)."
      },
      {
        id: 5,
        question: "Question 5: Did the agent exhibit strong product and process knowledge?",
        answer: "Expert knowledge, anticipates needs. (10 score), Good understanding, mostly accurate. (7 score), Very knowledgeable..."
      },
      {
        id: 6,
        question: "Question 6: Did the agent effectively manage holds and call transfers?",
        answer: "Agent clearly explains the reason for the hold/transfer, asks for permission, states expected wait time."
      },
      {
        id: 7,
        question: "Question 7: Did the agent assess first contact resolution (FCR)?",
        answer: "Agent explicitly confirms with the caller that the issue has been fully resolved and no further follow..."
      },
      {
        id: 8,
        question: "Question 8: Did the agent proactively confirm if there were any additional concerns?",
        answer: "Agent clearly and proactively asks if the caller has any other questions, issues, or concerns before e..."
      },
      {
        id: 9,
        question: "Question 9: Did the agent close the interaction with courtesy and clarity?",
        answer: "Warm, polite goodbye, includes if anything else question is asked (10 score), Good closing includes..."
      }
    ]
  },
  'carecloud-tech': {
    name: "Carecloud Tech Support",
    totalKpis: 15,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent properly identify the technical issue?",
        answer: "Agent accurately diagnoses the problem within first 2 minutes. (10 score), Takes longer but identifies correctly. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent provide clear technical explanations?",
        answer: "Uses simple, non-technical language that customer understands. (10 score), Generally clear with minor confusion. (7 score)"
      },
      {
        id: 3,
        question: "Question 3: Did the agent follow proper troubleshooting steps?",
        answer: "Follows systematic approach, documents all steps taken. (10 score), Minor deviations but reaches solution. (7 score)"
      },
      {
        id: 4,
        question: "Question 4: Did the agent ensure issue resolution before closing?",
        answer: "Confirms functionality with customer, provides additional resources. (10 score), Basic confirmation only. (7 score)"
      },
      {
        id: 5,
        question: "Question 5: Did the agent offer preventive measures?",
        answer: "Provides helpful tips to prevent future issues. (10 score), Basic prevention advice given. (7 score)"
      }
    ]
  },
  'client-success-1': {
    name: "Client Success 1",
    totalKpis: 12,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent understand client's business needs?",
        answer: "Demonstrates deep understanding of client's industry and challenges. (10 score), Good general understanding. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent provide strategic recommendations?",
        answer: "Offers actionable, value-driven suggestions. (10 score), Basic recommendations provided. (7 score)"
      },
      {
        id: 3,
        question: "Question 3: Did the agent follow up on previous commitments?",
        answer: "References and updates on all previous action items. (10 score), Some follow-up provided. (7 score)"
      },
      {
        id: 4,
        question: "Question 4: Did the agent identify upselling opportunities?",
        answer: "Naturally identifies and presents relevant additional services. (10 score), Basic upselling attempts. (7 score)"
      }
    ]
  },
  'client-success-2': {
    name: "Client Success 2",
    totalKpis: 14,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent maintain professional relationship tone?",
        answer: "Builds rapport while maintaining professional boundaries. (10 score), Generally professional. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent document client interactions properly?",
        answer: "Comprehensive notes with actionable next steps. (10 score), Basic documentation completed. (7 score)"
      },
      {
        id: 3,
        question: "Question 3: Did the agent escalate when appropriate?",
        answer: "Recognizes limits and escalates proactively. (10 score), Escalates when necessary. (7 score)"
      }
    ]
  },
  'phd-cch': {
    name: "Phd Cch",
    totalKpis: 16,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent demonstrate clinical knowledge?",
        answer: "Shows deep understanding of medical procedures and terminology. (10 score), Adequate clinical knowledge. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent maintain patient confidentiality?",
        answer: "Strictly follows HIPAA guidelines and privacy protocols. (10 score), Generally maintains privacy. (7 score)"
      },
      {
        id: 3,
        question: "Question 3: Did the agent provide clear medical guidance?",
        answer: "Clear, accurate medical information provided. (10 score), Generally accurate guidance. (7 score)"
      }
    ]
  },
  'phd-mis': {
    name: "Phd Mis",
    totalKpis: 13,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent handle medical information systems properly?",
        answer: "Expert navigation of medical systems and databases. (10 score), Competent system usage. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent ensure data accuracy?",
        answer: "Verifies and validates all medical data entries. (10 score), Generally accurate data handling. (7 score)"
      }
    ]
  },
  'phd-orion': {
    name: "Phd Orion Rand",
    totalKpis: 11,
    questions: [
      {
        id: 1,
        question: "Question 1: Did the agent follow Orion protocols?",
        answer: "Strictly adheres to all Orion-specific procedures. (10 score), Generally follows protocols. (7 score)"
      },
      {
        id: 2,
        question: "Question 2: Did the agent maintain quality standards?",
        answer: "Exceeds quality benchmarks consistently. (10 score), Meets basic quality standards. (7 score)"
      }
    ]
  }
};
