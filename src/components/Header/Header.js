import React, { useMemo } from "react";
import { TabsIcons } from "../../Utils/IconList";
import "./Header.css";

const navTabs = [
  {
    icon: "code",
    name: "Code",
    count: 0,
  },
  {
    icon: "issues",
    name: "Issues",
    count: 928,
  },
  {
    icon: "pullRequests",
    name: "Pull requests",
    count: 257,
  },
  {
    icon: "actions",
    name: "Actions",
    count: 0,
  },
  {
    icon: "projects",
    name: "Projects",
    count: 0,
  },
  {
    icon: "wiki",
    name: "Wiki",
    count: 0,
  },
  {
    icon: "security",
    name: "Security",
    count: 0,
  },
  {
    icon: "insights",
    name: "Insights",
    count: 0,
  },
];

const Header = () => {
  const memoizedNavTabs = useMemo(() => navTabs, []);

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-top-left">
          <TabsIcons type="repo" />
          <span>facebook</span>
          <span>/</span>
          <span>react</span>
          <span>Public</span>
        </div>
        <div className="header-top-right">
          <div>
            <TabsIcons type="notifications" />
            <span>Notifications</span>
          </div>
          <div>
            <TabsIcons type="fork" />
            <span>Fork</span>
            <span className="outline-children">42.2k</span>
          </div>
          <div>
            <TabsIcons type="star" />
            <span>Star</span>
            <span className="outline-children">203k</span>
          </div>

        </div>

      </div>
      <div className="header-bottom">
        {memoizedNavTabs.map((val, index) => (
          <div className="header-tabs" key={index}>
            <TabsIcons type={val.icon} />
            <span>{val.name}</span>
            {val.count > 0 && <span>{val.count}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Header);
