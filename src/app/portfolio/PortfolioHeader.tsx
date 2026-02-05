import React from 'react';

interface PortfolioHeaderProps {
	title: string;
	header: string;
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ title, header }) => (
	<div className="section-header">
		<p>{title}</p>
		<h2>{header}</h2>
	</div>
);

export default PortfolioHeader;
