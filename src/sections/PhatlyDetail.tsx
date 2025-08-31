import { Link } from "react-router-dom"
import { useState, useRef } from "react"

export default function PhatlyDetail() {
  const [activeTab, setActiveTab] = useState("web");
  const [webVideoError, setWebVideoError] = useState(false);
  const [mobileVideoError, setMobileVideoError] = useState(false);
  
  // References to access video elements directly
  const webVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Handle play button click
  const handlePlayWeb = () => {
    if (webVideoRef.current) {
      webVideoRef.current.play().catch(err => {
        console.error("Failed to play web video:", err);
        setWebVideoError(true);
      });
    }
  };

  const handlePlayMobile = () => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(err => {
        console.error("Failed to play mobile video:", err);
        setMobileVideoError(true);
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-12">
      <Link to="/" className="text-blue-600 hover:underline mb-6 self-start">&larr; Back to Portfolio</Link>
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-2">Phatly - A Music Streaming Application</h2>
        <div className="text-gray-600 mb-4">In the process of starting as a company</div>
        
        {/* Content sections remain the same */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
            <li>Created a music streaming service with a unique feature set designed to make music discovery and streaming more enjoyable for both listeners and artists.</li>
            <li>The front-end was implemented using React Native for mobile applications and Vite React for web interfaces, providing a seamless cross-platform experience.</li>
            <li>The back-end architecture leverages Rust for performance-critical components, with Amazon S3 for scalable object storage and PostgreSQL for relational data management.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
            <li>
              <span className="font-medium">Music Industry Integration:</span> Engineered a high-performance XML parser in Rust that processes electronic release notifications from music distributors, automatically ingesting music files and metadata via SFTP while adhering to DDEX music industry standard protocols.
            </li>
            <li>
              <span className="font-medium">Revenue Management:</span> Implemented an automated sales reporting system that generates and distributes revenue reports to music distributors, ensuring transparent and timely payments to artists.
            </li>
            <li>
              <span className="font-medium">Security Architecture:</span> Developed a custom authentication system from scratch in Rust featuring access and renew tokens, providing robust security while maintaining excellent user experience.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Product Demonstration</h3>
          
          {/* Demo Selection Tabs */}
          <div className="flex border-b mb-4">
            <button 
              className={`py-2 px-4 font-medium ${activeTab === "web" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("web")}
            >
              Web Platform
            </button>
            <button 
              className={`py-2 px-4 font-medium ${activeTab === "mobile" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("mobile")}
            >
              Mobile App
            </button>
          </div>
          
          {/* Web Demo - Simplified */}
          {activeTab === "web" && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border">
              {webVideoError ? (
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <p className="text-red-500 mb-2">Unable to load video</p>
                  <p className="text-gray-500 text-center text-sm">
                    The video file may be missing or in an unsupported format.
                    <br />
                    Please check that <code className="bg-gray-200 px-1 rounded">public/assets/phatly-web-demo.webm</code> exists.
                  </p>
                </div>
              ) : (
                <video 
                  ref={webVideoRef}
                  controls
                  className="w-full h-full" 
                  onError={() => setWebVideoError(true)}
                  onClick={handlePlayWeb}
                  poster="/personal-portfolio/assets/phatly-web-thumbnail.png"
                >
                  <source src="/personal-portfolio/assets/phatly-web-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          
          {/* Mobile Demo - Simplified */}
          {activeTab === "mobile" && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border">
              {mobileVideoError ? (
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <p className="text-red-500 mb-2">Unable to load video</p>
                  <p className="text-gray-500 text-center text-sm">
                    The video file may be missing or in an unsupported format.
                    <br />
                    Please check that <code className="bg-gray-200 px-1 rounded">public/assets/phatly-mobile-demo.mp4</code> exists.
                  </p>
                </div>
              ) : (
                <video
                  ref={mobileVideoRef}
                  controls
                  className="w-full h-full" 
                  onError={() => setMobileVideoError(true)}
                  onClick={handlePlayMobile}
                  poster="/personal-portfolio/assets/phatly-mobile-thumbnail.PNG"
                >
                  <source src="/personal-portfolio/assets/phatly-mobile-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-2 text-center">
            Click the video to play the demonstration
          </p>
        </div>

        {/* New Feature Highlight Section */}
        <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Feature Highlight: Relative Artist Popularity System</h3>
          <div className="text-gray-700">
            <p className="mb-3">
              Phatly implements an innovative artist ranking system that establishes relative popularity metrics across the platform:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-left">
              <li>
                Our algorithm dynamically assigns a 100% popularity score to the most-streamed artist, with all other artists scaled relatively to this benchmark.
              </li>
              <li>
                This creates a transparent ecosystem where artists can accurately gauge their market position and growth trajectory.
              </li>
              <li>
                <span className="italic">Demo Note:</span> In the current demonstration, you'll notice J-Pop as the featured genre and a single artist with 100% popularity, as we're showcasing the system with an initial content library.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Current Status</h3>
          <p className="text-gray-700">
            Phatly is currently transitioning from a personal project to a startup company. Our team is focused on expanding our music library partnerships and refining the user experience before our official launch.
          </p>
        </div>
      </div>
    </div>
  )
}