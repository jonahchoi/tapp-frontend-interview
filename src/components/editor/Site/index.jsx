import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled(motion.div)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SiteTitle = styled(motion.h1)`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color}; // Change to Secondary color
  margin-bottom: 12px;
`;

const SiteDescription = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color}; // Change to Tertiary color
`;

const DocLink = styled(motion.a)`
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => props.color}; // Change to Secondary color
  margin-top: 12px;
`;

/** Site preview for the Editor page */
function Site({ currentTheme, customThemes }) {
  // Referenced staggering children: https://www.framer.com/motion/transition/
  const container = {
    initial: {},
    end: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    initial: {
      opacity: 0,
      y: 20
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
        damping: 16
      }
    }
  }

  return (
    <Root
      variants={container}
      initial='initial'
      animate='end'
    >
      <SiteTitle
        color={customThemes[currentTheme].secondary}
        variants={item}
      >
        StyleAI Frontend Interview ⭐️
      </SiteTitle>
      <SiteDescription
        color={customThemes[currentTheme].tertiary}
        variants={item}
      >
        Congratulations on making it to the coding interview for the frontend
        developer internship at StyleAI! In this task, you will be developing a
        'styles' menu in the sidebar of a website editor. This menu will allow
        users to change the theme of their site within the editor. This
        documentation aims to provide you with all the necessary information to
        complete the task successfully.
      </SiteDescription>
      <SiteDescription
        color={customThemes[currentTheme].tertiary}
        variants={item}
      >
        This task is designed to test your ability to work with React
        components, manage state variables, and utilize local storage. We wish
        you the best of luck in completing this task and look forward to
        reviewing your work.
      </SiteDescription>
      <DocLink
        target="_blank"
        href="https://github.com/tapp-ai/tapp-frontend-interview#readme"
        color={customThemes[currentTheme].secondary}
        variants={item}
      >
        Read Task Documentation
      </DocLink>
    </Root>
  );
}

export default Site;
