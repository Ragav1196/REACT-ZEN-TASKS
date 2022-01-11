import { useState } from "react";
import { UserContent } from "./UserContent";

export function UsersList() {
  const usersList = [
    {
      name: "RAGAVENDIRAN",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU",
      id: "8",
    },
    {
      name: "AKSHAYA",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
      id: "9",
    },
    {
      name: "RAMYA",
      avatar: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
      id: "10",
    },
    {
      name: "KARTHICK",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: "11",
    },
    {
      name: "RAKESH",
      avatar: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
      id: "12",
    },
    {
      name: "VIJAY",
      avatar: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6",
      id: "13",
    },
  ];

  // TO TOGGLE HIDE EDIT FORM
  const [editForm, setEditForm] = useState(null);

  function editFormHide(id) {
    if (!editForm) {
      setEditForm(id);
    } else if (editForm !== id) {
      setEditForm(id);
    } else {
      setEditForm(null);
    }
  }

  return (
    <section className="userContentCtnr">
      {usersList.map(({ name, avatar, id }) => (
        <UserContent
          name={name}
          avatar={avatar}
          id={id}
          key={id}
          editForm={editForm}
          setEditForm={setEditForm}
          editFormHide={editFormHide} />
      ))}
    </section>
  );
}
