'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { apiCall } from '../../lib/api';

interface Education {
  id: number;
  year: string;
  degree: string;
  field: string;
  institution: string;
  order_index: number;
  is_active: number;
}

interface Experience {
  id: number;
  year_range: string;
  position: string;
  organization: string;
  description: string;
  order_index: number;
  is_active: number;
}

interface Awards {
  id: number;
  year: string;
  title: string;
  description: string;
  order_index: number;
  is_active: number;
}

export default function PIPage() {
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [awards, setAwards] = useState<Awards[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPIData();
  }, []);

  const fetchPIData = async () => {
    try {
      const [educationRes, experienceRes, awardsRes] = await Promise.all([
        apiCall('/api/pi/education'),
        apiCall('/api/pi/experience'),
        apiCall('/api/pi/awards')
      ]);

      const educationData = await educationRes.json();
      const experienceData = await experienceRes.json();
      const awardsData = await awardsRes.json();

      setEducation(educationData);
      setExperience(experienceData);
      setAwards(awardsData);
    } catch (error) {
      console.error('Error fetching PI data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Principal Investigator
          </h1>
          <p className="text-xl text-gray-600">
            Academic Background, Professional Experience, and Achievements
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {education.map((item) => (
              <div key={item.id} className="mb-6 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="text-lg font-semibold text-blue-600 mb-2 sm:mb-0 sm:mr-4 sm:min-w-[80px]">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.degree}, {item.field}
                    </h3>
                    <p className="text-gray-700">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {experience.map((item) => (
              <div key={item.id} className="mb-6 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="text-lg font-semibold text-green-600 mb-2 sm:mb-0 sm:mr-4 sm:min-w-[140px]">
                    {item.year_range}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.position}
                    </h3>
                    <p className="text-gray-700 mb-2">{item.organization}</p>
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Awards and Honors</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {awards.map((item) => (
              <div key={item.id} className="mb-6 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="text-lg font-semibold text-yellow-600 mb-2 sm:mb-0 sm:mr-4 sm:min-w-[120px]">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-700">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}