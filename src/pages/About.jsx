import { Target, Eye, Award, FileCheck, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Learn about our journey, mission, and commitment to social justice
          </p>
        </div>
      </section>

      {/* Organization History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="section-title mt-2 mb-6">
                National Human Rights & Anti Corruption Social Justice Welfare Foundation
              </h2>
              <p className="text-gray-600 mb-4">
                Established with a vision to create a corruption-free and just society, the National Human Rights 
                & Anti Corruption Social Justice Welfare Foundation (NHRSJWF) has been at the forefront of 
                protecting human rights and fighting corruption across India.
              </p>
              <p className="text-gray-600 mb-4">
                Our foundation was born out of the need to address the growing concerns of human rights violations 
                and rampant corruption that affects the common citizen. We believe that every individual deserves 
                to live with dignity, free from exploitation and injustice.
              </p>
              <p className="text-gray-600">
                Over the years, we have expanded our reach to multiple states, conducting awareness programs, 
                providing legal aid, and empowering communities to stand up for their rights. Our dedicated team 
                of volunteers and activists work tirelessly to ensure that justice reaches every corner of society.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80"
                alt="Team meeting"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">To protect and promote human rights for all citizens</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">To fight corruption at all levels of society</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">To empower women, youth, and marginalized communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">To provide legal awareness and support to the underprivileged</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We envision an India where every citizen lives with dignity and their fundamental rights are 
                protected. A society free from corruption, discrimination, and injustice.
              </p>
              <p className="text-gray-600">
                Our vision extends to creating self-reliant communities that can advocate for their rights, 
                where women are empowered, youth are skilled, and the marginalized are uplifted. We strive 
                for a nation where justice is accessible to all, regardless of social or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Leadership</span>
              <h2 className="section-title mt-2 mb-6">Message from the Chairman</h2>
              <blockquote className="text-gray-600 text-lg italic mb-6 border-l-4 border-purple-700 pl-6">
                "Our commitment to social justice is unwavering. Every day, we work towards building a society 
                where human rights are respected, corruption is eliminated, and every citizen has equal 
                opportunities to thrive."
              </blockquote>
              <p className="text-gray-600 mb-4">
                As the Chairman of NHRSJWF, I am proud to lead a team of dedicated individuals who share the 
                common goal of creating positive change. Our foundation has touched countless lives through 
                our various programs and initiatives.
              </p>
              <p className="text-gray-600">
                I invite you to join us in this noble mission. Together, we can build a stronger, more just 
                society for future generations.
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-gray-800">Mr. Rajesh Kumar</p>
                <p className="text-purple-700">Founder & Chairman, NHRSJWF</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                  alt="Chairman"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-700 to-orange-500 p-1 rounded-xl">
                  <div className="bg-white p-4 rounded-lg">
                    <Award className="text-purple-700" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="section-padding bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Registration & Certifications</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              NHRSJWF is a legally registered non-profit organization with all necessary certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <FileCheck className="mx-auto mb-4" size={40} />
              <h4 className="font-bold mb-2">Regd</h4>
              <p className="text-purple-100">CSR0063265</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <FileCheck className="mx-auto mb-4" size={40} />
              <h4 className="font-bold mb-2">NHRSJC</h4>
              <p className="text-purple-100">2023</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="mx-auto mb-4" size={40} />
              <h4 className="font-bold mb-2">ISO 9001</h4>
              <p className="text-purple-100">2015</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <FileCheck className="mx-auto mb-4" size={40} />
              <h4 className="font-bold mb-2">NGO ID</h4>
              <p className="text-purple-100">GJ/00033750</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <FileCheck className="mx-auto mb-4" size={40} />
              <h4 className="font-bold mb-2">NitiAyog</h4>
              <p className="text-purple-100 text-sm">U88900GJ2023NPL145998</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Foundation</span>
            <h2 className="section-title mt-2">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚖️</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Justice</h3>
              <p className="text-gray-600">
                We believe in equal justice for all, regardless of social, economic, or political status.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our operations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💪</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We empower communities with knowledge, skills, and resources to advocate for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
