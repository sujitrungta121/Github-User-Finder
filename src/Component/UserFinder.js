import React, { useState, useEffect } from 'react'
import "./App.css";

const UserFinder = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([""]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url1 = `https://api.github.com/users/${search}`;
      const url2 = 'https://api.github.com/users';
      if (search) {
        const response = await fetch(url1);
        const data = await response.json();
        setUsers(data);
      }
      else {
        const response = await fetch(url2);
        const data = await response.json();
        setUsers(data);
      }



    }
    fetchApi();
  }, [])
  return (
    <div className="body">
      <div className="heading_box">
        <h1>Github User Finder</h1>
      </div>
      <div className="input">
        <input type="text" placeholder='Type the name of the user' onChange={handleChange} />
      </div>


      {!search ? (

        <div className="container">
          {
            users.map((user) => {
              return (
                <div className="box">
                  <div className="userDetails">
                    <div className="userAvatar "><img src={user.avatar_url} className="img" /></div>
                    <span className="userName bgColor ">
                      <span>UserName</span>
                      <span> {user.login}</span>
                    </span>
                  </div>
                  <div className="repo">
                    <div className="userFol bgColor">Repositories</div>
                    <div className="userLike bgColor"><a href={user.repos_url}>Click to see my Repo</a></div>
                  </div>

                </div>
              )
            })
          }


        </div>
      ) : search === "pratiti" ? (
        <div className="container2">
          <div className="body2">
            <div className="userDetails ">
              <span className="bgColor">userAvatar</span>
              <span className="bgColor">userName</span>

            </div>
            <div className="fol_Like bgColor">
              <span className="bgColor">followers</span>
              <span className="bgColor">likes</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container3">
          <div className="box3">
            <p>you are not registered in Github if you want to register your self kindly click on the link below to register your self on the git hub.</p>
            <button className="btn"> <a href='https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home'>Register on Github</a></button>
          </div>
        </div>
      )
      }


    </div>
  )
}

export default UserFinder;
