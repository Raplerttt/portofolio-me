'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, experience, education, skills, funFacts } from '../../data/about';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know my journey, skills, and what drives me as a software engineer
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={personalInfo.image}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h2>
              <p className="text-xl text-blue-600 mb-4">{personalInfo.title}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{personalInfo.bio}</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'funfacts', label: 'Fun Facts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id} className="border-l-4 border-blue-500 pl-6 py-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.position}</h3>
                    <span className="text-blue-600 font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{item.company}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {item.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.id} className="border-l-4 border-green-500 pl-6 py-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.degree}</h3>
                    <span className="text-green-600 font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Relevant Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.technical.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.soft.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fun Facts Tab */}
          {activeTab === 'funfacts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700">{fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Personal Story Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {personalInfo.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}