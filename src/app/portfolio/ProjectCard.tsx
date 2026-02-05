"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Project } from "./types";
import "./ProjectCard.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<>
			<div
				className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${project.title}`}
			>
				<div className="portfolio-wrap">
					<figure className="portfolio-figure">
						<div className="portfolio-image-wrapper">
							<Image
								src={project.images[0]}
								alt={project.title}
								fill
								style={{ objectFit: "cover" }}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="portfolio-image"
								priority={true}
								loading="eager"
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
							/>
							{/* Modern overlay with view icon */}
							<div className="portfolio-overlay" onClick={openModal}>
								<button
									className="view-button"
									aria-label={`View ${project.title} gallery`}
									type="button"
								>
									<i className="fa fa-eye" aria-hidden="true" />
								</button>
							</div>
						</div>
						{/* Title bar - keeping the original design */}
						<span className="portfolio-title">{project.title}</span>
					</figure>
				</div>
			</div>

			{/* Full Screen Swiper Modal Gallery */}
			{isModalOpen && (
				<div className="portfolio-modal" onClick={closeModal}>
					<button
						className="portfolio-modal-close"
						onClick={closeModal}
						aria-label="Close gallery"
						type="button"
					>
						<i className="fa fa-times" />
					</button>
					<div
						className="portfolio-modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<Swiper
							onSwiper={setSwiperRef}
							modules={[Navigation, Pagination, Keyboard, Zoom]}
							spaceBetween={0}
							slidesPerView={1}
							navigation={true}
							pagination={{ clickable: true }}
							keyboard={{ enabled: true }}
							zoom={{
								maxRatio: 3,
								minRatio: 1,
							}}
							loop={true}
							className="portfolio-swiper"
							initialSlide={0}
							style={{ width: "100%", height: "100%" }}
							onSlideChange={(swiper) => {
								setCurrentSlide(swiper.realIndex);
							}}
						>
							{project.images.map((image, index) => (
								<SwiperSlide key={index} className="portfolio-swiper-slide">
									<div className="swiper-zoom-container" data-swiper-zoom="3">
										<Image
											src={image}
											alt={`${project.title} - Image ${index + 1}`}
											className="portfolio-modal-image"
											fill
											sizes="100vw"
											style={{ objectFit: "contain" }}
											priority={index === 0}
											loading={index === 0 ? "eager" : "lazy"}
											placeholder="blur"
											blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
											onLoad={() => {
												// Image loaded successfully
											}}
											onError={(e) => {
												console.error("Image failed to load:", image);
												const target = e.target as HTMLImageElement;
												target.style.display = "none";
												const parent = target.parentElement;
												if (parent) {
													parent.innerHTML = `<div style="color: white; padding: 20px; text-align: center;">Image not found: ${image}</div>`;
												}
											}}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="portfolio-modal-title">
							{project.title} - Image {currentSlide + 1} of{" "}
							{project.images.length}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProjectCard;
