import React from 'react';

import Breakfast from './breakfast';
import Title from '../components/title';

const Home = () => {
	const title = <strong>Posada La Manuel Lobo</strong>
  return (
    <div>
    	<Title title={title} />
      	<Breakfast />
    </div>
  );
};

export default Home;
