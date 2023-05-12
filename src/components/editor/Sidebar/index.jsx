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
  background-color: ${(props) => props.backgroundColor};
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; //Got a basic box-shadow from https://getcssscan.com/css-box-shadow-examples
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

const MenuColorCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const MenuColorCircle = styled.div`
  height: ${(props) => props.size === 'large' ? '30px' : '15px'};
  width: ${(props) => props.size === 'large' ? '30px' : '15px'};
  border-radius: 50%;
  background-color: ${(props) => props.themeColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const MenuThemePicker = styled.button`
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 6px;
  text-align: start;
  padding-left: 10px;
  border: none;
  z-index: 20;
  position: relative;
`

const MenuThemeDropdown = styled.div`
  background-color: ${theme.colors.black[5]};
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
`

const MenuThemeOption = styled.div`
  background-color: ${theme.colors.black[5]};
  height: 2rem;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.black[40]}
  }
`
//https://styled-components.com/docs/basics#styling-any-component
//Referencing how to select pseudoselectors

/** Sidebar view of the Editor page */
function Sidebar({ currentTheme, updateTheme }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  const closeDropdown = () => {
    setDropdownIsOpen(false);
  }

  return (
    <Root>
      <ToggleMenuButton
        onClick={() => {
          toggleMenu();
          closeDropdown();
        }}
        backgroundColor={menuIsOpen ? siteThemes[currentTheme].primary : 'transparent'}
      >
        <StyleIcon fontSize='large' />
      </ToggleMenuButton>
      {menuIsOpen && <Menu>
        <MenuTitle>Site Styles</MenuTitle>
        <MenuSubTitle>Theme</MenuSubTitle>
        <MenuThemePicker
          id='theme'
          name='theme'
          defaultValue={'default'}
          backgroundColor={siteThemes[currentTheme].primary}
          textColor={siteThemes[currentTheme].secondary}
          onClick={toggleDropdown}
        >
          {currentTheme[0].toUpperCase() + currentTheme.slice(1)}
          {dropdownIsOpen && <MenuThemeDropdown>
            {Object.entries(siteThemes).map(([name, colors]) => (
              <MenuThemeOption value={name} onClick={()=>updateTheme(name)}>
                {name[0].toUpperCase() + name.slice(1)}
                <MenuColorCircleWrapper>
                  <MenuColorCircle themeColor={colors.primary} size='small' />
                  <MenuColorCircle themeColor={colors.secondary} size='small' />
                  <MenuColorCircle themeColor={colors.tertiary} size='small' />
                </MenuColorCircleWrapper>
              </MenuThemeOption>))}
          </MenuThemeDropdown>}
        </MenuThemePicker>
        <MenuSubTitle>Theme Colors</MenuSubTitle>
        <MenuColorCircleWrapper>
          <MenuColorCircle themeColor={siteThemes[currentTheme].primary} size='large'/>
          <MenuColorCircle themeColor={siteThemes[currentTheme].secondary} size='large'/>
          <MenuColorCircle themeColor={siteThemes[currentTheme].tertiary} size='large'/>
        </MenuColorCircleWrapper>
      </Menu>}
    </Root>
  );
}

export default Sidebar;
