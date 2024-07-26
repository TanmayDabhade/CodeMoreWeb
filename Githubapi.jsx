import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Getdata = (prop) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [experiences, setExperiences] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedFile, setSelectedFile] = useState("file1.json");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`path/to/your/json/files/${selectedFile}`);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedFile]);

  return (
    <>
      <div className="w-full h-screen duration-200">
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <select 
              onChange={(e) => setSelectedFile(e.target.value)} 
              className='outline-none px-4 rounded-xl'
            >
              <option value="../src/data/python.json">Python</option>
              <option value="file2.json">File 2</option>
              <option value="file3.json">File 3</option>
                     {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
<div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Python</h2>
        <div>
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="mb-8 p-4 bg-white rounded-lg shadow-md"
              onClick={() => setSelectedId(experience.id)}
            >
              <motion.h2>{experience.title}</motion.h2>
              <motion.h1>{experience.description}</motion.h1>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <motion.div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                {experiences.map((experience) =>
                  experience.id === selectedId ? (
                    <div key={experience.id}>
                      <motion.h2 className="text-2xl font-bold mb-4">{experience.title}</motion.h2>
                      <motion.h3 className="mb-2 text-gray-700">{experience.description}</motion.h3>
                      <motion.p className="text-black bg-gray-200 rounded p-10">{experience.snippet}</motion.p>
                      <motion.button
                        className="mt-4 p-2 bg-gray-800 text-white rounded"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                    </div>
                  ) : null
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Getdata;
