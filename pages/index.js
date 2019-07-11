import Cookies from 'universal-cookie';

const Page = ({ name }) => {
  return (
    <div>
      <h1>Enter you name and then refresh</h1>
      <input
        placeholder="enter you name"
        onChange={(e) => {
          const cookies = new Cookies();
          cookies.set('name', e.target.value);
        }}
      />
      <h1>Name is: {name ? name : 'not set'}</h1>
    </div>
  );
};

Page.getInitialProps = ({ req }) => {
  const cookies = new Cookies(req && req.headers.cookie);

  return {
    name: cookies.get('name'),
  };
};

export default Page;
