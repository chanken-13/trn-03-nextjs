import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'StyledButton (1)',
  // 使用するコンポーネント
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props:any) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success = (props:any) => {
  return (
    <StyledButton {...props} variant="success">
      Primary
    </StyledButton>
  )
}

export const Transparent = (props:any) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}