import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import Sidebar from "../components/editor/Sidebar";
import Site from "../components/editor/Site";
import useLocalStorage from "../utils/useLocalStorage";
import { siteThemes } from "../constants/siteThemes";
import { useState } from "react";
// Component Styles

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const RootContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: height 100ms linear;
  padding: 32px;
`;

const SiteWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${(props) => props.bgcolor}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarWrapper = styled(motion.div)`
  width: 64px;
  height: 100%;
`;

/** Root Editor View */
function Editor() {
  const [currentTheme, setCurrentTheme] = useLocalStorage();

  const updateTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  }

  const [customThemes, setCustomThemes] = useState(siteThemes);

  const setNewColor = (newColor, theme, type) => {
    setCustomThemes((oldThemes) => {
      let newThemes = {
        ...oldThemes,
      }
      newThemes[theme] = {
        ...newThemes[theme],
      };
      newThemes[theme][type] = newColor;
      return newThemes;
    })
  }

  return (
    <Root>
      <RootContent>
        <SiteWrapper layout bgcolor={customThemes[currentTheme].primary}>
          <Site currentTheme={currentTheme} customThemes={customThemes} />
        </SiteWrapper>
        <SideBarWrapper layout>
          <Sidebar currentTheme={currentTheme} updateTheme={updateTheme} customThemes={customThemes} setNewColor={setNewColor} />
        </SideBarWrapper>
      </RootContent>
    </Root>
  );
}

export default Editor;
