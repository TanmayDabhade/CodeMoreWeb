// StartLearning.js
import React from 'react';
import RepoFetch from './Githubapi';
import Getdata from './Getdata';
import NavBar from './NavBar';

function StartLearning(prop) {

  return (
   <>
    {/* <RepoFetch /> */}
    <div className='w-full justify-center flex'>
    <Getdata topic = {prop}/>
    </div>
   </>
  );
}

export default StartLearning;



    
  

