import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Header from '../components/organisms/Header';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {children}
      </>
    </ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
