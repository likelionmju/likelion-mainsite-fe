import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Home.css';
import YearPlan from '@/components/YearPlan';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<YearPlan />
			<Footer />
		</div>
	);
};

export default Home;
