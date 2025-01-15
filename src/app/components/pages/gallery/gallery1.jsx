import { useEffect } from "react";
import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor } from "../../../../globals/constants";
import _data from "../../../../globals/data/data.json";

function Gallery1Page() {
  const { gallery } = _data;

  useEffect(() => {
    loadScript("js/masonry-grid.js");
    loadScript("js/custom.js");
  });

  return (
    <>
      {/* Gallery Grid */}
      <div className="section-full p-t87 p-b70">
        <div className="container">
          {/* Filter category */}
          <div className="filter-wrap p-b15 m-b30">
            <ul className="masonry-filter outline-style">
              <li className="active">
                <a data-filter="*" href="*">
                  All
                </a>
              </li>
              <li>
                <a data-filter=".cat-1" href=".cat-1">
                  Cargo
                </a>
              </li>
              <li>
                <a data-filter=".cat-2" href=".cat-2">
                  Logistic
                </a>
              </li>
              <li>
                <a data-filter=".cat-3" href=".cat-3">
                  Storage
                </a>
              </li>
              <li>
                <a data-filter=".cat-4" href=".cat-4">
                  Trucking
                </a>
              </li>
              <li>
                <a data-filter=".cat-5" href=".cat-5">
                  Warehousing
                </a>
              </li>
            </ul>
          </div>
          {/* Gallery Part */}
          <div className="portfolio-wrap mfp-gallery no-col-gap row">
            {gallery.map((_item, index) => {
              if (index === gallery.length - 2) {
                return null;
              }
              return (
                <div
                  key={index}
                  className={
                    "masonry-item " +
                    _item.category +
                    " col-lg-6 col-md-6  m-b30"
                  }
                >
                  <div className="mt-gallery-bx  overflow-hide m-lr15 p-a10 bg-gray">
                    <div className="mt-thum-bx mt-img-overlay6 mt-img-effect">
                      <FastImage src={_item.image} alt="" />
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <a
                            href={publicUrlFor(_item.image_preview)}
                            className="mfp-link"
                          >
                            <i className="fa fa-search mt-icon-box-xs" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pagination */}
          <div className="pagination-bx  clearfix ">
            <ul className="pagination gap-1">
              <li>
                <button className="pagination-button">«</button>
              </li>
              <li className="active">
                <button className="pagination-button">1</button>
              </li>
              <li>
                <button className="pagination-button">2</button>
              </li>
              <li>
                <button className="pagination-button">3</button>
              </li>
              <li>
                <button className="pagination-button">4</button>
              </li>
              <li>
                <button className="pagination-button">5</button>
              </li>
              <li>
                <button className="pagination-button">»</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery1Page;
