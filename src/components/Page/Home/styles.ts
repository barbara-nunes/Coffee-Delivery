import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-left: 160px;
  margin-right: 160px;
  display: flex;
  margin-bottom: 40px;
`
export const HomeInfos = styled.div`
  width: 60%;
`

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  width: 588px;
  height: 192px;
  top: 94px;
`

export const HomeIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);

  img {
  }
`

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ImageCoffee = styled.div`
  //width: 476px;
  width: 40%;
  height: 360px;
  left: 804px;
  top: 92px;
`
export const MenuContainer = styled.div`
  margin-left: 160px;
  margin-right: 160px;
`
export const Menu = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;

  width: 193px;
  height: 42px;
  left: 160px;
  top: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const MenuContainerCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
`
export const ImgMenu = styled.div`
  text-align: center;
  gap: 4px;
  left: 20px;
  height: 130px;
`

export const CoffeeType = styled.div`
  text-align: center;
  align-items: center;
  flex-direction: row;
  //margin: 0 50px;
  margin-left: 50px;
  margin-right: 50px;

  gap: 4px;
  padding: 0;
  height: 21px;
  top: 112px;
  left: 20px;

  color: #c47f17;
  background: #f1e9c9;
  border-radius: 999px;
`
export const CoffeeName = styled.div`
  height: 26px;
  left: 20px;
  right: 20px;
  top: 149px;

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  text-align: center;
`
export const CoffeeDescription = styled.div`
  height: 36px;
  left: 20px;
  right: 20px;
  top: 183px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
`

export const CoffeeValueBuy = styled.div`
  display: flex;
  width: 208px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

export const CoffeePrice = styled.div``

export const AmountCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 8px;
  gap: 4px;

  color: #272221;
  background: #ebe5f9;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    height: 30px;

    color: #4b2995;
    background-color: #ebe5f9;
    border: none;
    cursor: pointer;
  }
`

export const CoffeeBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  margin-right: 38px;

  width: 32px;
  height: 32px;

  background-color: #4b2995;
  color: #fff;
  border-radius: 6px;
`
