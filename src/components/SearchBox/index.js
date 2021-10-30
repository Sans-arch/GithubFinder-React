import React, { useState } from 'react';

import UserProfile from '../UserProfile';

import api from '../../services/api';

import './styles.scss';

export default function SearchBox() {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  function handleSearchName(e) {
    e.preventDefault();

    if (!name) return;

    api.get(name)
      .then(response => {
        setData(response.data)
      })
      .catch(err => setData({ error: err }))
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type a username"
        />
        <button
          type="submit"
          onClick={handleSearchName}
        >
          Find
        </button>
      </form>

      <UserProfile user={data} />
    </>
  );
}
