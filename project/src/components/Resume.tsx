import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <h1 className="text-4xl font-bold mb-8 text-slate-800">My Resume</h1>
      <div className="w-full max-w-4xl h-[80vh] border rounded-lg shadow-lg bg-white overflow-hidden">
        <embed
          src="/KSHITIJ_NK_RESUME.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
      <a
        href="/KSHITIJ_NK_RESUME.pdf"
        download
        className="mt-6 px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all duration-300 btn-animate"
      >
        Download PDF
      </a>
    </div>
  );
};

export default Resume;
