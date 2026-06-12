import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, X, Terminal } from 'lucide-react';

export default function Blog() {
  // State to track which post is currently open in the reading modal
  const [activePost, setActivePost] = useState(null);

  const featuredPost = {
    id: 'featured',
    title: "Architecting Cross-Border Fintech Platforms: A 2026 Guide",
    excerpt: "Discover how we leverage Node.js, Spring Boot, and PostgreSQL to build real-time currency exchange logic and secure international transaction systems capable of handling massive financial loads.",
    category: "Fintech Architecture",
    date: "June 2, 2026",
    author: "Agnik Mondal",
    readTime: "8 min read",
    content: [
      "In 2026, the demand for cross-border financial transactions has reached unprecedented levels. Modern fintech platforms can no longer rely on legacy batch-processing systems; they require sub-second latency and absolute transactional integrity.",
      "At SM Software Resource Capital, our approach to building these systems relies on a hybrid microservices architecture. We utilize Node.js for handling high-frequency websocket connections and real-time currency ticker updates, ensuring the UI feels instantaneously responsive to the end-user.",
      "However, for the core ledger and transactional ledger, we transition the workload to Spring Boot paired with an ACID-compliant PostgreSQL cluster. This ensures that even under massive concurrent load, race conditions are mitigated, and every cent is accounted for across international borders.",
      "Furthermore, integrating with APIs like Wise and Rapyd requires strict adherence to international compliance (KYC/AML). We implement bank-grade JWT authentication and AES-256 encryption at rest, guaranteeing that user data remains impenetrable."
    ]
  };

  const blogPosts = [
    {
      id: 1,
      title: "Scaling Node.js Backends for Real-Time Applications",
      excerpt: "When your user base spikes, your server shouldn't crash. Learn our deployment strategies for high-traffic environments.",
      category: "Backend Development",
      date: "May 28, 2026",
      author: "Engineering Team",
      readTime: "5 min read",
      content: [
        "Node.js is inherently single-threaded, which makes scaling it an interesting engineering challenge. When building real-time applications like live chat ecosystems or live delivery tracking, a single process will quickly hit its memory limit under heavy load.",
        "Our standard protocol involves utilizing the native Node.js Cluster module paired with PM2 for process management. By spawning a worker for every CPU core available, we instantly multiply our server's throughput capacity.",
        "For global scaling, we containerize these applications using Docker and deploy them across Kubernetes clusters. Paired with a Redis instance for managing socket session states across multiple servers, we ensure that if one pod goes down, the end-user never even notices."
      ]
    },
    {
      id: 2,
      title: "Flutter vs. React Native: Building for the Future",
      excerpt: "An in-depth analysis of cross-platform mobile frameworks and why we choose specific tools for enterprise-level applications.",
      category: "Mobile App Dev",
      date: "May 15, 2026",
      author: "Mobile Division",
      readTime: "6 min read",
      content: [
        "The debate between Flutter and React Native is often centered around developer preference rather than architectural necessity. However, at an enterprise level, the distinction matters.",
        "React Native allows us to leverage our existing web developers (who already know React) to build mobile apps. It uses a JS bridge to communicate with native components. While this is great for rapid MVP deployment, it can occasionally bottleneck during heavy animations.",
        "Flutter, written in Dart, bypasses the bridge entirely and compiles directly to native ARM code, drawing its own pixels via the Impeller rendering engine. For clients requiring complex, highly animated UIs with absolutely zero frame drops, Flutter is our undeniable framework of choice."
      ]
    },
    {
      id: 3,
      title: "Why We Chose MongoDB for High-Volume Data Systems",
      excerpt: "Relational vs. NoSQL. Exploring the schema-less advantages of MongoDB when building dynamic, data-heavy SaaS platforms.",
      category: "Database Design",
      date: "May 4, 2026",
      author: "Engineering Team",
      readTime: "7 min read",
      content: [
        "Not every application requires the rigid structure of a SQL database. When building dynamic SaaS platforms—where user configurations and data shapes change constantly—the schema-less nature of MongoDB is a massive advantage.",
        "Storing data as BSON (Binary JSON) documents allows us to embed arrays and sub-documents directly alongside the parent data. This eliminates the need for expensive, complex SQL JOIN operations when retrieving a user's dashboard data.",
        "Coupled with MongoDB's native sharding and replica sets, we can distribute data geographically, ensuring low latency reads for users regardless of where they are in the world."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
      
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-bold tracking-widest mb-6 uppercase">
            Engineering Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Terminal</span> Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Deep dives into software architecture, development trends, and the technical strategies driving SM Software Resource Capital.
          </p>
        </div>

        {/* Featured Post Card */}
        <div className="mb-16 group">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-green-500/50 transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-600"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider rounded border border-green-500/20">
                    Featured
                  </span>
                  <span className="flex items-center text-xs text-gray-400 font-mono">
                    <Tag className="w-3 h-3 mr-1" /> {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500 font-mono">
                  <span className="flex items-center"><User className="w-4 h-4 mr-2 text-green-500" /> {featuredPost.author}</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-green-500" /> {featuredPost.date}</span>
                  <span className="text-green-500/50">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 flex justify-start lg:justify-end">
                <button 
                  onClick={() => setActivePost(featuredPost)}
                  className="px-8 py-4 bg-green-500 text-black font-bold rounded-md hover:bg-green-400 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                >
                  Read Protocol
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="flex items-center space-x-4 mb-10">
          <h3 className="text-2xl font-bold text-white">Latest Transmissions</h3>
          <div className="flex-grow h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
        </div>

        {/* Standard Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 md:p-8 hover:-translate-y-2 hover:border-green-500/40 transition-all duration-300 flex flex-col h-full group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-green-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="px-2 py-1 bg-[#111] text-green-400 text-xs font-bold uppercase tracking-wider rounded border border-gray-800">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="border-t border-gray-800 pt-6 mt-auto">
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
                  <span className="flex items-center"><User className="w-3 h-3 mr-1 text-green-500" /> {post.author}</span>
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-green-500" /> {post.date}</span>
                </div>
                <button 
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center text-green-400 font-bold text-sm tracking-wider uppercase hover:text-green-300 transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* READING MODAL (Opens when activePost is set) */}
      {activePost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#050505] border border-green-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#050505] border-b border-gray-800 p-6 flex justify-between items-center z-20">
              <div className="flex items-center text-green-400 font-mono text-sm tracking-widest uppercase font-bold">
                <Terminal className="w-5 h-5 mr-2" />
                Terminal Reading Environment
              </div>
              <button 
                onClick={() => setActivePost(null)}
                className="text-gray-400 hover:text-white bg-[#111] hover:bg-gray-800 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body (The Article) */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <div className="max-w-3xl mx-auto">
                <span className="px-3 py-1 bg-[#111] text-green-400 text-xs font-bold uppercase tracking-wider rounded border border-gray-800 mb-6 inline-block">
                  {activePost.category}
                </span>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {activePost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-800 text-sm text-gray-500 font-mono mb-8">
                  <span className="flex items-center"><User className="w-4 h-4 mr-2 text-green-500" /> {activePost.author}</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-green-500" /> {activePost.date}</span>
                  <span className="text-green-500/50">•</span>
                  <span>{activePost.readTime}</span>
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  {/* Map through the dummy paragraphs we created */}
                  {activePost.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                {/* End of article marker */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-center text-green-500/50 font-mono text-sm">
                  &lt;EOF /&gt;
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Add custom CSS for the modal scrollbar to keep the dark theme consistent */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #222; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #22c55e; 
        }
      `}} />

    </div>
  );
}