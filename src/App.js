import { useState } from 'react';

import { Card } from './Components/Card';
import { UserCard } from './Components/UserCard';

import work from './styles/images/icon-work.svg';
import play from './styles/images/icon-play.svg';
import study from './styles/images/icon-study.svg';
import exercise from './styles/images/icon-exercise.svg';
import social from './styles/images/icon-social.svg';
import selfCare from './styles/images/icon-self-care.svg';

import jsonData from './data.json';

function App() {

  const [moment, setMoment] = useState('weekly');

  const returnCurrentMoment = (activity, moment) => {
    if (moment === 'daily') {
      return jsonData[activity].timeframes.daily.current;
    } else if (moment === 'weekly') {
      return jsonData[activity].timeframes.weekly.current;
    } else {
      return jsonData[activity].timeframes.monthly.current;
    }
  }

  const returnPreviousMoment = (activity, moment) => {
    if (moment === 'daily') {
      return jsonData[activity].timeframes.daily.previous;
    } else if (moment === 'weekly') {
      return jsonData[activity].timeframes.weekly.previous;
    } else {
      return jsonData[activity].timeframes.monthly.previous;
    }
  }

  const onClick = (moment) => {
    setMoment(moment);
  }

  return (
    <div className="app__main">
      <div className="app__user-card-container">
        <UserCard onClick={onClick} moment={moment} />
      </div>
      <div className="app__card-container">
        <Card
          title={jsonData[0].title}
          time={returnCurrentMoment(0, moment)}
          lastWeek={returnPreviousMoment(0, moment)}
          decoration={work}
          color="hsl(15, 100%, 70%)"
        />
        <Card
          title={jsonData[1].title}
          time={returnCurrentMoment(1, moment)}
          lastWeek={returnPreviousMoment(1, moment)}
          decoration={play}
          color="hsl(195, 74%, 62%)"
        />
        <Card
          title={jsonData[2].title}
          time={returnCurrentMoment(2, moment)}
          lastWeek={returnPreviousMoment(2, moment)}
          decoration={study}
          color="hsl(348, 100%, 68%)"
        />
        <Card
          title={jsonData[3].title}
          time={returnCurrentMoment(3, moment)}
          lastWeek={returnPreviousMoment(3, moment)}
          decoration={exercise}
          color="hsl(145, 58%, 55%)"
        />
        <Card
          title={jsonData[4].title}
          time={returnCurrentMoment(4, moment)}
          lastWeek={returnPreviousMoment(4, moment)}
          decoration={social}
          color="hsl(264, 64%, 52%)"
        />
        <Card
          title={jsonData[5].title}
          time={returnCurrentMoment(5, moment)}
          lastWeek={returnPreviousMoment(5, moment)}
          decoration={selfCare}
          color="hsl(43, 84%, 65%)"
        />
      </div>
    </div>
  );
}

export default App;
