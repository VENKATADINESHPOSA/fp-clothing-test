import React from "react";
import SHOPPAGE_DATA from "./shoppage.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOPPAGE_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="home-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <div key={id}>
            <CollectionPreview {...otherCollectionProps} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
