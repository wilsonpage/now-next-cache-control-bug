import React from 'react';

export default (App) => {
  const AppWithFoo = (props) => <App {...props} />;

  AppWithFoo.getInitialProps = async (appContext) => {
    let appProps = {};

    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return appProps;
  };

  return AppWithFoo;
};
