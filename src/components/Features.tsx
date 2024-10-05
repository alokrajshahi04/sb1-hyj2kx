import React from 'react'
import { Instagram, Youtube, Twitter, PenTool, BarChart2, Search } from 'lucide-react'

const features = [
  { icon: <Instagram className="h-8 w-8 text-blue-600" />, title: 'Instagram Content', description: 'Create engaging posts and stories optimized for Instagram.' },
  { icon: <Youtube className="h-8 w-8 text-blue-600" />, title: 'YouTube Videos', description: 'Edit and optimize videos for maximum YouTube engagement.' },
  { icon: <Twitter className="h-8 w-8 text-blue-600" />, title: 'Twitter Management', description: 'Schedule tweets and manage your Twitter presence effortlessly.' },
  { icon: <PenTool className="h-8 w-8 text-blue-600" />, title: 'Design Templates', description: 'Access a wide range of customizable design templates.' },
  { icon: <Search className="h-8 w-8 text-blue-600" />, title: 'SEO Optimization', description: "Improve your content's search engine visibility." },
  { icon: <BarChart2 className="h-8 w-8 text-blue-600" />, title: 'Analytics Dashboard', description: 'Track your performance across all platforms in one place.' },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Powerful Features</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Everything you need to supercharge your marketing efforts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="mb-4 bg-blue-100 inline-block p-3 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features