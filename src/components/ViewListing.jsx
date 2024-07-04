import React from 'react'

const ViewListing = ({listingId, isOwner}) => {
  const [items, setItems ] = useState([
    {id: 1234, title: 'Story books', description: 'Kids story books', photoUrl: ''},
    {id: 4234, title: 'note books',  description: 'Kids note books', photoUrl: ''},
    {id: 1765, title: 'Kids bikes', description: 'Kids bike', photoUrl: ''}
  ]);


  return (
     
    <div>Items
      { isOwner &&
         <button> Delete Listing
        </button> 
      }
      <ul>
      { items.map((item)=> (
        <li key={item.id}>
           
           <a href="#" className="slds-box slds-box_link slds-box_x-small slds-media">
            <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
              <span className="slds-icon_container slds-icon-utility-knowledge_base">
               
              </span>
            </div>
            <div className="slds-media__body slds-border_left slds-p-around_small">
              <h2 className="slds-truncate slds-text-heading_small" title="{listing.title}">{item.title}</h2>
              <p className="slds-m-top_small">{item.description}</p>
            </div>
            <button title="Claim">Claim</button>
          </a>
        </li>
      ))}
      </ul>
  
    </div>
  )
}

export default ViewListing;
