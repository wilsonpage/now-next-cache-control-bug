const BarPage = () =>
  'This page is not edge-cached due to explicity getInitialProps()';

BarPage.getInitialProps = () => ({});

export default BarPage;
