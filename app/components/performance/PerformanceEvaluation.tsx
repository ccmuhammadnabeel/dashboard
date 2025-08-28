'use client';

import {
  EuiPanel,
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiIcon,
  EuiAvatar
} from '@elastic/eui';
import { performanceEvaluations } from '../../data/mockData';

export const PerformanceEvaluation = () => {
  const renderStars = (rating: number, maxRating: number) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <EuiIcon
          key={i}
          type="starFilled"
          color={i <= rating ? "#FA8C16" : "#D9D9D9"}
          size="s"
          style={{ margin: '0 1px' }}
        />
      );
    }
    return stars;
  };

  const getPerformanceLabel = (rating: number) => {
    return rating >= 4 ? 'Top Performer' : 'Low Performer';
  };

  const getPerformanceScore = (rating: number) => {
    return rating >= 4 ? '84%' : '54%';
  };

  const getPerformanceColor = (rating: number) => {
    return rating >= 4 ? '#52C41A' : '#FA541C';
  };

  return (
    <EuiPanel 
      paddingSize="l" 
      hasShadow={true} 
      hasBorder={false}
      style={{ backgroundColor: '#ffffff', borderRadius: '8px', height: '100%' }}
    >
      <EuiTitle size="s">
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Team Performance</h3>
      </EuiTitle>

      {performanceEvaluations.map((evaluation, index) => (
        <div key={index} style={{ marginBottom: index < performanceEvaluations.length - 1 ? '24px' : '0' }}>
          {/* Performance Badge */}
          <div style={{
            backgroundColor: getPerformanceColor(evaluation.rating),
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-block',
            marginBottom: '8px'
          }}>
            {getPerformanceLabel(evaluation.rating)}
          </div>
          
          {/* Score Circle and Agent Info */}
          <EuiFlexGroup alignItems="center" gutterSize="m">
            <EuiFlexItem grow={false}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: getPerformanceColor(evaluation.rating),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600
              }}>
                {getPerformanceScore(evaluation.rating)}
              </div>
            </EuiFlexItem>
            
            <EuiFlexItem>
              <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
                <EuiFlexItem>
                  <EuiFlexGroup alignItems="center" gutterSize="s">
                    <EuiFlexItem grow={false}>
                      <EuiAvatar name={evaluation.agentName} size="s" />
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiText size="s" style={{ fontWeight: 500 }}>
                        {evaluation.agentName}
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup gutterSize="none" alignItems="center">
                    {renderStars(evaluation.rating, evaluation.maxRating)}
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            
            <EuiFlexItem grow={false}>
              <EuiIcon type="arrowRight" size="s" color="subdued" />
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      ))}
    </EuiPanel>
  );
};
