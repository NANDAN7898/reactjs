import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddMeetupHandler = async (enteredMeetup) => {
    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(enteredMeetup),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();
    console.log(enteredMeetup);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
