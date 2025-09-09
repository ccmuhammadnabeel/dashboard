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
import { useState } from 'react';

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
    subItems: [
      {
        name: 'Teams',
        id: 'reports-teams',
        href: '/reports/teams',
      },
      {
        name: 'Agents',
        id: 'reports-agents',
        href: '/reports/agents',
      },
      {
        name: 'Calls',
        id: 'reports-calls',
        href: '/reports/calls',
      },
    ],
  },
  {
    name: 'User Management',
    id: 'user-management',
    icon: 'users',
    href: '/users',
    hasDropdown: true,
    subItems: [
      {
        name: 'Teams',
        id: 'teams',
        href: '/teams',
      },
      {
        name: 'Team Leads',
        id: 'team-leads', 
        href: '/team-leads',
      },
      {
        name: 'Agents',
        id: 'agents',
        href: '/agents',
      },
    ],
  },
] as const;

export const Sidebar = () => {
  const pathname = usePathname();
  const { isExpanded, setIsExpanded } = useSidebar();
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>('reports'); // Auto-expand Reports to match screenshot

  const toggleDropdown = (itemId: string) => {
    setExpandedDropdown(expandedDropdown === itemId ? null : itemId);
  };
  
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
        background: 'linear-gradient(180deg, #C8DAE8 0%, #F0E0E6 35%, #F0E0E6 65%, #C8DAE8 100%)',
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
        <EuiFlexItem grow={false} style={{ padding: isExpanded ? '12px 20px' : '12px 12px', overflow: 'hidden' }}>
          <EuiPanel
            color="transparent"
            paddingSize="s"
            hasShadow={false}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiAvatar 
                  name="Frank Woods" 
                  size="m" 
                  color="#4A90B8"
                  initials="FW"
                  style={{
                    backgroundColor: '#4A90B8',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '13px'
                  }}
                />
              </EuiFlexItem>
              {isExpanded && (
                <>
                  <EuiFlexItem>
                    <EuiText size="s" style={{ fontWeight: 600, margin: 0, color: '#2C3E50', whiteSpace: 'nowrap', fontSize: '14px' }}>
                      Frank Woods
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiIcon
                      type="gear"
                      size="m"
                      style={{ 
                        color: '#7B8794',
                        cursor: 'pointer'
                      }}
                    />
                  </EuiFlexItem>
                </>
              )}
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* Navigation */}
      <EuiFlexItem grow={false} style={{ padding: '8px 0' }}>
        {sidebarItems.map((item) => {
          const hasSubItems = 'subItems' in item;
          const hasDropdown = 'hasDropdown' in item && item.hasDropdown;
          const subItems = hasSubItems ? item.subItems : undefined;
          const isSelected = pathname === item.href || (subItems && subItems.some(sub => pathname === sub.href));
          const isDropdownExpanded = expandedDropdown === item.id;
          
          return (
            <EuiFlexItem key={item.id} grow={false}>
              {/* Main Navigation Item */}
              {hasDropdown ? (
                <EuiFlexGroup
                  alignItems="center"
                  justifyContent={isExpanded ? 'spaceBetween' : 'center'}
                  gutterSize="s"
                  responsive={false}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: isExpanded ? '8px 20px' : '8px 12px',
                    backgroundColor: isSelected ? 'rgba(74, 144, 184, 0.9)' : 'transparent',
                    color: isSelected ? 'white' : '#4A5568',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    overflow: 'hidden',
                    borderRadius: 0,
                    margin: 0,
                  }}
                  onClick={() => toggleDropdown(item.id)}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(74, 144, 184, 0.15)';
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
                        style={{ color: isSelected ? 'white' : '#4A5568' }}
                      />
                    </EuiFlexItem>
                    {isExpanded && (
                      <EuiFlexItem>
                        <EuiText 
                          size="s" 
                          style={{ 
                            fontWeight: isSelected ? 600 : 400,
                            color: isSelected ? 'white' : '#4A5568',
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
                  {isExpanded && (
                    <EuiFlexItem grow={false}>
                      <EuiIcon 
                        type={isDropdownExpanded ? "arrowUp" : "arrowDown"} 
                        size="s" 
                        style={{ color: isSelected ? 'white' : '#4A5568' }}
                      />
                    </EuiFlexItem>
                  )}
                </EuiFlexGroup>
              ) : (
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <EuiFlexGroup
                    alignItems="center"
                    justifyContent={isExpanded ? 'spaceBetween' : 'center'}
                    gutterSize="s"
                    responsive={false}
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: isExpanded ? '8px 20px' : '8px 12px',
                      backgroundColor: isSelected ? 'rgba(74, 144, 184, 0.9)' : 'transparent',
                      color: isSelected ? 'white' : '#4A5568',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      overflow: 'hidden',
                      borderRadius: 0,
                      margin: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'rgba(74, 144, 184, 0.15)';
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
                  </EuiFlexGroup>
                </Link>
              )}

              {/* Dropdown Submenu */}
              {subItems && isDropdownExpanded && isExpanded && (
                <div style={{ paddingLeft: '32px' }}>
                  {subItems.map((subItem) => {
                    const isSubSelected = pathname === subItem.href;
                    return (
                      <Link key={subItem.id} href={subItem.href} style={{ textDecoration: 'none' }}>
                        <EuiFlexGroup
                          alignItems="center"
                          gutterSize="s"
                          responsive={false}
                          style={{
                            width: '100%',
                            height: '36px',
                            padding: '6px 16px',
                            backgroundColor: isSubSelected ? 'rgba(74, 144, 184, 0.7)' : 'transparent',
                            color: isSubSelected ? 'white' : '#4A5568',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            overflow: 'hidden',
                            borderRadius: 0,
                            margin: 0,
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubSelected) {
                              e.currentTarget.style.backgroundColor = 'rgba(74, 144, 184, 0.1)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSubSelected) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          <EuiFlexItem>
                            <EuiText 
                              size="s" 
                              style={{ 
                                fontWeight: isSubSelected ? 600 : 400,
                                color: isSubSelected ? 'white' : '#4A5568',
                                fontSize: '13px',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {subItem.name}
                            </EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </Link>
                    );
                  })}
                </div>
              )}
            </EuiFlexItem>
          );
        })}
      </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* Switch to Old UI */}
      <EuiFlexItem grow={false}>
        {isExpanded && (
          <div style={{ padding: '16px 20px', overflow: 'hidden' }}>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem>
                <EuiText size="s" style={{ color: '#4A5568', margin: 0, fontWeight: 500, whiteSpace: 'nowrap' }}>
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
                    backgroundColor: '#4A90B8',
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
          </div>
        )}
      </EuiFlexItem>

      {/* Spacer to push content up */}
      <EuiFlexItem />
      </EuiFlexGroup>
    </EuiPanel>
  );
};
