import { Person } from "../data";
import { FunctionComponent, SyntheticEvent } from "react";
import cardStyles from "./cards.module.css";

interface PersonCardContainerProps {
  peopleInfo: Person[];
}

// in case image for a user fails to load
// default to some basic profile
function addDefaultSrc(e: SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = "/images/profile.png";
}

const PersonCardContainer: FunctionComponent<PersonCardContainerProps> = ({
  peopleInfo,
}) => {
  return (
    <div>
      <h2>Officers</h2>
      <hr />
      <div className={cardStyles.cardFlexBox}>
        {peopleInfo.map((p: Person) => (
          <div className={cardStyles.card} key={p.id}>
            <img
              src={`/images/person/${p.id}.png`}
              className={cardStyles.cardImg}
              onError={(e) => addDefaultSrc(e)}
              alt={p.name}
            />
            <div className={cardStyles.cardContainer}>
              <span>{p.name}</span>
              {p.role.includes(",") ? (
                p.role.split(",").map((r, i) => {
                  return <p key={i}>{r}</p>;
                })
              ) : (
                <p>{p.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonCardContainer;
