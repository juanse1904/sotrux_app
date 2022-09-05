import React from "react";
import "./tabContainer.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import closeIcon from "../../assets/closeTab_icon.svg";
import { removeActiveTab } from "../../ducks/tabs";
import { sendActiveViewId } from "../../ducks/activeView";

const TabsContainer = () => {
  const currentTabs = useSelector((state) => state.Tabs.activeTabs);
  const activeView = useSelector((state) => state.activeView.idView);
  const history = useNavigate();
  const dispatch = useDispatch();
  const activateTable = (key) => {
    history(`/${key}`);
    dispatch(sendActiveViewId(key));
  };
  const closeTab = (id) => {
    const nextTableId = currentTabs[currentTabs.length - 2];
    activateTable(nextTableId);
    dispatch(removeActiveTab(id));
  };
  const Tabs = ({ title, identifier, active }) => {
    return (
      <div
        onClick={() => {
          activateTable(identifier);
        }}
        className={`tabContainer_tab-item ${active ? "" : "tabContainer_tab-item-inactivated"}`}
      >
        <p>{title}</p>
        <img
          src={closeIcon}
          onClick={() => {
            closeTab(identifier);
          }}
          className="tabContainer_tab-item_closeIcon"
          alt=""
        />
      </div>
    );
  };
  return (
    currentTabs.length && (
      <div className="tab-container">
        {currentTabs.map((tab) => (
          <Tabs key={tab.idTab} identifier={tab.idTab} title={tab.name} active={tab.idTab === activeView} />
        ))}
      </div>
    )
  );
};

export default TabsContainer;
