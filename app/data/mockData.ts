export interface Agent {
  id: string;
  name: string;
  calls: number;
  callScore: number;
  avgCallTime: string;
  satisfactionScore: number;
  callbackScore: number;
}

export interface KPIData {
  numberOfCalls: number;
  avgCustomerSatisfaction: number;
  avgCallTime: string;
  callbackRate: number;
}

export interface PerformanceEvaluation {
  agentName: string;
  rating: number;
  maxRating: number;
}

export interface FeedbackData {
  category: string;
  percentage: number;
  color: string;
}

export interface Team {
  id: string;
  name: string;
  memberCount?: number;
  status: 'active' | 'inactive';
}

export const kpiData: KPIData = {
  numberOfCalls: 13966,
  avgCustomerSatisfaction: 78.92,
  avgCallTime: "4:58",
  callbackRate: 4.58
};

export const performanceEvaluations: PerformanceEvaluation[] = [
  { agentName: "Andrea Weinman", rating: 4, maxRating: 5 },
  { agentName: "Ahmed Hanif", rating: 3, maxRating: 5 }
];

export const feedbackData: FeedbackData[] = [
  { category: "Not related to line answer", percentage: 4.5, color: "#FF6B6B" },
  { category: "Office not knowing the answer", percentage: 58.2, color: "#4ECDC4" },
  { category: "Office not providing the solution", percentage: 24.4, color: "#45B7D1" },
  { category: "Office not reaching the solution", percentage: 12.9, color: "#96CEB4" }
];

export const agentsData: Agent[] = [
  {
    id: "1",
    name: "Agent Johnson",
    calls: 99,
    callScore: 77.80,
    avgCallTime: "3:29",
    satisfactionScore: 4.90,
    callbackScore: 160.52
  },
  {
    id: "2", 
    name: "Anita Johnson",
    calls: 99,
    callScore: 77.80,
    avgCallTime: "3:29",
    satisfactionScore: 4.90,
    callbackScore: 160.52
  },
  {
    id: "3",
    name: "Anabel Johnson", 
    calls: 86,
    callScore: 65.36,
    avgCallTime: "4:37",
    satisfactionScore: 4.18,
    callbackScore: 26.38
  },
  {
    id: "4",
    name: "Anabel Maier",
    calls: 165,
    callScore: 78.63,
    avgCallTime: "4:18",
    satisfactionScore: 4.18,
    callbackScore: 26.38
  },
  {
    id: "5",
    name: "Anabel Patel",
    calls: 342,
    callScore: 76.32,
    avgCallTime: "3:36",
    satisfactionScore: 4.24,
    callbackScore: 26.38
  },
  {
    id: "6",
    name: "Ahmed Hanif",
    calls: 342,
    callScore: 64.12,
    avgCallTime: "4:36",
    satisfactionScore: 4.36,
    callbackScore: 26.38
  },
  {
    id: "7",
    name: "Ahmed Paris",
    calls: 267,
    callScore: 32.31,
    avgCallTime: "3:24",
    satisfactionScore: 4.24,
    callbackScore: 26.38
  },
  {
    id: "8",
    name: "Ahmed Ubaid",
    calls: 89,
    callScore: 62.49,
    avgCallTime: "2:14",
    satisfactionScore: 4.74,
    callbackScore: 26.38
  },
  {
    id: "9",
    name: "Anil Hansen",
    calls: 94,
    callScore: 81.04,
    avgCallTime: "3:22",
    satisfactionScore: 3.22,
    callbackScore: 26.38
  }
];

export const callVolumeData = [
  { date: "2023-06-12", calls: 8000 },
  { date: "2023-06-13", calls: 6000 },
  { date: "2023-06-14", calls: 4000 },
  { date: "2023-06-15", calls: 2000 },
  { date: "2023-06-16", calls: 6000 },
  { date: "2023-06-17", calls: 8000 },
  { date: "2023-06-18", calls: 10000 },
  { date: "2023-06-19", calls: 4000 },
  { date: "2023-06-20", calls: 2000 },
  { date: "2023-06-21", calls: 6000 },
  { date: "2023-06-22", calls: 8000 },
  { date: "2023-06-23", calls: 4000 },
  { date: "2023-06-24", calls: 6000 }
];

export const teamsData: Team[] = [
  { id: "1", name: "Carecloud Tech Support", status: 'active' },
  { id: "2", name: "Client Success 1", status: 'active' },
  { id: "3", name: "Client Success 2", status: 'active' },
  { id: "4", name: "Crm Talkehr", status: 'active' },
  { id: "5", name: "Fox Client Services", status: 'active' },
  { id: "6", name: "Fox Opphy", status: 'active' },
  { id: "7", name: "Fox Phd", status: 'active' },
  { id: "8", name: "Fox Poc", status: 'active' },
  { id: "9", name: "Fox Referral Source", status: 'active' },
  { id: "10", name: "Fox Welcome", status: 'active' },
  { id: "11", name: "Frontdesk-Va", status: 'active' },
  { id: "12", name: "Phd Cch", status: 'active' },
  { id: "13", name: "Phd Mis", status: 'active' },
  { id: "14", name: "Phd Orion Rand", status: 'active' },
  { id: "15", name: "Referral Source Specialist", status: 'active' },
  { id: "16", name: "Vob Intakes Team", status: 'active' },
  { id: "17", name: "Vob Team", status: 'active' },
  { id: "18", name: "Vob-Auth", status: 'active' }
];
