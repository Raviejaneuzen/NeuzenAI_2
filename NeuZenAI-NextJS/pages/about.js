import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About NeuZenAI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading AI solutions company dedicated to transforming businesses 
            through intelligent technology and innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-600">50+ AI specialists and data scientists</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-600">500+ successful AI implementations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">Award-winning AI solutions</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-600">Serving clients worldwide</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            To democratize artificial intelligence and make it accessible to businesses of all sizes. 
            We believe that AI should not be a luxury for tech giants, but a powerful tool that every 
            organization can leverage to drive innovation, improve efficiency, and create value for their customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;