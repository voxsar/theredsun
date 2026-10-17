import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
	setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			subtitle: 'Software that holds up in production',
			title: 'We build the systems businesses run on',
			description:
				'Point of sale that keeps selling through an outage. Inventory that reconciles across locations. Learning platforms used by hundreds of students. Shipped, in use, and maintained.',
		},
		{
			subtitle: 'Four stacks, chosen to fit',
			title: 'The right stack for the problem, not the trend',
			description:
				'LEAN for validating an idea, MEAN for scaling a platform, LAMP for modernising what already works, WAMP for Windows-native estates. We tell you which one your problem needs.',
		},
		{
			subtitle: 'Ethical AI, applied not announced',
			title: 'AI where it earns its place',
			description:
				'We use AI where it removes real work — reading handwritten forms, parsing invoices, scoring assessments — with the output reviewable rather than trusted blindly.',
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, [slides.length]);

	// Keep the left content column at a constant height so the overall layout doesn't jump.
	// Approach: render a hidden offscreen copy of each slide, measure the tallest height,
	// and set that as the fixed height for the visible content column. This prevents layout
	// jank when switching slides where different text lengths would otherwise change height.
	const measureRef = useRef<HTMLDivElement | null>(null);
	const [fixedHeight, setFixedHeight] = useState<number | null>(null);

	useLayoutEffect(() => {
		function measure() {
			if (!measureRef.current) return;
			const children = Array.from(measureRef.current.children) as HTMLElement[];
			let max = 0;
			children.forEach((child) => {
				const h = child.offsetHeight;
				if (h > max) max = h;
			});
			// add a tiny buffer to avoid clipping with subpixel/line-height differences
			if (max > 0) setFixedHeight(max + 2);
		}

		// measure initially and on resize
		measure();
		window.addEventListener('resize', measure);

		// give a small timeout to allow webfonts / layout to finish loading, then re-measure
		const t = window.setTimeout(measure, 250);

		return () => {
			window.removeEventListener('resize', measure);
			clearTimeout(t);
		};
	}, [slides.length]);

	return (
		<section className="relative overflow-visible bg-orange-100 py-20 min-h-[60vh]">
			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center py-20 mx-10">
					<div className="space-y-6 lg:col-span-8 lg:pr-10" style={fixedHeight ? { minHeight: fixedHeight, overflow: 'visible' } : undefined}>
						<div className="space-y-2">
							<p className="uppercase tracking-[0.35em] text-xl font-semibold text-black">{slides[currentSlide].subtitle}</p>
							<h1 className="text-5xl lg:text-6xl font-title font-extrabold text-black leading-tight">{slides[currentSlide].title}</h1>
							<p className="font-body text-3xl text-black leading-snug mt-0">{slides[currentSlide].description}</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<button
								onClick={() => setCurrentPage('work')}
								className="px-6 py-3 rounded-full border border-black bg-orange-100 text-black font-medium transition-colors hover:bg-orange-200"
							>
								See our work
							</button>
							<button
								onClick={() => setCurrentPage('contact')}
								className="px-6 py-3 rounded-full border border-black text-black font-medium transition-colors hover:bg-orange-200"
							>
								Talk to our team
							</button>
						</div>
						<div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-center lg:justify-between">
							<div className="flex items-center gap-2">
								{slides.map((_, index) => (
									<button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-10 bg-black' : 'w-3 bg-black/50'}`} aria-label={`Go to slide ${index + 1}`} />
								))}
							</div>
							<div className="flex items-center gap-3">
								<button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200" aria-label="Previous slide"><ChevronLeft size={20} /></button>
								<button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200" aria-label="Next slide"><ChevronRight size={20} /></button>
							</div>
						</div>
					</div>

					<div className="lg:col-span-4 flex justify-center">
						<div className="relative w-full aspect-square lg:w-[420px] overflow-hidden rounded-3xl">
							<iframe src="https://my.spline.design/robotfollowcursorforlandingpage-WS2q4JW8psPctyWFuHDds2VX/" title="Interactive robot animation" frameBorder="0" className="absolute inset-0 w-full h-full object-cover" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* Hidden measurement container: renders all slides offscreen so we can compute the max height */}
			<div ref={measureRef} aria-hidden style={{ position: 'absolute', left: -9999, top: -9999, visibility: 'hidden', pointerEvents: 'none' }}>
				{slides.map((s, i) => (
					<div key={i} className="space-y-2" style={{ width: '100%' }}>
						<p className="uppercase tracking-[0.35em] text-xl font-semibold text-black">{s.subtitle}</p>
						<h1 className="text-5xl lg:text-6xl font-title font-extrabold text-black leading-tight">{s.title}</h1>
						<p className="font-body text-3xl text-black leading-snug mt-0">{s.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Hero;
