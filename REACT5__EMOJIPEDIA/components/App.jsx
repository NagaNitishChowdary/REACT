import React from "react";
import Emoji from "./Emoji";
import emojipedi from "../emojipedia.js";

function emojipedia(card) {
  return (
    <Emoji
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedi.map(emojipedia)}

      {/* <Emoji
        key={emojipedia[0].id}
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      />

      <Emoji
        key={emojipedia[1].id}
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        meaning={emojipedia[1].meaning}
      />

      <Emoji
        key={emojipedia[2].id}
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        meaning={emojipedia[2].meaning}
      /> */}

      {/* <Emoji
        emoji="💪"
        name="Tense Biceps"
        meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />

      <Emoji
        emoji="🙏"
        name="Person With Folded Hands"
        meaning="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
      />

      <Emoji
        emoji="🤣"
        name="Rolling On The Floor, Laughing"
        meaning="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
      /> */}

      {/* <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>
      </dl> */}
    </div>
  );
}

export default App;
