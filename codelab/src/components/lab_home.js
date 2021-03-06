import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const lab_projects = [
  {
    "id": 1,
    "name": "Posts",
    "link": "/posts"
  },
  {
    "id": 2,
    "name": "Dog Breeds",
    "link": "/dog-breeds"
  },
  {
    "id": 3,
    "name": "TODO",
    "link": "/todo-list"
  }    
];
export default class LabHome extends Component {
  render() {
    return (
      <ul className="lab_proj_list nav list-group col-sm-4">
      {_.map(lab_projects, project => {
       return (
        <li className="nav-item list-group-item" key={project.id}>
          <Link className="nav-link" to={project.link}>
            {project.name}
          </Link>
        </li>         
       );
      })}
      </ul>
    );
  }
}
