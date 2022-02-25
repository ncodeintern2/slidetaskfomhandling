// import React from 'react';
// import AllMeetups from './compoment/AllMeetUp';

import React, { useState } from 'react';
import MeetupItem from './compoment/MeetupItem';
import MeetupList from './compoment/MeetupList';
import NewData from './compoment/NewData';
import NewMeetupForm from './compoment/NewMeetupForm';


const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);


  const addExpenseHandler = expense => {

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };



  return (
    <div>
      {/* <MeetupList list={DUMMY_DATA} /> */}
      <NewData onAddExpense={addExpenseHandler} />
      {/* <MeetupList new={expenses} /> */}

      <ul>
        {expenses.map((meetup) => {
          return (<MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
          />)


        })}

      </ul>
    </div >
  )




}
export default App;


