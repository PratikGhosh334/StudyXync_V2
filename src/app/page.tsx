import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Enhanced Gradient Background */}
      <section className="relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#EDF2FB]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#EDF2FB] via-[#B6CCFE] to-[#ABC4FF] animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#D7E3FC]/50 to-transparent"></div>
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="text-center max-w-3xl">
            {/* Interactive Logo */}
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#003554] via-[#006494] to-[#0582CA] text-transparent bg-clip-text leading-normal py-2 hover:scale-105 transition-transform cursor-default select-none animate-text-gradient">
              StudyXync
            </h1>
            <p className="text-xl text-[#003554] mb-8 hover:text-[#006494] transition-colors">
              Your all-in-one platform for synchronized learning and collaboration
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <Link 
                href="/register" 
                className="group relative px-6 py-3 bg-gradient-to-r from-[#0582CA] to-[#00A6FB] text-white rounded-md shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00A6FB] to-[#0582CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative group-hover:scale-105 transition-transform inline-block">
                  Get Started
                </span>
              </Link>
              <Link 
                href="/dashboard/notes" 
                className="group px-6 py-3 bg-white/50 backdrop-blur-sm border border-[#ABC4FF] text-[#006494] rounded-md shadow-lg hover:bg-white/70 transition-all duration-300"
              >
                <span className="relative group-hover:translate-x-1 transition-transform inline-block">
                  Browse Notes →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-[#E2EAFC] to-[#EDF2FB] py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text">
            Why Choose StudyXync?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Interactive Feature Cards */}
            <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#ABC4FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#006494] group-hover:text-[#0582CA] transition-colors">
                Easy Note Sharing
              </h3>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">
                Share your teaching materials seamlessly with colleagues worldwide
              </p>
            </div>
            <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#ABC4FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#006494] group-hover:text-[#0582CA] transition-colors">
                Course Organization
              </h3>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">
                Find resources organized by courses and subjects
              </p>
            </div>
            <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#ABC4FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-[#006494] group-hover:text-[#0582CA] transition-colors">
                Smart Sorting
              </h3>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">
                Discover popular content sorted by views and ratings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-[#EDF2FB] to-[#D7E3FC] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Interactive Stat Cards */}
            <div className="group cursor-default">
              <h4 className="text-4xl font-bold bg-gradient-to-r from-[#0582CA] to-[#00A6FB] text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                10k+
              </h4>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">Active Teachers</p>
            </div>
            <div className="group cursor-default">
              <h4 className="text-4xl font-bold bg-gradient-to-r from-[#006494] to-[#0582CA] text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                50k+
              </h4>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">Shared Notes</p>
            </div>
            <div className="group cursor-default">
              <h4 className="text-4xl font-bold bg-gradient-to-r from-[#0582CA] to-[#00A6FB] text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                100+
              </h4>
              <p className="text-[#003554] group-hover:text-[#006494] transition-colors">Subjects Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}