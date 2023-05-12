import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { siteThemes } from "../../../constants/siteThemes";
import StyleIcon from '@mui/icons-material/Style';
import { useState } from "react";

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleMenuButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: ${theme.colors.black[10]};
  border-radius: 8px;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = styled.div`
  position: absolute;
  top: 50%;
  left: -200px;
  transform: translateY(-50%);
  width: 200px;
  padding: 20px;
  z-index: 10;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${theme.colors.black[5]};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const MenuTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const MenuSubTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 6px;
`

const MenuToggleThemeButton = styled.button`
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  background-color: green;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 6px;
  text-align: start;
  padding-left: 10px;
  border: none;
`

const MenuColorCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const MenuColorCircle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.themeColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const MenuThemePicker = styled.select`

`

/** Sidebar view of the Editor page */
function Sidebar({ currentTheme, updateTheme }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  }

  const closeMenu = () => {
    setMenuIsOpen(false);
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <Root>
      <ToggleMenuButton onClick={toggleMenu}>
        <StyleIcon fontSize='large' />
      </ToggleMenuButton>
      {menuIsOpen && <Menu>
        <MenuTitle>Site Styles</MenuTitle>
        <MenuSubTitle>Theme</MenuSubTitle>
        <MenuToggleThemeButton>{currentTheme}</MenuToggleThemeButton>
        <MenuSubTitle>Theme Colors</MenuSubTitle>
        <MenuColorCircleWrapper>
          <MenuColorCircle themeColor={siteThemes[currentTheme].primary} />
          <MenuColorCircle themeColor={siteThemes[currentTheme].secondary} />
          <MenuColorCircle themeColor={siteThemes[currentTheme].tertiary} />
        </MenuColorCircleWrapper>
      </Menu>}
    </Root>
  );
}

export default Sidebar;
