import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#D7E3FC] to-[#EDF2FB] px-8 py-12 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#003554]">About StudyXync</h3>
          <p className="text-[#006494]">
            A platform dedicated to helping teachers share and discover educational resources.
            Join our community of educators making a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#003554]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/dashboard" 
                className="text-[#006494] hover:text-[#0582CA] transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/courses" 
                className="text-[#006494] hover:text-[#0582CA] transition"
              >
                Browse Courses
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/notes" 
                className="text-[#006494] hover:text-[#0582CA] transition"
              >
                My Notes
              </Link>
            </li>
            <li>
              <Link 
                href="/help" 
                className="text-[#006494] hover:text-[#0582CA] transition"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#003554]">Contact Us</h3>
          <ul className="space-y-2 text-[#006494]">
            <li>Email: support@studysync.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Hours: Mon-Fri 9:00 AM - 5:00 PM</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#003554]">Location</h3>
          <address className="not-italic text-[#006494]">
            StudyXync Education<br />
            123 Learning Street<br />
            Education District<br />
            New Delhi, 110001<br />
            India
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#ABC4FF]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#006494] text-sm">
            © {new Date().getFullYear()} StudyXync. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-sm text-[#006494] hover:text-[#0582CA] transition"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-[#006494] hover:text-[#0582CA] transition"
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies" 
              className="text-sm text-[#006494] hover:text-[#0582CA] transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-6xl mx-auto mt-8 flex justify-center gap-6">
        <Link 
          href="#" 
          className="text-[#006494] hover:text-[#0582CA] transition"
        >
          Twitter
        </Link>
        <Link 
          href="#" 
          className="text-[#006494] hover:text-[#0582CA] transition"
        >
          LinkedIn
        </Link>
        <Link 
          href="#" 
          className="text-[#006494] hover:text-[#0582CA] transition"
        >
          Facebook
        </Link>
        <Link 
          href="#" 
          className="text-[#006494] hover:text-[#0582CA] transition"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;