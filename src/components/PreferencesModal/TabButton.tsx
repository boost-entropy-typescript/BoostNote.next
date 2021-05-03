import React, { useCallback } from 'react'
import styled from '../../shared/lib/styled'
import cc from 'classcat'

interface TabButtonProps {
  label: string
  tab: string
  active: boolean
  setTab: (tab: string) => void
}

const StyledButton = styled.button`
  width: 100%;
  border-radius: 4px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .label {
    flex: 1;
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: left;
    padding-left: 15px;
    font-size: 14px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  &.active {
    color: ${({ theme }) => theme.colors.text.secondary};
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    .label {
      color: ${({ theme }) => theme.colors.text.primary};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`

const TabButton = ({ label, tab, setTab, active }: TabButtonProps) => {
  const selectTab = useCallback(() => {
    setTab(tab)
  }, [tab, setTab])
  return (
    // <TabButtonContainer>
    //   <Button
    //     className={'tab_button_style'}
    //     variant='primary'
    //     onClick={selectTab}
    //     active={active}
    //   >
    //     <div className='tab_button_label'>{label}</div>
    //   </Button>
    // </TabButtonContainer>

    <StyledButton onClick={selectTab} className={cc([active && 'active'])}>
      <div className='label'>{label}</div>
    </StyledButton>
  )
}

export default TabButton
