import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Home.css';
import Part from '@/components/Part';
import Introduction from '@/components/Introduction';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<Introduction />
			<Part/>
			<Footer />
		</div>
	);
};

export default Home;
