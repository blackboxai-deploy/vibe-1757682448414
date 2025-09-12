export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Hello World!
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              Welcome to your beautiful Next.js application
            </p>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              This is a modern, responsive Hello World page built with Next.js, Tailwind CSS, and lots of love ❤️
            </p>
            
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>✨</span>
                <span>Ready to build something amazing</span>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-gray-500 text-sm">
          Built with Next.js 15 & Tailwind CSS
        </div>
      </div>
    </div>
  );
}