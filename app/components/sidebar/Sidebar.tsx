'use client';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiIcon,
  EuiSpacer,
  EuiAvatar,
  EuiPanel,
  EuiButtonEmpty,
  EuiHorizontalRule,
  EuiImage,
} from '@elastic/eui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../../context/SidebarContext';

const sidebarItems = [
  {
    name: 'Dashboard',
    id: 'dashboard',
    icon: 'apps',
    href: '/',
  },
  {
    name: 'KPIs',
    id: 'kpis',
    icon: 'visBarVerticalStacked',
    href: '/kpis',
  },
  {
    name: 'Reports',
    id: 'reports',
    icon: 'document',
    href: '/reports',
    hasDropdown: true,
  },
  {
    name: 'User Management',
    id: 'user-management',
    icon: 'users',
    href: '/users',
    hasDropdown: true,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { isExpanded, setIsExpanded } = useSidebar();
  
  return (
    <EuiPanel
      color="subdued"
      paddingSize="none"
      hasShadow={false}
      style={{
        height: '100vh',
        width: isExpanded ? '240px' : '70px',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRadius: 0,
        borderRight: '1px solid #D3DAE6',
        background: 'linear-gradient(180deg, #E6F3FF 0%, #F0F8FF 50%, #FFFFFF 100%)',
        transition: 'width 0.3s ease',
        zIndex: 1000,
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <EuiFlexGroup direction="column" gutterSize="none" style={{ height: '100%' }}>
        {/* Logo Section */}
        <EuiFlexItem grow={false} style={{ padding: isExpanded ? '20px' : '15px 12px', overflow: 'hidden' }}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem>
              <EuiFlexGroup 
                alignItems="center"
                justifyContent={isExpanded ? 'flexStart' : 'center'}
                style={{ height: 40 }}
              >
                <EuiFlexItem grow={false}>
                  {isExpanded ? (
                    <EuiImage
                      src="/images/cirrus-logo-bars.png"
                      alt="CirrusAI Logo"
                      size="l"
                      style={{ objectFit: 'contain', maxWidth: '150px', maxHeight: '40px' }}
                    />
                  ) : (
                    <EuiImage
                      src="/images/cirrus-logo-box.png"
                      alt="CirrusAI Logo"
                      size="m"
                      style={{ objectFit: 'contain', maxWidth: '40px', maxHeight: '40px' }}
                    />
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* User Section */}
      <EuiFlexItem grow={false} style={{ padding: isExpanded ? '16px 20px' : '16px 12px', overflow: 'hidden' }}>
        <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiAvatar 
              name="Frank Woods" 
              size="m" 
              color="#0077CC"
              initials="FW"
              style={{
                backgroundColor: '#0077CC',
                color: 'white',
                fontWeight: 600
              }}
            />
          </EuiFlexItem>
          {isExpanded && (
            <>
              <EuiFlexItem>
                <EuiText size="s" style={{ fontWeight: 600, margin: 0, color: '#343741', whiteSpace: 'nowrap' }}>
                  Frank Woods
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiIcon
                  type="gear"
                  size="m"
                  style={{ 
                    color: '#5A6C7D',
                    cursor: 'pointer'
                  }}
                />
              </EuiFlexItem>
            </>
          )}
        </EuiFlexGroup>
      </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* Navigation */}
      <EuiFlexItem grow={false} style={{ padding: '8px 0' }}>
        {sidebarItems.map((item) => {
          const isSelected = pathname === item.href;
          return (
            <Link key={item.id} href={item.href} style={{ textDecoration: 'none' }}>
              <EuiFlexGroup
                alignItems="center"
                justifyContent={isExpanded ? 'spaceBetween' : 'center'}
                gutterSize="s"
                responsive={false}
                style={{
                  width: '100%',
                  height: '44px',
                  padding: isExpanded ? '8px 20px' : '8px 12px',
                  backgroundColor: isSelected ? '#0077CC' : 'transparent',
                  color: isSelected ? 'white' : '#5A6C7D',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden',
                  borderRadius: 0,
                  margin: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 119, 204, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                  <EuiFlexItem grow={false}>
                    <EuiIcon 
                      type={item.icon} 
                      size="m" 
                      style={{ color: isSelected ? 'white' : '#5A6C7D' }}
                    />
                  </EuiFlexItem>
                  {isExpanded && (
                    <EuiFlexItem>
                      <EuiText 
                        size="s" 
                        style={{ 
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected ? 'white' : '#5A6C7D',
                          fontSize: '14px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.name}
                      </EuiText>
                    </EuiFlexItem>
                  )}
                </EuiFlexGroup>
                
                {/* Dropdown Arrow */}
                {isExpanded && item.hasDropdown && (
                  <EuiFlexItem grow={false}>
                    <EuiIcon 
                      type="arrowDown" 
                      size="s" 
                      style={{ color: isSelected ? 'white' : '#5A6C7D' }}
                    />
                  </EuiFlexItem>
                )}
              </EuiFlexGroup>
            </Link>
          );
        })}
      </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* Switch to Old UI */}
      {isExpanded && (
        <EuiFlexItem grow={false} style={{ padding: '16px 20px', overflow: 'hidden' }}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem>
              <EuiText size="s" style={{ color: '#5A6C7D', margin: 0, fontWeight: 500, whiteSpace: 'nowrap' }}>
                Switch To Old UI
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiPanel
                paddingSize="none"
                color="transparent"
                hasShadow={false}
                style={{
                  width: 44,
                  height: 24,
                  backgroundColor: '#0077CC',
                  borderRadius: 12,
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <EuiPanel
                  paddingSize="none"
                  color="transparent"
                  hasShadow={false}
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: 2,
                    top: 2,
                    transition: 'transform 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                />
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      )}

      {/* Spacer to push content up */}
      <EuiFlexItem />
      </EuiFlexGroup>
    </EuiPanel>
  );
};
