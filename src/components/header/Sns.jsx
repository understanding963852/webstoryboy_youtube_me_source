import React from "react";
import { snsLink } from "../../data/header";
const Sns = () => {
  return (
    <div className="header__sns">
      <ul>
        {snsLink.map((sns, key) => (
          <li key={key}>
            <a //내부링크가 아니라 외부링크일때는 a태그 사용해도되고 Link사용해도 되다
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.title}
            >
              <span>{sns.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sns;
