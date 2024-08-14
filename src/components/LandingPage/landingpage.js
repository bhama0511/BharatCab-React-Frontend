import React from 'react';
import './landingPage.css';


const LandingPage = () => {
  return (
    <table className="layout-table">
      <tbody>
        <tr>
          <td className="gif-container">
            <img src={require('./car2.gif')} alt="Car GIF" />
          </td>
          <td className="text-container">
            <p>
            
              <strong>
                Connecting Journeys,<br />
                Sharing Rides, Saving Costs.<br />
                Your Travel Partner.
              </strong>
            </p>
            

          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LandingPage;
