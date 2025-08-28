# Dashboard Project

A modern call center analytics dashboard built with Next.js and Elastic UI.

## Project Structure

```
app/
├── components/              # Reusable dashboard components
│   ├── header/             # Header components
│   │   └── DashboardHeader.tsx
│   ├── kpi/                # KPI and metrics components
│   │   └── KPICards.tsx
│   ├── performance/        # Performance evaluation components
│   │   ├── PerformanceEvaluation.tsx
│   │   └── AssetFeedback.tsx
│   ├── agents/             # Agent-related components
│   │   └── AgentsTable.tsx
│   ├── charts/             # Chart and visualization components
│   │   └── CallVolumeChart.tsx
│   └── index.ts            # Component exports
├── data/                   # Mock data and types
│   └── mockData.ts
├── globals.css             # Global styles
├── layout.tsx              # Root layout with EUI provider
└── page.tsx                # Main dashboard page
```

## Features

### Dashboard Components

1. **Dashboard Header**
   - Date picker for filtering
   - Service group dropdown
   - Agent filter dropdown
   - Export functionality

2. **KPI Cards**
   - Number of calls
   - Average customer satisfaction
   - Average call time
   - Callback rate

3. **Performance Evaluation**
   - Agent ratings with star display
   - Performance tracking

4. **Asset Feedback**
   - Feedback categories with progress bars
   - Visual representation of feedback metrics

5. **Agents Table**
   - Sortable table with agent performance data
   - Pagination support
   - Action buttons for view/edit

6. **Call Volume Chart**
   - Visual representation of call volume trends
   - Statistics display

### Technology Stack

- **Next.js 14** - React framework
- **Elastic UI** - Component library
- **TypeScript** - Type safety
- **Emotion** - CSS-in-JS styling

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Component Architecture

Each component is self-contained and follows these principles:

- **Single Responsibility**: Each component has a specific purpose
- **Reusability**: Components can be easily reused across the application
- **Type Safety**: All components use TypeScript interfaces
- **EUI Consistency**: All components use Elastic UI components for consistency

## Data Structure

The application uses mock data defined in `app/data/mockData.ts` with the following types:

- `Agent`: Individual agent performance data
- `KPIData`: Key performance indicators
- `PerformanceEvaluation`: Agent evaluation metrics
- `FeedbackData`: Customer feedback categories

## Customization

To customize the dashboard:

1. **Add new components**: Create new components in the appropriate folders
2. **Modify data**: Update `mockData.ts` with your data structure
3. **Styling**: Modify `globals.css` or use EUI's theming system
4. **Layout**: Adjust the layout in `page.tsx`

## Future Enhancements

- Integration with real APIs
- Advanced charts with libraries like Chart.js or D3
- Real-time data updates
- User authentication and role-based access
- Export functionality for reports
- Mobile-responsive improvements
