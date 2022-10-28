import React, { useState } from 'react'
import DeleteIcon from '../../assets/icon/🦆 icon _delete_.png'
import CreateIcon from '../../assets/icon/🦆 icon _create_.png'
import ReadMoreIcon from '../../assets/icon/read-more.png'
import './CrudFish.css'


const CrudFish = () => {
  const [mockData, setMockData] = useState([
    {
      id: 1,
      name: 'name',
      scienticName: 'ScienticName',
      family: 'family'
    },
    {
      id: 2,
      name: 'name2',
      scienticName: 'ScienticName2',
      family: 'family2'
    },
    {
      id: 3,
      name: 'name3',
      scienticName: 'ScienticName3',
      family: 'family3'
    },
  ])
  const deleteFish = (id) => {
    setMockData(mockData.filter(fish => fish.id !== id))
  }

  return (
    <div className='crud-container'>

      
      <div className='crud-card'>
        <table className='crud-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Scientfic Name</th>
              <th>Family</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {
              mockData.map(({id, name, scienticName, family}) => 
                <tr key={id}>
                  <td>{name}</td>
                  <td>{scienticName}</td>
                  <td>{family}</td>
                  <td className='curd-option'>
                    <button className='options-button'>
                      <img src={ReadMoreIcon} alt="read-more-icon" />
                    </button>
                    <button className='options-button'>
                      <img src={CreateIcon} alt="create-icon" />
                    </button>
                    <button 
                      onClick={() => {deleteFish(id)}}
                      className='options-button'
                    >
                      <img src={DeleteIcon} alt="delete-icon" />
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <button className='create-button'>
          <img src={CreateIcon} alt="create-icon" />
          <h4>Create</h4>
        </button>
      </div>
    </div>
  )
}

export default CrudFish