import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			title: 'AI research and products that put safety at the frontier',
			subtitle: 'Transforming businesses through cutting-edge technology',
			description:
				'We deliver comprehensive IT services and products that drive digital transformation and accelerate business growth.',
		},
		{
			title: 'AI research and products that put safety at the frontier',
			subtitle: 'Building a greener digital future',
			description:
				'Our commitment to sustainability drives us to create eco-friendly solutions that benefit both business and environment.',
		},
		{
			title: 'AI research and products that put safety at the frontier',
			subtitle: 'Responsible artificial intelligence for all',
			description:
				'We develop AI solutions with ethics at the core, ensuring fairness, transparency, and positive impact on society.',
		},
	];

	const columnHighlights = [
		{
			heading: 'Strategic technology leadership',
			body:
				'Partner with a team that aligns advanced engineering with clear business outcomes for measurable growth.',
			bullets: ['Modern platform architecture', 'Value-focused delivery roadmaps', 'Embedded knowledge transfer'],
		},
		{
			heading: 'Responsible innovation at scale',
			body:
				'Confidently adopt AI and cloud capabilities with frameworks that keep people, planet, and governance at the center.',
			bullets: ['Ethical AI implementation', 'Sustainability-first solutions', '24/7 strategic guidance'],
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative bg-orange-100 pt-28 pb-16 min-h-[60vh]">
			<div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
				<div className="max-w-screen-2xl mx-auto">
					<div className="bg-white border border-orange-100 rounded-[2.5rem] shadow-xl">
						<div className="grid gap-10 lg:grid-cols-3 p-10 lg:p-14">
							<div className="space-y-6 lg:pr-10">
								<div className="space-y-4">
									<p className="uppercase tracking-[0.35em] text-xs font-semibold text-black">{slides[currentSlide].subtitle}</p>
									<h1 className="text-4xl lg:text-5xl font-title font-bold text-black leading-tight">
										{slides[currentSlide].title}
									</h1>
									<p className="text-lg font-body text-black leading-relaxed">
										{slides[currentSlide].description}
									</p>
								</div>
								<div className="flex flex-wrap gap-3">
									<button className="px-6 py-3 rounded-full border border-black bg-orange-100 text-black font-medium transition-colors hover:bg-orange-200">
										Explore solutions
									</button>
									<button className="px-6 py-3 rounded-full border border-black text-black font-medium transition-colors hover:bg-orange-200">
										Talk to our team
									</button>
								</div>
							</div>

							{columnHighlights.map((highlight, index) => (
								<div key={highlight.heading} className="flex flex-col justify-between rounded-3xl border border-orange-100 p-6 bg-orange-50">
									<div className="space-y-4">
										<h3 className="text-xl font-title font-semibold text-black">{highlight.heading}</h3>
										<p className="text-base font-body text-black leading-relaxed">{highlight.body}</p>
										<ul className="space-y-2">
											{highlight.bullets.map((item) => (
												<li key={item} className="flex items-start gap-2 text-base text-black">
													<span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true"></span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="mt-6 text-sm font-medium text-black">{`0${index + 1}`}</div>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-4 border-t border-orange-100 px-10 py-6 lg:flex-row lg:items-center lg:justify-between">
							<div className="flex items-center gap-2">
								{slides.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-10 bg-black' : 'w-3 bg-black/50'
											}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>

							<div className="flex items-center gap-3">
								<button
									onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
									className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200"
									aria-label="Previous slide"
								>
									<ChevronLeft size={20} />
								</button>
								<button
									onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
									className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200"
									aria-label="Next slide"
								>
									<ChevronRight size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
  return (
    <section className="relative bg-orange-50 pt-28 pb-16 min-h-[60vh]">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-2xl mx-auto space-y-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-8 lg:pr-10">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.35em] text-xs font-semibold text-black">{slides[currentSlide].subtitle}</p>
                <h1 className="text-4xl lg:text-5xl font-title font-bold text-black leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg font-body text-black leading-relaxed">{slides[currentSlide].description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-full border border-black bg-orange-100 text-black font-medium transition-colors hover:bg-orange-200">
                  Explore solutions
                </button>
                <button className="px-6 py-3 rounded-full border border-black text-black font-medium transition-colors hover:bg-orange-200">
                  Talk to our team
                </button>
              </div>
              <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-10 bg-black' : 'w-3 bg-black/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-orange-200"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative h-full w-full min-h-[320px] overflow-hidden rounded-3xl">
                <iframe
                  src="https://my.spline.design/robotfollowcursorforlandingpage-WS2q4JW8psPctyWFuHDds2VX/"
                  title="Interactive robot animation"
                  frameBorder="0"
                  className="h-full w-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white border border-orange-100 rounded-[2.5rem] shadow-xl">
            <div className="grid gap-10 p-10 lg:p-14 lg:grid-cols-2">
              {columnHighlights.map((highlight, index) => (
                <div key={highlight.heading} className="flex flex-col justify-between rounded-3xl border border-orange-100 p-6 bg-orange-50">
                  <div className="space-y-4">
                    <h3 className="text-xl font-title font-semibold text-black">{highlight.heading}</h3>
                    <p className="text-base font-body text-black leading-relaxed">{highlight.body}</p>
                    <ul className="space-y-2">
                      {highlight.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-base text-black">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm font-medium text-black">{`0${index + 1}`}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;