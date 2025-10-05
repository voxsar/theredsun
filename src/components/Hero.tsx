import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

        const slides = [
                {
                        title: 'Charting the digital cosmos with purpose',
                        subtitle: 'Technology + ethics + imagination',
                        description:
                                'We guide visionary partners through the digital cosmos, blending ethical AI and imaginative storytelling into every experience.',
                },
                {
                        title: 'Empowering businesses to thrive responsibly',
                        subtitle: 'Mission-driven partnerships',
                        description:
                                'Our team equips organisations with diverse stacks and playbooks so ethical AI becomes a catalyst for growth, trust, and narrative resonance.',
                },
                {
                        title: 'Diverse stacks, fearless products',
                        subtitle: 'Technology that feels human',
                        description:
                                'From modular platforms to story-led services, we orchestrate technology, ethics, and imagination into offerings that empower businesses to stand apart.',
                },
        ];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

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
		<section className="relative overflow-visible bg-orange-100 py-20 lg:py- min-h-[60vh]">
			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					{/* Slider in normal flow: 6 / 2 / 4 on large screens */}
					<div className="grid gap-10 lg:grid-cols-12 lg:items-center py-20 mx-10">
						<div className="space-y-6 lg:col-span-8 lg:pr-10" style={fixedHeight ? { minHeight: fixedHeight, overflow: 'visible' } : undefined}>
							<div className="space-y-2">
								<p className="uppercase tracking-[0.35em] text-xl font-semibold text-black">{slides[currentSlide].subtitle}</p>
								<h1 className="text-5xl lg:text-6xl font-title font-extrabold text-black leading-tight">{slides[currentSlide].title}</h1>
								<p className="font-body text-3xl text-black leading-snug mt-0">{slides[currentSlide].description}</p>
							</div>
							<div className="flex flex-wrap gap-3">
								<button className="px-6 py-3 rounded-full border border-black bg-orange-100 text-black font-medium transition-colors hover:bg-orange-200">Explore solutions</button>
								<button className="px-6 py-3 rounded-full border border-black text-black font-medium transition-colors hover:bg-orange-200">Talk to our team</button>
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
						{/* empty middle columns */}
						<div className="lg:col-span-4 flex justify-center">
							<div className="relative w-full aspect-square lg:w-[420px] overflow-hidden rounded-3xl">
								<iframe src="https://my.spline.design/robotfollowcursorforlandingpage-WS2q4JW8psPctyWFuHDds2VX/" title="Interactive robot animation" frameBorder="0" className="absolute inset-0 w-full h-full object-cover" allowFullScreen></iframe>
							</div>
						</div>
					</div>

					{/* White rounded box kept below the content with clear spacing and constrained width */}
					<div>
						<div className="rounded-[1.25rem] bg-[#efe6db] p-6 lg:p-8">{/* Outer beige container now sits directly in the main page container for matching box width */}
							<div className="grid gap-6 lg:grid-cols-12 items-center">
                                                                <div className="lg:col-span-7">
                                                                        <h2 className="text-4xl lg:text-5xl font-title font-black text-[#1b1b1b]">Red Sun Innovation Outlook</h2>
                                                                        <p className="mt-4 text-base lg:text-2xl text-[#2b2b2b] leading-relaxed max-w-3xl">Red Sun’s Innovation Outlook tracks how responsible automation, storytelling, and design are shaping resilient organisations. Dive into the latest pulse on ethical technology adoption and human-centred growth.</p>
                                                                </div>

                                                                <div className="lg:col-span-5 flex gap-4 lg:gap-6">
                                                                        <a href="https://theredsun.global/innovation-outlook" className="flex-1 rounded-2xl bg-[#d9d0c6] p-6 text-left border border-transparent hover:bg-[#d2c7bb] transition-colors" target="_blank" rel="noreferrer">
                                                                                <div className="flex items-center justify-between">
                                                                                        <span className="text-3xl text-[#1b1b1b]">View the outlook</span>
                                                                                        <span aria-hidden className="text-2xl">→</span>
                                                                                </div>
                                                                        </a>

                                                                        <a href="https://theredsun.global/data-atlas" className="flex-1 rounded-2xl bg-[#d9d0c6] p-6 text-left border border-transparent hover:bg-[#d2c7bb] transition-colors" target="_blank" rel="noreferrer">
                                                                                <div className="flex items-center justify-between">
                                                                                        <span className="text-3xl text-[#1b1b1b]">Access the data atlas</span>
                                                                                        <span aria-hidden className="text-2xl">→</span>
                                                                                </div>
                                                                        </a>
                                                                </div>
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