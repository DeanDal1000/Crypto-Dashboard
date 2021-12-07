import React from 'react';
import '../styles/Convertor.css';
import Exchangerate from './Exchangerate';

const Convertor = () => {
  return (
    <div className="convertor-container">
      <h1 className="convert-title">Currency Convertor</h1>
      <div className="table-input">
        <table>
          <body>
            <tr>
              <td>Primary Currecny </td>
              <td>
                <input type="number" name="currency-amount-1" value={''} />
              </td>
              <td>
                <select
                  className="currency-option"
                  name="currency-option-1"
                  id=""
                  value={''}
                >
                  <option value=""></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currecny </td>
              <td>
                <input type="number" name="currency-amount-2" value={''} />
              </td>
              <td>
                <select
                  className="currency-option"
                  name="currency-option-2"
                  id=""
                  value={''}
                >
                  <option value=""></option>
                </select>
              </td>
            </tr>
          </body>
        </table>
      </div>
      <Exchangerate />
    </div>
  );
};

export default Convertor;
