import { Link } from "react-router-dom"
import { useState, useRef } from "react"

export default function SpotlightsDetail() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Failed to play video:", err);
        setVideoError(true);
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-12">
      <Link to="/" className="text-blue-600 hover:underline mb-6 self-start">&larr; Back to Portfolio</Link>
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-2">SpotMe - A Social Media Application</h2>
        <div className="text-gray-600 mb-4">Currently in Submission to the Apple iOS App Store</div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
            <li>Created a mobile app that randomly selects users to post platform-wide, simulating a lottery of fame/internet attention.</li>
            <li>The front-end was implemented using the React Native framework. The back-end is written in Rust using S3 and PostgreSQL for object and data storage respectively.</li>
            <li>Designed to disrupt traditional social media's follower-based hierarchy by giving everyone an equal chance at visibility.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Product Demonstration</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border mb-3">
            {videoError ? (
              <div className="h-full w-full flex flex-col items-center justify-center p-4">
                <p className="text-red-500 mb-2">Unable to load video</p>
                <p className="text-gray-500 text-center text-sm">
                  The video file may be missing or in an unsupported format.
                </p>
              </div>
            ) : (
              <video 
                ref={videoRef}
                controls
                className="w-full h-full" 
                onError={() => setVideoError(true)}
                onClick={handlePlayVideo}
                poster="/assets/spotme-thumbnail.jpg"
              >
                <source src="/assets/spotme-mobile-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
            <strong className="text-gray-800">Demo Note:</strong> The demonstration showcases a nature photography themed Spotlight. Upon official launch, Spotlights will feature general content without specific themes, with themed Spotlights introduced in subsequent updates.
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">How It Works</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
            <li>
              <span className="font-medium">Democratic Visibility:</span> Every user has an equal chance to be selected for a platform-wide Spotlight, regardless of follower count.
            </li>
            <li>
              <span className="font-medium">Time-Limited Exposure:</span> Spotlights refresh at regular intervals, giving different users the opportunity to shine.
            </li>
            <li>
              <span className="font-medium">Authentic Content:</span> By removing the pressure to accumulate followers, users are encouraged to share genuine, unfiltered content.
            </li>
          </ul>
        </div>

        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold mb-3">Future Development Roadmap</h3>
          <div className="text-gray-700">
            <p className="mb-3">
              SpotMe is designed for expansion with community-focused features planned for future releases:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-left">
              <li>
                <span className="font-medium">Community Spotlights:</span> Specialized spotlight channels for distinct communities such as photographers, musicians, athletes, and college students.
              </li>
              <li>
                <span className="font-medium">Interest-Based Discovery:</span> Allow users to explore content through specific interests and passions rather than following particular accounts.
              </li>
              <li>
                <span className="font-medium">Geographic Spotlights:</span> Local spotlights to highlight content and creators from specific regions or cities.
              </li>
              <li>
                <span className="font-medium">Collaborative Spotlights:</span> Enable multiple randomly selected users to contribute to themed collaborative content experiences.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Current Status</h3>
          <p className="text-gray-700">
            SpotMe is currently undergoing review for the Apple iOS App Store. We're finalizing core features and preparing for a public launch in the coming months.
          </p>
        </div>
      </div>
    </div>
  )
}