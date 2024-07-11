import React, { useEffect, useRef, useState } from 'react'
import '../Style/principal.css'
import JsonProject from '../projects.json'

const Principal = () => {

  const [projects, setProjects] = useState([])
  const [architecture, setArchitecture] = useState('')
  const [urban, setUrban] = useState('')
  const [interior, setInterior] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    setProjects(JsonProject.info)
    inputRef.current.focus();
  }, [])

  const handleOnChangeArch = (e) => {
    setArchitecture(e.target.value)
  }

  const handleOnChangeUrban = (e) => {
    setUrban(e.target.value)
    console.log(e.target.value)
  }

  const handleOnChangeInter = (e) => {
    setInterior(e.target.value)
  }


  const btnArch = () => {
    document.getElementById('arch_').style.display = "flex"
    document.getElementById('urban_').style.display = "none"
    document.getElementById('inte_').style.display = "none"
    document.getElementById('archi_proj').style.display = "grid"
    document.getElementById('urba_proj').style.display = "none"
    document.getElementById('inte_proj').style.display = "none"
  }

  const btnUrb = () => {
    document.getElementById('arch_').style.display = "none"
    document.getElementById('urban_').style.display = "flex"
    document.getElementById('inte_').style.display = "none"
    document.getElementById('archi_proj').style.display = "none"
    document.getElementById('urba_proj').style.display = "grid"
    document.getElementById('inte_proj').style.display = "none"
  }

  const btnInte = () => {
    document.getElementById('arch_').style.display = "none"
    document.getElementById('urban_').style.display = "none"
    document.getElementById('inte_').style.display = "flex"
    document.getElementById('archi_proj').style.display = "none"
    document.getElementById('urba_proj').style.display = "none"
    document.getElementById('inte_proj').style.display = "grid"
  }

  






  return (
    <div className='principal-container'>
      <div className='principal-banner'>
        <h1>Architecture</h1>
      </div>
      <div className='principal-section-filter'>
          <div className='principal-sec-text'>
            <p>Architecture is more than designing structures, it’s a process that results in a lasting impact on its surroundings, community and streetscape. We consider every finite detail and are meticulous in our approach, working hand-in-hand with the client and project team to incorporate design solutions that are forward-looking, sustainable and complementary to the community while respectful of cost and time constraints. We design buildings that inspire, welcome and engage their end users for years to come.</p>
          </div>
          <div className='principal-content-filters'>
            <div className='principal-sect-filters'>
              <input onClick={btnArch} type="button" ref={inputRef} value="Architecture"/>
              <input onClick={btnUrb} type="button" value="Urban design"/>
              <input onClick={btnInte} type="button" value="Interior design"/>
              <input value="Visual Design"/>
            </div>
            <div className='principal-sect-filters principal-architecture' id="arch_" >
              <input onClick={handleOnChangeArch}  type="button" value="All projects"/>
              <input onClick={handleOnChangeArch} type="button" value="civic + public"/>
              <input onClick={handleOnChangeArch} type="button" value="education"/>
              <input onClick={handleOnChangeArch} type="button" value="mixed-used + multifamily"/>
              <input onClick={handleOnChangeArch} type="button" value="workplace"/>
              <input onClick={handleOnChangeArch} type="button" value="awards"/>
            </div>
            <div className='principal-sect-filters principal-urban' id="urban_">
            <input onClick={handleOnChangeUrban} type="button" value="all projects"/>
              <input onClick={handleOnChangeUrban} type="button" value="residential"/>
            </div>
            <div className='principal-sect-filters principal-interior' id="inte_">
              <input onClick={handleOnChangeInter} type="button" value="ALL PROJECTS"/>
              <input onClick={handleOnChangeInter} type="button" value="commercial"/>
              <input onClick={handleOnChangeInter} type="button" value="Education"/>
              <input onClick={handleOnChangeInter} type="button" value="hospitality"/>
              <input onClick={handleOnChangeInter} type="button" value="institutional"/>
            </div>
          </div>
          
      </div>
      <div className='principal-projects'>
        <div className='principal-projects-content principal-projects-arch' id="archi_proj">
        {architecture !== "All projects" || architecture === '' ? projects && projects.filter(items => items.name_categories === "architecture").map(items => (
            items.name_projects && items.name_projects.filter(it => it.type === architecture).map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          )) : projects && projects.filter(items => items.name_categories === "architecture").map(items => (
            items.name_projects && items.name_projects.map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          ))}
        </div>
        <div className='principal-projects-content principal-projects-urban' id="urba_proj">
          {urban !== "all projects" ? projects && projects.filter(items => items.name_categories === "urban design").map(items => (
            items.name_projects && items.name_projects.filter(it => it.type === urban).map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          )) : projects.filter(items => items.name_categories === "urban design").map(items => (
            items.name_projects && items.name_projects.map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          ))}
          </div>
          <div className='principal-projects-content principal-projects-inter' id="inte_proj" >
          {interior !== "ALL PROJECTS" ? projects && projects.filter(items => items.name_categories === "interior design").map(items => (
            items.name_projects && items.name_projects.filter(it => it.type === interior).map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          )) :
          projects.filter(items => items.name_categories === "interior design").map(items => (
            items.name_projects && items.name_projects.map(info => (
              <div key={info.id} className='projects-boxes'>
                <p>{info.name}</p>
              </div>
            ))
          ))
          }
          </div>
      </div>
    </div>
  )
}

export default Principal