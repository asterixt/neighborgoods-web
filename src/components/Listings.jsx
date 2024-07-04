import { useState } from 'react';

const Listings = () => {
  const [listings ] = useState([
    {id: 1234, title: 'Story books', description: 'Kids story books', photoUrl: ''},
    {id: 4234, title: 'note books',  description: 'Kids note books', photoUrl: ''},
    {id: 1765, title: 'Kids bikes', description: 'Kids bike', photoUrl: ''}
  ]);

  return (
    <div>Listings
    <ul>
      { listings.map((listing)=> (
        <li key={listing.id}>
           
           <a href="#">
            {/* <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
              <span className="slds-icon_container slds-icon-utility-knowledge_base">
               
              </span>
            </div> */}
            <div>
              <h2 title="{listing.title}">{listing.title}</h2>
              <p>{listing.description}</p>
            </div>
          </a>
        </li>
      ))
      }
    </ul>
    </div>
)
}

export default Listings;