import React from "react";
import { ReactComponent as PopularIcon } from "../../../../assets/images/popular.svg";
import { ReactComponent as BookIcon } from "../../../../assets/images/book.svg";

import "./style.scss";
const DevelopersItems = ({ Developers }) => {
  return (
    <div className="developers-item-container">
      {Developers.map((_dev) => (
        <div className="repo-item">
          <div className="dev-item">
            <div className="dev-name dev-item-width">
              <div className="rank-item">{_dev.rank}</div>
              <div className="d-flex">
                <img className="avatar" src={_dev.avatar} alt={_dev.avatar} />
                <div>
                  <div className="display-name">{_dev.name}</div>
                  <div className="username">{_dev.username}</div>
                </div>
              </div>
            </div>
            <div className="dev-item-width">
              <div className="d-flex flex-center">
                <PopularIcon fill="#db6d28" />
                <span className="popular-title">Popular repo</span>
              </div>
              <div className="d-flex flex-center popular-name">
                <BookIcon fill="#8b949e" />{" "}
                {_dev?.popularRepository?.repositoryName}
              </div>
              <div className="popular-desc">
                {_dev?.popularRepository?.description}
              </div>
            </div>
            <div className="dev-item-width d-flex flex-content-end">
              <div className="follow">
                <span>Follow</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevelopersItems;
