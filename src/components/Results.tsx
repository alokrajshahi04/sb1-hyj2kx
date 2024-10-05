import React from 'react'
import { TrendingUp, Users, Award } from 'lucide-react'

const results = [
  { icon: <TrendingUp className="h-10 w-10 text-blue-600" />, title: '250%', description: 'Average increase in engagement' },
  { icon: <Users className="h-10 w-10 text-blue-600" />, title: '10,000+', description: 'Small businesses empowered' },
  { icon: <Award className="h-10 w-10 text-blue-600" />, title: '98%', description: 'Customer satisfaction rate' },
]

const Results = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Proven Results</h2>
        <p className="text-xl text-gray-600 text-center mb-12">See the impact we've made for businesses like yours</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-block">{result.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results