import ProjectElevenProgressChart from 'components/charts/e-charts/ProjectElevenProgressChart';
import React from 'react';

const ProjectElevenProgress = () => {
  return (
    <>
      <h3>Project: eleven Progress</h3>
      <p className="text-body-tertiary mb-0 mb-xl-3">Deadline &amp; progress</p>
      <ProjectElevenProgressChart />
    </>
  );
};

export default ProjectElevenProgress;
