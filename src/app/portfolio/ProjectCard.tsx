"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Project } from "./types";

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

	useEffect(() => {
		if (isModalOpen && swiperRef) {
			// Update Swiper when modal opens
			setTimeout(() => {
				swiperRef.update();
			}, 100);
		}
	}, [isModalOpen, swiperRef]);

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
								if (swiperRef) {
									swiperRef.update();
								}
							}}
						>
							{project.images.map((image, index) => (
								<SwiperSlide key={index} className="portfolio-swiper-slide">
									<div className="swiper-zoom-container" data-swiper-zoom="3">
										<img
											src={image}
											alt={`${project.title} - Image ${index + 1}`}
											className="portfolio-modal-image"
											onLoad={() => {
												if (swiperRef) {
													swiperRef.update();
												}
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

			{/* Styles */}
			<style jsx>{`
				.portfolio-figure {
					background: #ffffff;
					overflow: hidden;
					height: 400px;
					position: relative;
					margin: 0;
					border-radius: 5px;
					transition:
						transform 0.3s ease,
						box-shadow 0.3s ease;
				}

				.portfolio-figure:hover {
					transform: translateY(-5px);
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
				}

				.portfolio-image-wrapper {
					position: relative;
					width: 100%;
					height: calc(100% - 60px);
					overflow: hidden;
				}

				.portfolio-image {
					transition: transform 0.5s ease;
				}

				.portfolio-figure:hover .portfolio-image {
					transform: scale(1.1);
				}

				.portfolio-overlay {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(0, 0, 0, 0);
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background 0.3s ease;
					opacity: 0;
					pointer-events: none;
					cursor: pointer;
					z-index: 10;
					width: 100%;
					height: 100%;
				}

				.portfolio-figure:hover .portfolio-overlay {
					background: rgba(0, 0, 0, 0.5);
					opacity: 1;
					pointer-events: all;
				}

				.view-button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 70px;
					height: 70px;
					background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
					border: 2px solid rgba(255, 255, 255, 0.8);
					border-radius: 50%;
					color: #2c3e50;
					text-decoration: none;
					transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
					transform: scale(0) rotate(-180deg);
					backdrop-filter: blur(20px);
					box-shadow:
						0 8px 32px rgba(0, 0, 0, 0.2),
						0 2px 8px rgba(0, 0, 0, 0.1),
						inset 0 1px 0 rgba(255, 255, 255, 0.6);
					cursor: pointer;
					padding: 0;
					margin: 0;
					position: relative;
					overflow: hidden;
				}

				.view-button::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: linear-gradient(
						45deg,
						transparent 30%,
						rgba(255, 255, 255, 0.5) 50%,
						transparent 70%
					);
					transform: translateX(-100%);
					transition: transform 0.6s ease;
				}

				.portfolio-figure:hover .view-button {
					transform: scale(1) rotate(0deg);
				}

				.view-button:hover {
					background: linear-gradient(135deg, #ffffff 0%, #e9ecef 100%);
					transform: scale(1.15) rotate(5deg);
					box-shadow:
						0 12px 40px rgba(0, 0, 0, 0.3),
						0 4px 12px rgba(0, 0, 0, 0.15),
						inset 0 1px 0 rgba(255, 255, 255, 0.8);
					border-color: rgba(255, 255, 255, 1);
				}

				.view-button:hover::before {
					transform: translateX(100%);
				}

				.view-button i {
					font-size: 28px;
					transition: all 0.3s ease;
					position: relative;
					z-index: 1;
					filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
				}

				.view-button:hover i {
					transform: scale(1.1);
					filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
				}

				.portfolio-title {
					position: absolute;
					margin: 0;
					width: 100%;
					left: 0;
					right: 0;
					bottom: 0;
					padding: 20px;
					text-align: center;
					color: #000000;
					font-size: 16px;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					background: #ffd662;
					border-radius: 0 0 5px 5px;
					transition: all 0.3s ease;
					display: block;
				}

				.portfolio-figure:hover .portfolio-title {
					background: #00539c;
					color: #ffffff;
				}

				/* Full Screen Modal Styles */
				.portfolio-modal {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(0, 0, 0, 0.98);
					z-index: 10000;
					display: flex;
					align-items: center;
					justify-content: center;
					animation: fadeIn 0.3s ease;
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				.portfolio-modal-close {
					position: fixed;
					top: 20px;
					right: 20px;
					width: 50px;
					height: 50px;
					background: rgba(255, 255, 255, 0.2);
					border: none;
					border-radius: 50%;
					color: #fff;
					font-size: 24px;
					cursor: pointer;
					z-index: 10001;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: all 0.3s ease;
					backdrop-filter: blur(10px);
				}

				.portfolio-modal-close:hover {
					background: rgba(255, 214, 98, 0.8);
					transform: rotate(90deg);
				}

				.portfolio-modal-content {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					position: relative;
				}

				.portfolio-swiper {
					width: 100% !important;
					height: calc(100vh - 100px) !important;
					flex: 1;
				}

				.portfolio-swiper-slide {
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
					background: #000;
					width: 100% !important;
					height: 100% !important;
					position: relative;
				}

				.swiper-zoom-container {
					width: 100% !important;
					height: 100% !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
					position: relative;
					min-height: 400px;
					overflow: hidden;
				}

				.portfolio-modal-image {
					max-width: 100% !important;
					max-height: calc(100vh - 100px) !important;
					width: auto !important;
					height: auto !important;
					object-fit: contain !important;
					display: block !important;
					margin: auto;
					visibility: visible !important;
					opacity: 1 !important;
				}

				.portfolio-modal-title {
					padding: 15px 20px;
					text-align: center;
					color: #fff;
					font-size: 16px;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 1px;
					background: rgba(255, 214, 98, 0.15);
					border-top: 2px solid rgba(255, 214, 98, 0.3);
				}

				/* Swiper Navigation Customization */
				:global(.portfolio-swiper .swiper-button-next),
				:global(.portfolio-swiper .swiper-button-prev) {
					color: #ffd662;
					background: rgba(255, 255, 255, 0.15);
					width: 50px;
					height: 50px;
					border-radius: 50%;
					backdrop-filter: blur(10px);
					transition: all 0.3s ease;
				}

				:global(.portfolio-swiper .swiper-button-next:hover),
				:global(.portfolio-swiper .swiper-button-prev:hover) {
					background: rgba(255, 214, 98, 0.4);
					transform: scale(1.1);
				}

				:global(.portfolio-swiper .swiper-button-next::after),
				:global(.portfolio-swiper .swiper-button-prev::after) {
					font-size: 20px;
					font-weight: bold;
				}

				:global(.portfolio-swiper .swiper-pagination-bullet) {
					background: #ffd662;
					opacity: 0.5;
					width: 12px;
					height: 12px;
				}

				:global(.portfolio-swiper .swiper-pagination-bullet-active) {
					opacity: 1;
					background: #ffd662;
				}

				/* Responsive adjustments */
				@media (max-width: 768px) {
					.portfolio-modal-close {
						top: 10px;
						right: 10px;
						width: 40px;
						height: 40px;
						font-size: 20px;
					}

					.portfolio-swiper {
						height: calc(100vh - 80px);
					}

					.portfolio-modal-title {
						padding: 12px 15px;
						font-size: 14px;
					}

					/* Hide navigation arrows on mobile */
					:global(.portfolio-swiper .swiper-button-next),
					:global(.portfolio-swiper .swiper-button-prev) {
						display: none !important;
					}

					:global(.portfolio-swiper .swiper-button-next::after),
					:global(.portfolio-swiper .swiper-button-prev::after) {
						display: none !important;
					}
				}
			`}</style>
		</>
	);
};

export default ProjectCard;
