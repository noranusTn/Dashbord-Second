// ProjectList.js

import React, { Component } from 'react';
import './ProjectList.css';
import { Icon } from '@iconify/react';
import AddProject from './AddProject';
import Dashboard from './Dashboard';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <div class="container mt-5 ">
        
      <div class="row ">
        <div class="col-lg-6">
          <h1 class="title">Projects</h1>
          <button className=' btn-add'>
          <i >
          <Icon icon="material-symbols:add-box" width="24" height="24" />
          </i>
          
            Add new Project</button>
          </div>
          </div>
          </div>
      <div className="search-container mt-3">
<div className="input-group mb-3">

<input
       type="text"
       className="form-control"
       placeholder=" Search..."
       aria-label="Search"
       aria-describedby="basic-addon1"
     />
</div>
</div>
        
        <div className="project-list">
        
          <div className="project-card">
            <h5 className='card-title row' >Project Title
            <i className="icon-card">
            <Icon icon="uiw:setting" width="24" height="24" />
            </i> </h5>
            <p> 
            Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.
            </p>
          </div>
          <div className="project-card">
            <h5 className='card-title row' >Project Title
            <i className="icon-card">
            <Icon icon="uiw:setting" width="24" height="24" />
            </i> </h5>
            <p>Lorem ipsum dolor sit amet consectetur. Lacinia at nunc a diam dictum curabitur non nisl.</p>
          </div>
          
        
          {/* Repeat project cards for each project */}
        </div>
      </div>
    );
  }
}

export default ProjectList;
