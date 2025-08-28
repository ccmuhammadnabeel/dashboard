'use client';

import {
  EuiPanel,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiAvatar
} from '@elastic/eui';
import { css } from '@emotion/css';

const panelStyle = css`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid #f0f0f0;
  height: 100%;
  padding: 0;
`;

const performerCardStyle = (isTop: boolean) => css`
  border: 2px solid ${isTop ? '#52c41a' : '#ff7a45'};
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  position: relative;
  background: white;
  margin-bottom: ${isTop ? '12px' : '16px'};
`;

const badgeStyle = (isTop: boolean) => css`
  background-color: ${isTop ? '#52c41a' : '#ff7a45'};
  color: white;
  font-size: 10px;
  padding: 4px 12px;
  border-radius: 12px;
  position: absolute;
  top: -8px;
  left: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const scoreCircleStyle = (isTop: boolean) => css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${isTop ? '#52c41a' : '#ff7a45'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  margin-right: 16px;
  box-shadow: 0 2px 8px rgba(${isTop ? '82, 196, 26' : '255, 122, 69'}, 0.3);
`;

const starsContainerStyle = css`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const avatarGroupStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const TeamPerformance = () => {
  const renderStars = (rating: number, maxRating: number = 5) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <EuiIcon
          key={i}
          type="starFilled"
          color={i <= rating ? "#FA8C16" : "#E8E8E8"}
          size="s"
          style={{ width: '12px', height: '12px' }}
        />
      );
    }
    return stars;
  };

  const renderAvatarGroup = (count: number) => {
    const avatars = [];
    for (let i = 0; i < count; i++) {
      avatars.push(
        <div
          key={i}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#1890ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: i > 0 ? '-8px' : '0',
            border: '2px solid white',
            zIndex: count - i
          }}
        >
          <EuiIcon type="user" size="s" color="white" />
        </div>
      );
    }
    return avatars;
  };

  return (
    <div className={panelStyle}>
      {/* Top Performer */}
      <div className={performerCardStyle(true)}>
        <div className={badgeStyle(true)}>Top Performer</div>
        
        <EuiFlexGroup alignItems="center" gutterSize="none" style={{ marginTop: '8px' }}>
          <EuiFlexItem grow={false}>
            <div className={scoreCircleStyle(true)}>84%</div>
          </EuiFlexItem>
          
          <EuiFlexItem style={{ flex: 1 }}>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" gutterSize="s">
              <EuiFlexItem>
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiAvatar 
                      name="Ateea Rehman" 
                      size="s" 
                      style={{ width: '32px', height: '32px' }}
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="s" style={{ fontWeight: 600, fontSize: '13px', lineHeight: '1.2' }}>
                      Ateea Rehman
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              
              <EuiFlexItem grow={false}>
                <div className={starsContainerStyle}>
                  {renderStars(4)}
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
            
            {/* Avatar Group */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: '8px',
              marginLeft: '40px'
            }}>
              {renderAvatarGroup(5)}
            </div>
          </EuiFlexItem>
          
          <EuiFlexItem grow={false}>
            <EuiIcon type="arrowRight" size="s" color="#999" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      {/* Low Performer */}
      <div className={performerCardStyle(false)}>
        <div className={badgeStyle(false)}>Low Performer</div>
        
        <EuiFlexGroup alignItems="center" gutterSize="none" style={{ marginTop: '8px' }}>
          <EuiFlexItem grow={false}>
            <div className={scoreCircleStyle(false)}>54%</div>
          </EuiFlexItem>
          
          <EuiFlexItem style={{ flex: 1 }}>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" gutterSize="s">
              <EuiFlexItem>
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiAvatar 
                      name="Ahmed Hanif" 
                      size="s" 
                      style={{ width: '32px', height: '32px' }}
                    />
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="s" style={{ fontWeight: 600, fontSize: '13px', lineHeight: '1.2' }}>
                      Ahmed Hanif
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              
              <EuiFlexItem grow={false}>
                <div className={starsContainerStyle}>
                  {renderStars(2)}
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
            
            {/* Avatar Group */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: '8px',
              marginLeft: '40px'
            }}>
              {renderAvatarGroup(5)}
            </div>
          </EuiFlexItem>
          
          <EuiFlexItem grow={false}>
            <EuiIcon type="arrowRight" size="s" color="#999" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </div>
  );
};
