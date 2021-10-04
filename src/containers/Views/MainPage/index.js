import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TrendingHeader from "../../../components/TrendingHeader";
import getGithubDevelopers from "../../../actions/Developers";
import getGithubRepositories from "../../../actions/Repositories";
import Navigator from "../../../components/Navigator";
import RepositoriesItems from "./RepositoriesItems";
import DevelopersItems from "./DevelopersItems";

import "./style.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponentName:
        props.match.url === "/developers" ? "Developers" : "Repositories",
      _activeIndex: props.match.url === "/developers" ? 1 : 0,
    };
  }

  componentDidMount() {
    this.getGithubDevelopers();
  }

  getGithubDevelopers = () => {
    const { _getGithubDevelopers, _getGithubRepositories } = this.props;
    _getGithubDevelopers();
    _getGithubRepositories();
  };

  render() {
    const {
      state: { selectedComponentName, _activeIndex },
      props: { TrendingDevelopers, TrendingRepositories, history },
    } = this;

    let componentsList = [
      {
        id: 1,
        name: "Repositories",
        component: (
          <RepositoriesItems Repositories={TrendingRepositories?.list || []} />
        ),
      },
      {
        id: 1,
        name: "Developers",
        component: (
          <DevelopersItems Developers={TrendingDevelopers?.list || []} />
        ),
      },
    ];
     return (
      <div>
        <TrendingHeader  selectedComponentName={selectedComponentName}/>
        <div className="trending-lists-containre">
          <div>
            <div className="trending-lists-header">
              <div className="list-nav">
                <div className="nav-item-section">
                  {componentsList.map((_item, _index) => (
                    <button
                      key={`${_item.name + _index}`}
                      onClick={() => {
                        history.push(
                          _item.name === "Repositories"
                            ? "/trending"
                            : "/developers"
                        );
                        this.setState({
                          _activeIndex: _index,
                          selectedComponentName: _item.name,
                        });
                      }}
                      className={`${_activeIndex === _index ? "active" : " "}`}
                    >
                      {_item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="list-filter">
                {selectedComponentName === "Repositories" ? (
                  <>
                    {" "}
                    <div>Spoken Language: Any</div>
                    <span />
                  </>
                ) : null}
                <div>Language Any:</div>
                <span />
                <div>Date range:</div>
                <span>Today&nbsp;</span>
              </div>
            </div>

            <Navigator
              componentsList={componentsList}
              selectedComponentName={selectedComponentName}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  _getGithubDevelopers: getGithubDevelopers,
  _getGithubRepositories: getGithubRepositories,
};

const mapStateToProps = (state) => ({
  ...state,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainPage));
