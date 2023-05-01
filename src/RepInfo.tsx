import React from 'react';
import {useState, useEffect } from 'react';
export {};

interface Repos {
    name : string;
    html_url : string;
    description : string;
}

var RepInfo = () => {
    const [reposes, setReposes] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/vladdy-moses/repos')
        .then(response => response.json())
        .then(res => setReposes(res))
    }, []);
    var table = 
    <table>
        <tr>
            <th>Название</th>
            <th>Описание</th>
        </tr>
        {reposes.map((reposes : Repos) => 
        {
            var tablerow = 
            <tr>
                <td><a href = {reposes.html_url}>{reposes.name}</a></td>
                <td>{reposes.description}</td>
            </tr>
            return tablerow;
        })}
    </table>
    return table
}

export default RepInfo;