import React from 'react';
import MainStatisticsCard from './components/MainStatisticsCard';
import './style.scss';

function App() {
  return (
    <div className="App">
      <main>
        <div className="dashboard">
          <div className="dashboard__main-statistics main-statistics">
            <MainStatisticsCard color="violet" name="Кол-во зарегистрированных пользователей:" count="4040" />
            <MainStatisticsCard color="yellow" name="Кол-во пользователей на сайте:" count="2050" />
            <MainStatisticsCard color="green" name="Кол-во пользователей в приложении:" count="1040" />
            <MainStatisticsCard color="violet" name="Кол-во регистраций на сайте:" count="3040" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
