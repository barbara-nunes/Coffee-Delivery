import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 50px;
  left: 160px;
  right: 160px;
`

export const HomeImg = styled.div`
  width: 84px;
  height: 40px;
  margin-top: 32px;
  margin-left: 160px;
`

export const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`

export const HomeLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 130px;
  height: 23px;
  margin-top: 32px;

  background: #ebe5f9;
  color: #4b2995;
  border-radius: 6px;
`

export const HomeBuy = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px;
  gap: 2px;
  border: none;
  width: 35px;
  height: 35px;
  margin-top: 32px;
  margin-right: 160px;

  background: #f1e9c9;
  color: #c47f17;
  border-radius: 6px;
`
