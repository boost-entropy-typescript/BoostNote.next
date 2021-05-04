import React from 'react'
import cc from 'classcat'
import Icon from './Icon'
import { mdiChevronDown, mdiChevronRight, mdiCircleSmall } from '@mdi/js'
import { textOverflow } from '../../lib/styled/styleFunctions'
import styled from '../../shared/lib/styled'

const Container = styled.div`
  position: relative;
  user-select: none;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-size: 1em;
  transition: 200ms background-color;
  &:hover {
    .control {
      opacity: 1;
    }
  }

  &.visibleControl {
    .control {
      opacity: 1;
    }
  }
`

const FoldButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 200ms ease-in-out;
  color: ${({ theme }) => theme.colors.text.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:active,
  .active {
    color: ${({ theme }) => theme.colors.text.link};
  }
`

const ClickableContainer = styled.button`
  background-color: transparent;
  height: 28px;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-align: left;
  flex: 1;
  overflow: hidden;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  &:active,
  &.active {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }
  &:hover:active,
  &:hover.active {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }

  &.subtle {
    color: ${({ theme }) => theme.colors.text.subtle};
  }
`

const Label = styled.div`
  ${textOverflow};
  flex: 1;
  font-size: 14px;

  &.subtle {
    color: ${({ theme }) => theme.colors.text.subtle};
  }
`

const Control = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  display: flex;
`

const IconContainer = styled.div`
  width: 22px;
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
`

interface NavigatorItemProps {
  label: string
  iconPath?: string
  depth: number
  dotPlaceholder?: boolean
  control?: React.ReactNode
  visibleControl?: boolean
  className?: string
  folded?: boolean
  active?: boolean
  subtle?: boolean
  onFoldButtonClick?: (event: React.MouseEvent) => void
  onClick?: (event: React.MouseEvent) => void
  onContextMenu?: (event: React.MouseEvent) => void
  onDrop?: (event: React.DragEvent) => void
  onDragOver?: (event: React.DragEvent) => void
  onDragEnd?: (event: React.DragEvent) => void
  onDoubleClick?: (event: React.MouseEvent) => void
}

const NavigatorItem = ({
  label,
  iconPath,
  depth,
  control,
  visibleControl = false,
  className,
  folded,
  // TODO: Delete dot placeholder style
  dotPlaceholder,
  active,
  subtle,
  onFoldButtonClick,
  onClick,
  onDoubleClick,
  onContextMenu,
  onDrop,
  onDragOver,
  onDragEnd,
}: NavigatorItemProps) => {
  return (
    <Container
      className={cc([
        className,
        active && 'active',
        visibleControl && 'visibleControl',
      ])}
      onContextMenu={onContextMenu}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {!dotPlaceholder && folded != null && (
        <FoldButton
          className={folded ? 'folded' : ''}
          onClick={onFoldButtonClick}
          style={{ left: `${10 * depth}px` }}
        >
          <Icon path={folded ? mdiChevronRight : mdiChevronDown} size={18} />
        </FoldButton>
      )}
      <ClickableContainer
        style={{
          paddingLeft: dotPlaceholder
            ? `${10 * depth}px`
            : `${10 * depth + 24}px`,
        }}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={active ? 'active' : ''}
      >
        {dotPlaceholder && (
          <div
            style={{
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon path={mdiCircleSmall} />
          </div>
        )}
        {iconPath != null && (
          <IconContainer>
            <Icon path={iconPath} />
          </IconContainer>
        )}
        <Label className={cc([subtle && 'subtle'])}>{label}</Label>
        {control && <Control className='control'>{control}</Control>}
      </ClickableContainer>
    </Container>
  )
}

export default NavigatorItem
