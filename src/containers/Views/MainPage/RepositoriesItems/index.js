import React from "react";
import "./style.scss";
import { ReactComponent as BookIcon } from "../../../../assets/images/book.svg";
import { ReactComponent as StarIcon } from "../../../../assets/images/star.svg";
import { ReactComponent as ForkIcon } from "../../../../assets/images/fork.svg";

const RepositoriesItems = ({ Repositories }) => {
  return (
    <div className="repositories-item-container">
      {Repositories.map((_repo, _index) => (
        <div className="repo-item" key={`${_repo.username + _index}`}>
          <div className="d-flex repo-title-container">
            <div className="repo-title">
              <BookIcon fill="#8b949e" /> {_repo.username}&nbsp;/&nbsp;
              {_repo.repositoryName}
            </div>
            <div className="star d-flex">
              <StarIcon fill="#8b949e" />
              <span>Star</span>
            </div>
          </div>
          <p className="repo-description">{_repo.description}</p>
          <div className="repo-footer">
            <div className="repo-info-section">
              <div className="inf-item">{_repo.language}</div>
              <div className="d-flex flex-center inf-item">
                <StarIcon fill="#8b949e" /> {_repo.totalStars.toLocaleString()}
                <div />
              </div>
              <div className="d-flex flex-center inf-item">
                <ForkIcon fill="#8b949e" /> {_repo.forks.toLocaleString()}
              </div>
              <div className="inf-item">
                Built by&nbsp;&nbsp;
                {_repo.builtBy.map((_buildItem, _index) => (
                  <img
                    key={`${_buildItem.avatar}_${_index}`}
                    className="user-avatar"
                    src={_buildItem.avatar}
                    alt={_buildItem.avatar}
                  />
                ))}
              </div>
            </div>
            <div className="star-since">
              <StarIcon fill="#8b949e" />
              {_repo.starsSince} stars today
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepositoriesItems;
