import React from 'react';

interface LoadMoreButtonProps {
	onClick: () => void;
	isVisible: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, isVisible }) => {
	if (!isVisible) return null;
	
	return (
		<div className="row">
			<div className="col-12 load-more">
				<button className="btn" onClick={onClick}>
					Load More
				</button>
			</div>
		</div>
	);
};

export default LoadMoreButton;
