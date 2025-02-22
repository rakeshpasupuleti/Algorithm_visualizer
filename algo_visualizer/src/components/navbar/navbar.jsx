import React, { useState } from 'react';
import './navbar.css';
import { useParams } from '../../context/context';

export default function Navbar() {
  const { mode, setmode, algo, setalgo, setres, setrun } = useParams();

  return (
    <div className='navbar'>
      <div className='container'>
        <button
          type="button"
          className={['btn', 'btn-primary', mode === 'setstart' ? 'selected' : ''].join(' ')}
          onClick={() => {
            setmode(mode === 'setstart' ? null : 'setstart');
          }}
        >
          <i className="bi bi-geo-alt"></i>
        </button>
        <button
          type="button"
          className={['btn', 'btn-primary', mode === 'settarget' ? 'selected' : ''].join(' ')}
          onClick={() => {
            setmode(mode === 'settarget' ? null : 'settarget');
          }}
        >
          <i className="bi bi-geo"></i>
        </button>
        <button
          type="button"
          className={['btn', 'btn-primary', mode === 'addbricks' ? 'selected' : ''].join(' ')}
          onClick={() => {
            setmode(mode === 'addbricks' ? null : 'addbricks');
          }}
        >
          <i className="bi bi-bricks"></i>
        </button>
        <button
          type="button"
          className={['btn', 'btn-primary', mode === 'addweight' ? 'selected' : ''].join(' ')}
          onClick={() => {
            setmode(mode === 'addweight' ? null : 'addweight');
          }}
        >
          <i className="bi bi-virus"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setres((old) => !old);
          }}
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setrun((old) => !old);
          }}
        >
          <i className="bi bi-caret-right"></i>
        </button>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={algo}
            onChange={(e) => {
              setalgo(e.target.value);
            }}
          >
            <option value=''>Choose your algorithm</option>
            <option value="dijkstra">dijkstra</option>
            <option value="BDS">BDS</option>
            <option value="BFS">BFS</option>
          </select>
        </div>
      </div>
    </div>
  );
}
