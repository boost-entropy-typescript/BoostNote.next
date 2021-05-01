import React, { useCallback } from 'react'
import Button from '../../shared/components/atoms/Button'
import styled from '../../shared/lib/styled'

interface TabButtonProps {
  label: string
  tab: string
  active: boolean
  setTab: (tab: string) => void
}

const TabButtonContainer = styled.button`
  #tab_local_btn {
    width: 100%;
    border-radius: 4px;
    height: 30px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .btn_label {
    flex: 1;
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: left;
    padding-left: 15px;
    font-size: 14px;
  }
`

const TabButton = ({ label, tab, setTab, active }: TabButtonProps) => {
  const selectTab = useCallback(() => {
    setTab(tab)
  }, [tab, setTab])
  return (
    <TabButtonContainer>
      <Button
        variant='primary'
        id='tab_local_btn'
        onClick={selectTab}
        active={active}
        className={'btn_label'}
      >
        {label}
      </Button>
    </TabButtonContainer>

    // <StyledButton onClick={selectTab} className={cc([active && 'active'])}>
    //   <div className='label'>{label}</div>
    // </StyledButton>
  )
}

export default TabButton
