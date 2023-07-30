import styled from "styled-components"

export const Default = () => {
  return <StyledWrap>Default Page</StyledWrap>
}

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`