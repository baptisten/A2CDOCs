import * as React from "react";

import Layout from "../../components/Layout";
import DocType2Roll from "../../components/DocType2Roll";

export default class DocType2IndexPage extends React.Component {
  render() {
    document.body.classList.add('all');
    let filtercats = (cat) => {
      console.log(cat);
      document.body.classList.remove("all", "mci", "mc2i", "predalles", "dallebb","premontes","elementslineaires");
      document.body.classList.add(cat);
    }
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #235da4, -0.5rem 0 0 #235da4",
              backgroundColor: "#235da4",
              color: "white",
              padding: "1rem",
            }}
          >
            Documents Produits
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="filters">
              <span className="filter" onClick={()=>filtercats('all')}>Tous</span>
              <span className="filter" onClick={()=>filtercats('mci')}>MCi</span>
              <span className="filter" onClick={()=>filtercats('mc2i')}>MC2i</span>
              <span className="filter" onClick={()=>filtercats('predalles')}>Prédalles</span>
              <span className="filter" onClick={()=>filtercats('dallebb')}>Dalle BB</span>
              <span className="filter" onClick={()=>filtercats('premontes')}>Prémontés</span>
              <span className="filter" onClick={()=>filtercats('elementslineaires')}>Eléments linéaires</span>
            </div>
            <div className="content">
              <DocType2Roll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
