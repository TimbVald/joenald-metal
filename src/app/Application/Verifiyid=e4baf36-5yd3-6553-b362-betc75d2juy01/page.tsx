import React from 'react';

export default function CertificateVerificationPage() {
  const certificateData = [
    { label: 'Surname', value: 'ULRICH JOEL' },
    { label: 'First Name', value: 'FAMENI' },
    { label: 'Identification Number', value: 'CTRCMR000020410' },
    { label: 'Date of Birth', value: '1992/05/20' },
    { label: 'Trade', value: 'Welder' },
    { label: 'OFO Code', value: '651202' },
    { label: 'OFO Description', value: 'WELDER' },
    { label: 'Certificate Number', value: '12/245714' },
    { label: 'Date Tested', value: '2026/06/09' },
    { label: 'Date Certificate', value: '2026/11/23' },
    { label: 'Section Of the Act', value: 'SECTION 26' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-4 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white shadow-lg rounded-sm overflow-hidden">
        {/* Header */}
        <div className="bg-slate-600 px-6 py-4 border-b border-slate-700 shadow-sm relative z-10">
          <h1 className="text-white font-bold text-sm uppercase tracking-wide text-shadow-sm">
            Verify Authenticity of Certificate
          </h1>
        </div>

        {/* Data List */}
        <div className="flex flex-col">
          {certificateData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-row border-b border-gray-100 last:border-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              {/* Label Column */}
              <div className="w-1/2 px-4 py-4 sm:px-6">
                <span className="text-gray-700 font-bold text-sm block">
                  {item.label}
                </span>
              </div>
              
              {/* Value Column */}
              <div className="w-1/2 px-4 py-4 sm:px-6 border-l border-gray-100/50">
                <span className="text-gray-500 font-normal text-sm block break-words">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
