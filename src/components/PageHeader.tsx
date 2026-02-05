interface PageHeaderProps {
	title: string;
	breadcrumb: string[];
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
	return (
		<div className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2>{title}</h2>
					</div>
					<div className="col-12">
						{breadcrumb.map((item, index) => (
							<a key={index} href="" style={{ textDecoration: "none" }}>
								{item}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
